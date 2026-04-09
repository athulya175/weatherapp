from rest_framework import serializers
class weatherSerializer(serializers.Serializer):
    city=serializers.CharField()
    temperature=serializers.FloatField()
    weather=serializers.CharField()