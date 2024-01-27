
from django.urls import path
from .views import RegisterView, LoginView, AvocatView, LogoutView, AvocatDatesView, AdminView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('avocat', AvocatView.as_view()),
    path('logout', LogoutView.as_view()),
    path('avocatdates', AvocatDatesView.as_view()),
    path('admin', AdminView.as_view())
]
