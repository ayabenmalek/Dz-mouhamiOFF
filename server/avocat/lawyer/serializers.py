from rest_framework import serializers
from .models import Avocat

from rest_framework import serializers
from .models import Avocat, Admin


class AvocatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avocat
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        try:
            password = validated_data.pop('password', None)
            instance = self.Meta.model(**validated_data)
            if password is not None:
                instance.set_password(password)
                instance.save()
            return instance
        except serializers.ValidationError as e:
            raise serializers.ValidationError(e.detail)


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'
