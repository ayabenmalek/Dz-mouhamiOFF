import os
from django import setup
from django.contrib.auth.hashers import make_password
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "avocat.settings")
setup()
hashed_password = make_password('1234')
print(hashed_password)
