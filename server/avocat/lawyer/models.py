from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class Admin(AbstractUser):
    admin_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=100)

    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='admin_groups',
        blank=True,
        help_text='The groups this admin belongs to. A admin will get all permissions granted to each of their groups.',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='admin_user_permissions',
        blank=True,
        help_text='Specific permissions for this admin.',
        verbose_name='user permissions',
    )

    def __str__(self):
        return self.username


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
    setSelectedOptions = models.JSONField()
    selected_dates = models.TextField(blank=True)
    confirm = models.BooleanField(null=True, blank=True)
    star = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.username


class Review(models.Model):
    id_review = models.AutoField(primary_key=True)
    editeur_nom = models.CharField(max_length=50)
    review_txt = models.TextField()
    stars = models.IntegerField()
    date_review = models.DateField()
    heur = models.TimeField()
    id_avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)

    def __str__(self):
        return f"Review #{self.id_review} - {self.editeur_nom}"
