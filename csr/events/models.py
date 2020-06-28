from django.db import models

class Event(models.Model):
    event_id = models.IntegerField(unique=True)
    event_name = models.CharField(max_length=100)
    event_description = models.CharField(max_length=1000)
    organizer_id = models.IntegerField()
    nof_participants = models.IntegerField(max_length=6)
    # criteria = []
    start_date_reg = models.DateTimeField() 
    end_date_reg = models.DateTimeField()
    start_date_event = models.DateTimeField() 
    end_date_event = models.DateTimeField()
