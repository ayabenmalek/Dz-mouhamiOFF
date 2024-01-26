from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class Avocat(AbstractUser):
    avocat_id = models.AutoField(primary_key=True)
    # Step 1
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)

    # Step 2
    nom = models.CharField(max_length=50)
    numero_tel = models.CharField(max_length=20)
    adressar = models.CharField(max_length=255)

    # Step 3
    cv = models.BinaryField(null=True, blank=True)
    experience = models.TextField()
    detail = models.TextField()
    setSelectedOptions = models.TextField()
    selected_dates = models.TextField(blank=True)
    confirm = models.BooleanField(null=True, blank=True)
    star = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.username
