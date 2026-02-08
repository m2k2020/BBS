from django.db import models
from hospitals.models import Hospital
from core.models import TimeStampedModel

class BloodStock(TimeStampedModel):
    BLOOD_GROUPS = (
        ("A+", "A+"), ("A-", "A-"),
        ("B+", "B+"), ("B-", "B-"),
        ("AB+", "AB+"), ("AB-", "AB-"),
        ("O+", "O+"), ("O-", "O-"),
    )

    hospital = models.ForeignKey(
        Hospital,
        on_delete=models.CASCADE,
        related_name="blood_stock"
    )
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS)
    quantity = models.PositiveIntegerField(help_text="Units in bags")

    class Meta:
        unique_together = ("hospital", "blood_group")

    def __str__(self):
        return f"{self.hospital.name} - {self.blood_group}"
