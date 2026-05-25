from django.urls import path
from .views import health, contact, ratings, csrf

urlpatterns = [
    path('health/', health, name='health'),
    path('csrf/', csrf, name='csrf'),
    path('contact/', contact, name='contact'),
    path('ratings/', ratings, name='ratings')
]
