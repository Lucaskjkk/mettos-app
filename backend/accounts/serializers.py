from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    initials = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ("id", "username", "email", "first_name", "last_name", "name", "initials")

    def get_name(self, obj: User) -> str:
        full = f"{obj.first_name} {obj.last_name}".strip()
        return full or obj.username

    def get_initials(self, obj: User) -> str:
        if obj.first_name and obj.last_name:
            return f"{obj.first_name[0]}{obj.last_name[0]}".upper()
        if obj.first_name:
            return obj.first_name[:2].upper()
        return obj.username[:2].upper()


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        identifier = attrs.get("email", "").strip()
        password = attrs.get("password", "")

        user = None
        if "@" in identifier:
            try:
                found = User.objects.get(email__iexact=identifier)
                user = authenticate(username=found.username, password=password)
            except User.DoesNotExist:
                user = None
        else:
            user = authenticate(username=identifier, password=password)

        if user is None:
            raise serializers.ValidationError("Credenciais inválidas.")
        if not user.is_active:
            raise serializers.ValidationError("Conta desativada.")

        attrs["user"] = user
        return attrs
