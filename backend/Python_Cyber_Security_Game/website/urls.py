from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Runs a function from the views file based on which URL you are at (ie "localhost:8000/quiz")
    path("", views.home),
    path("quiz/", views.quiz),
    path("wrong/", views.wrong),
    path("right/", views.right),
]
