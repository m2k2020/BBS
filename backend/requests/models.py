from django.db import models
from accounts.models import User
from hospitals.models import Hospital
from donors.models import DonorProfile
from core.models import TimeStampedModel

class BloodRequest(TimeStampedModel):
    STATUS_CHOICES = (
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("REJECTED", "Rejected"),
        ("COMPLETED", "Completed"),
    )

    BLOOD_GROUPS = (
        ("A+", "A+"), ("A-", "A-"),
        ("B+", "B+"), ("B-", "B-"),
        ("AB+", "AB+"), ("AB-", "AB-"),
        ("O+", "O+"), ("O-", "O-"),
    )

    requester = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="blood_requests"
    )

    hospital = models.ForeignKey(
        Hospital,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS)
    quantity = models.PositiveIntegerField()
    emergency = models.BooleanField(default=False)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    def __str__(self):
        return f"{self.requester.username} - {self.blood_group}"

class Donation(TimeStampedModel):
    donor = models.ForeignKey(
        DonorProfile,
        on_delete=models.CASCADE
    )

    request = models.ForeignKey(
        BloodRequest,
        on_delete=models.CASCADE,
        related_name="donations"
    )

    donated_on = models.DateField(auto_now_add=True)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.donor.user.username} → {self.request.blood_group}"
