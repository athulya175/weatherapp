from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def index(request):
    with open(os.path.join(BASE_DIR, "static", "index.html")) as f:
        return HttpResponse(f.read())

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/weather/', __import__('weatherapp.views').views.weatherView),
    path('', index), 
]