
from django.urls import path
from .views import RegisterView, LoginView, AvocatView, LogoutView, AvocatDatesView, AdminView, FilterView, ReviewCreateView, RdvView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('avocat/<int:avocat_id>/', AvocatView.as_view()),
    path('logout', LogoutView.as_view()),
    path('avocatdates', AvocatDatesView.as_view()),
    path('admin', AdminView.as_view()),
    path('filter', FilterView.as_view()),
    path('review/<int:avocat_id>/', ReviewCreateView.as_view()),
    path('rdv/<int:avocat_id>/', RdvView.as_view()),

    path('rdv/prise_rdv/<int:avocat_id>/', RdvView.as_view())
]
