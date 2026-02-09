from rest_framework.viewsets import ModelViewSet
from donors.models import DonorProfile
from api.serializers.donor import DonorSerializer
from api.permissions import IsDonor

class DonorViewSet(ModelViewSet):
    serializer_class = DonorSerializer
    permission_classes = [IsDonor]

    def get_queryset(self):
        return DonorProfile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
