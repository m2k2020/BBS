from rest_framework import serializers
from donors.models import DonorProfile

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonorProfile
        fields = "__all__"
        read_only_fields = ("user",)
