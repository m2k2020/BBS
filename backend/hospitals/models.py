from django.db import models
from accounts.models import User
from core.models import TimeStampedModel

class Hospital(TimeStampedModel):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    city = models.CharField(max_length=100)

    admin = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="hospital"
    )

    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name
