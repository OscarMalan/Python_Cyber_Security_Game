from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Handles which page you go to based on the URL
    path("", views.home),
    path("quiz/", views.quiz),
    path("wrong/", views.wrong),
    path("right/", views.right),
]
