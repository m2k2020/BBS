from rest_framework.viewsets import ModelViewSet
from blood.models import BloodStock
from api.serializers.blood import BloodStockSerializer
from api.permissions import IsHospital

class BloodStockViewSet(ModelViewSet):
    serializer_class = BloodStockSerializer
    permission_classes = [IsHospital]

    def get_queryset(self):
        return BloodStock.objects.filter(hospital__admin=self.request.user)
