from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers.auth import RegisterSerializer

class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "User registered successfully"}, status=201)

class LogoutAPIView(APIView):
    def post(self, request):
        token = RefreshToken(request.data["refresh"])
        token.blacklist()
        return Response({"message": "Logged out"})
