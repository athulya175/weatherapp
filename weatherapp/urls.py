from django.urls import path
from .views import weatherView
from django.http import JsonResponse

# Home route
def home(request):
    return JsonResponse({"message": "Weather API is running"})

urlpatterns = [
    path('', home),
    path('home/weather/', weatherView),
]