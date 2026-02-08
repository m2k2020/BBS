from django.db import models
from accounts.models import User
from core.models import TimeStampedModel

class DonorProfile(TimeStampedModel):
    BLOOD_GROUPS = (
        ("A+", "A+"), ("A-", "A-"),
        ("B+", "B+"), ("B-", "B-"),
        ("AB+", "AB+"), ("AB-", "AB-"),
        ("O+", "O+"), ("O-", "O-"),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS)
    last_donation_date = models.DateField(null=True, blank=True)
    available = models.BooleanField(default=True)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username} - {self.blood_group}"
