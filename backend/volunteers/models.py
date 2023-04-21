import datetime
from django.db import models




class Event(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField(default=datetime.time(0, 0))
    venue = models.CharField(max_length=100, default='Some Venue')
    description = models.TextField()
    image = models.ImageField(upload_to='images/')

    
    
class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    PhoneNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    City = models.CharField(max_length=100)


class Registration(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    city = models.CharField(max_length=255)
