from django.contrib import admin
from .models import DonorProfile

@admin.register(DonorProfile)
class DonorProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "blood_group", "available", "city")
    list_filter = ("blood_group", "available")
    search_fields = ("user__username",)
