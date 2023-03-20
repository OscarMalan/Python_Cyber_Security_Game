from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Runs a function from the views file based on which URL you are at (ie "localhost:8000/quiz")
    path("", views.home),
    path("information/", views.information, name="information"),
    path("question1/", views.question1, name="question1"),
    path("question2/", views.question2, name="question2"),
    path("question3/", views.question3, name="question3"),
    path("question4/", views.question4, name="question4"),
    path("question5/", views.question5, name="question5"),
    path("correct_answer/", views.correct_answer, name="correct_answer"),
]
