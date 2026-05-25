from celery import shared_task


@shared_task
def ping_task() -> str:
    return 'pong'