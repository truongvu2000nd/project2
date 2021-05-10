from django.contrib.auth.models import AbstractUser
from django.db import models
# Create your models here.

#using email to login, no need username
class User(AbstractUser):
    username = None
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100,unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    