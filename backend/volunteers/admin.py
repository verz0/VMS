from django.contrib import admin
from .models import Student, Event, Registration

models_list = [Student, Event, Registration]
admin.site.register(models_list)