from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Runs a function from the views file based on which URL you are at (ie "localhost:8000/quiz")
    path("", views.index),
    path("correct_answer/", views.correct_answer, name="correct_answer"),
    path("incorrect_answer/", views.incorrect_answer, name="incorrect_answer"),
    path("reset_led/", views.reset_LED, name="reset_led"),
]
