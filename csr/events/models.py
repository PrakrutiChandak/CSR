from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    event_id = models.IntegerField(unique=True)
    event_name = models.CharField(max_length=100)
    event_description = models.CharField(max_length=1000)
    organizer_id = models.ForeignKey(User, related_name="events",
    on_delete=models.PROTECT, null=True)
    nof_participants = models.IntegerField()
    # criteria = []
    start_date_reg = models.DateTimeField() 
    end_date_reg = models.DateTimeField()
    start_date_event = models.DateTimeField() 
    end_date_event = models.DateTimeField()
