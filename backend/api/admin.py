from django.contrib import admin
from .models import Rating


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('id', 'value', 'created_at')
    list_filter = ('value', 'created_at')
