from django.db import models

class Event(models.Model):
    __tablename__ = 'event'
    # event_id = models.IntegerField()
    # event_name = models.CharField(max_length=100)
    # event_description = models.CharField(max_length=1000)
    organizer_id = models.IntegerField()
    # nof_participants =
    # criteria = 
    start_date_reg = models.DateTimeField() 
    end_date_reg = models.DateTimeField()
    start_date_event = models.DateTimeField() 
    end_date_event = models.DateTimeField()


class User(models.Model):
    __abstract__ = True

class Employee(User):
    __tablename__ = 'employee'

