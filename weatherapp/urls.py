from django.urls import path
from .views import weatherView
urlpatterns=[
    path("weather/",weatherView)
]