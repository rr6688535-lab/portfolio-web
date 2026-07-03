import json
from django.conf import settings
from django.db.models import Avg, Count
from django.core.cache import cache
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET, require_http_methods, require_POST
from .models import Rating
from django.middleware.csrf import get_token

def health(_request):
    return JsonResponse({'status': 'ok', 'service': 'portfolio-api'})


def _client_ip(request):
    forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if forwarded_for:
        return forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR', 'unknown')


def _is_rate_limited(request, bucket, limit, window_seconds):
    ip = _client_ip(request)
    key = f'ratelimit:{bucket}:{ip}'
    current = cache.get(key, 0)
    if current >= limit:
        return True
    if current == 0:
        cache.set(key, 1, timeout=window_seconds)
    else:
        cache.incr(key)
    return False




@ensure_csrf_cookie
@require_GET
def csrf(request):
    return JsonResponse({
        "ok": True,
        "csrfToken": get_token(request),
    })

def _rating_summary():
    aggregate = Rating.objects.aggregate(avg=Avg('value'), count=Count('id'))
    db_count = int(aggregate['count'] or 0)
    db_avg = float(aggregate['avg'] or 0)
    base_count = int(getattr(settings, 'BASELINE_RATING_COUNT', 0))
    base_avg = float(getattr(settings, 'BASELINE_RATING_AVG', 0))

    total_count = base_count + db_count
    if total_count == 0:
        return {'average': '0.0', 'count': 0}

    weighted_sum = (base_avg * base_count) + (db_avg * db_count)
    average = round(weighted_sum / total_count, 1)
    return {'average': f'{average:.1f}', 'count': total_count}


@require_http_methods(['GET', 'POST'])
def ratings(request):
    if request.method == 'GET':
        return JsonResponse({'ok': True, 'summary': _rating_summary()})
    if _is_rate_limited(request, 'ratings', 30, 60):
        return JsonResponse({'ok': False, 'error': 'Too many rating requests. Please try again later.'}, status=429)

    try:
        payload = json.loads(request.body.decode('utf-8'))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({'ok': False, 'error': 'Invalid JSON payload.'}, status=400)

    value = payload.get('value')
    if not isinstance(value, int) or value < 1 or value > 5:
        return JsonResponse({'ok': False, 'error': 'Rating value must be an integer between 1 and 5.'}, status=400)

    Rating.objects.create(value=value)
    return JsonResponse({'ok': True, 'summary': _rating_summary()})


@require_POST
def contact(request):
    if _is_rate_limited(request, 'contact', 5, 300):
        return JsonResponse({'ok': False, 'error': 'Too many contact requests. Please try again later.'}, status=429)
    # Parse raw JSON body from frontend contact form request.
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({'ok': False, 'error': 'Invalid JSON payload.'}, status=400)

    # Fields shared by both form intents.
    contact_intent = (payload.get('contactIntent') or '').strip()
    name = (payload.get('name') or '').strip()

    # Fast validation for required route-level fields.
    if contact_intent not in {'request-call', 'book-appointment'}:
        return JsonResponse({'ok': False, 'error': 'Invalid contact intent.'}, status=400)
    if not name:
        return JsonResponse({'ok': False, 'error': 'Name is required.'}, status=400)

    # Build subject/body for "Request Call/Text" submissions.
    if contact_intent == 'request-call':
        contact_value = (payload.get('contact') or '').strip()
        service = (payload.get('service') or '').strip()
        preference = (payload.get('contactPreference') or '').strip().lower()

        if not contact_value or not service or preference not in {'call', 'text'}:
            return JsonResponse({'ok': False, 'error': 'Missing request-call fields.'}, status=400)

        subject = f'New Request Call/Text Lead - {name}'
        lines = [
            'New contact request received.',
            '',
            'Intent: Request Call/Text',
            f'Name: {name}',
            f'Contact: {contact_value}',
            f'Service Needed: {service}',
            f'Preferred Mode: {preference.title()}'
        ]
    else:
        # Build subject/body for "Book Appointment" submissions.
        email = (payload.get('email') or '').strip()
        message = (payload.get('message') or '').strip()

        if not email or not message:
            return JsonResponse({'ok': False, 'error': 'Missing appointment fields.'}, status=400)

        subject = f'New Book Appointment Lead - {name}'
        lines = [
            'New appointment request received.',
            '',
            'Intent: Book Appointment',
            f'Name: {name}',
            f'Email: {email}',
            'Project Message:',
            message
        ]

    # Destination and sender are environment-driven from Django settings.
    recipient_email = getattr(settings, 'CONTACT_RECEIVER_EMAIL', '')
    from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', None)

    if not recipient_email:
        return JsonResponse({'ok': False, 'error': 'CONTACT_RECEIVER_EMAIL is not configured.'}, status=500)

    # Use Django mail backend (SMTP by default) for actual delivery.
    try:
        send_mail(
            subject=subject,
            message='\n'.join(lines),
            from_email=from_email,
            recipient_list=[recipient_email],
            fail_silently=False
        )
    except Exception:
        return JsonResponse({'ok': False, 'error': 'Email delivery failed.'}, status=500)

    return JsonResponse({'ok': True})
