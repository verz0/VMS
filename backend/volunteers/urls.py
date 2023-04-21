from django.urls import path
from .views import StudentView, EventList, EventDetail, EventRegisterView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('volunteers/', StudentView.as_view()),
    path('volunteers/<int:pk>/', StudentView.as_view()),
    path('events/', EventList.as_view(), name='event-list'),
    path('events/<int:pk>/', EventDetail.as_view(), name='event-detail'),
   path('events/<int:event_id>/register/', EventRegisterView.as_view(), name='event-register'),
   
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)