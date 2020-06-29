from rest_framework import serializers
from events.models import Event

#event serializer

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'