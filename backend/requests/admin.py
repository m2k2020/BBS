from django.contrib import admin
from .models import BloodRequest, Donation

@admin.register(BloodRequest)
class BloodRequestAdmin(admin.ModelAdmin):
    list_display = ("requester", "blood_group", "status", "emergency")
    list_filter = ("status", "emergency")
    search_fields = ("requester__username",)

@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ("donor", "donated_on", "confirmed")
    list_filter = ("confirmed",)
