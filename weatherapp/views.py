
from rest_framework.response import Response
import requests
from .serializers import weatherSerializer
from rest_framework.decorators import api_view
@api_view(['GET'])
def weatherView(request):
    city=request.GET.get("city")
    if not city:
        return Response({"error":"Enter a city"})
    api_key="6973f67ef7ce3f37aca5c6aeff241946"
    url=f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response=requests.get(url)
    data=response.json()
    if response.status_code!=200:
        print(data)
        return Response({"error": "City not found"}, status=400)
    
    result={
        "city":data["name"],
        "temperature":data["main"]["temp"],
        "weather": data["weather"][0]["description"]
    }
    serializer=weatherSerializer(result)
    return Response(serializer.data)

    