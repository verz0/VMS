from rest_framework import serializers
from .models import Student, Event, Registration
from rest_framework import serializers
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('studentId',
                  'FirstName',
                  'LastName',
                  'PhoneNo',
                  'Email',
                  'City')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        image = serializers.ImageField(max_length=None, use_url=True, required=False)

        fields = ['id', 'name', 'date', 'time', 'venue', 'description', 'image']


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['first_name', 'last_name', 'email', 'city']

    def create(self, validated_data):
        event_id = self.context['view'].kwargs['event_id']
        event = Event.objects.get(id=event_id)
        registration = Registration(
            event=event,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            city=validated_data['city']
        )
        registration.save()
        return registration
