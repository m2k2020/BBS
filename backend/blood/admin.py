from django.contrib import admin
from .models import BloodStock

@admin.register(BloodStock)
class BloodStockAdmin(admin.ModelAdmin):
    list_display = ("hospital", "blood_group", "quantity")
    list_filter = ("blood_group", "hospital")
