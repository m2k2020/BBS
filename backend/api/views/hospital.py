from rest_framework.viewsets import ModelViewSet
from hospitals.models import Hospital
from api.serializers.hospital import HospitalSerializer
from api.permissions import IsHospital

class HospitalViewSet(ModelViewSet):
    serializer_class = HospitalSerializer
    permission_classes = [IsHospital]

    def get_queryset(self):
        return Hospital.objects.filter(admin=self.request.user)

    def perform_create(self, serializer):
        serializer.save(admin=self.request.user)
