from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
    path("quiz/", views.quiz),
    path("wrong/", views.wrong),
    path("right/", views.right),
]
