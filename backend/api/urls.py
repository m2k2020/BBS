from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from api.views.auth import RegisterAPIView, LogoutAPIView,LoginAPIView

urlpatterns = [
    path("auth/login/", LoginAPIView.as_view()),
    path("auth/register/", RegisterAPIView.as_view()),
    path("auth/logout/", LogoutAPIView.as_view()),
]
from rest_framework.routers import DefaultRouter
from api.views.donor import DonorViewSet
from api.views.hospital import HospitalViewSet
from api.views.blood import BloodStockViewSet
from api.views.request import BloodRequestViewSet

router = DefaultRouter()
router.register("donors", DonorViewSet, basename="donor")
router.register("hospitals", HospitalViewSet, basename="hospital")
router.register("blood", BloodStockViewSet, basename="blood")
router.register("requests", BloodRequestViewSet, basename="request")

urlpatterns += router.urls
