from django.contrib import admin
from .models import Hospital

@admin.register(Hospital)
class HospitalAdmin(admin.ModelAdmin):
    list_display = ("name", "city", "is_approved")
    list_filter = ("is_approved", "city")
    search_fields = ("name", "email")
