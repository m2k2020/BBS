from rest_framework.permissions import BasePermission

class IsHospital(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "HOSPITAL"

class IsDonor(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "USER"
