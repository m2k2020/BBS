from rest_framework.viewsets import ModelViewSet
from requests.models import BloodRequest
from api.serializers.request import BloodRequestSerializer

class BloodRequestViewSet(ModelViewSet):
    serializer_class = BloodRequestSerializer

    def get_queryset(self):
        return BloodRequest.objects.filter(requester=self.request.user)

    def perform_create(self, serializer):
        serializer.save(requester=self.request.user)
