from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
#from RPi.GPIO import GPIO

# Create your views here.

def home(request):
    return render(request, "home/index.html")

def information(request):
    return render(request, "information/information.html")

def question1(request):
    return render(request, "question1/question1.html")

def question2(request):
    return render(request, "question1/question2.html")

def question3(request):
    return render(request, "question1/question3.html")

def question4(request):
    return render(request, "question1/question4.html")

def question5(request):
    return render(request, "question1/question5.html")

# Tells it to ignore CSRF verification. Bad practice but its not going to be used in anything serious.
@csrf_exempt
def correct_answer(request):
    # Turn an LED on
    return HttpResponse("200")