from django.http.response import Http404
import jwt
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Student, Event, Registration
from .serializers import StudentSerializer, EventSerializer, RegistrationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status, generics
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.parsers import FileUploadParser

class StudentView(APIView):
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist:
            raise Http404
    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)
    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed to Add Student", safe=False)
    def put(self, request, pk=None):
        try:
            student_to_update = self.get_student(pk)
        except Http404:
            return JsonResponse("Student Not Found", status=404, safe=False)

        serializer = StudentSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student updated Successfully", safe=False)
        return JsonResponse("Failed To Update Student", safe=False)

    def delete(self, request, pk):
        try:
            student_to_delete = self.get_student(pk)
        except Http404: 
            return JsonResponse("Student Not Found", status=404, safe=False)

        student_to_delete.delete()
        return JsonResponse("Student Deleted Successfully", safe=False)


class EventList(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetail(APIView):
    def get_event(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        event = self.get_event(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk):
        event = self.get_event(pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        event = self.get_event(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
class EventRegisterView(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    
    def create(self, request, *args, **kwargs):
        event_id = kwargs['event_id']
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response({'error': 'Event not found'}, status=404)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(event=event)

        return Response(serializer.data, status=201)

class EventImageUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, pk):
        event = Event.objects.get(pk=pk)
        file_serializer = EventSerializer(event, data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)