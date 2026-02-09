from rest_framework import serializers
from blood.models import BloodStock

class BloodStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodStock
        fields = "__all__"
