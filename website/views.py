from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import RPi.GPIO as GPIO



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
    Which_LED = 0
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(14, GPIO.OUT)
    GPIO.setup(15, GPIO.OUT)
    GPIO.setup(16, GPIO.OUT)
    GPIO.setup(23, GPIO.OUT)
    if Which_LED == 0:
        GPIO.output(14,GPIO.HIGH)
        Which_LED += 1
    elif Which_LED == 1:
        GPIO.output(15,GPIO.HIGH)
        Which_LED += 1
    elif Which_LED == 2:
        GPIO.output(18,GPIO.HIGH)
        Which_LED += 1
    elif Which_LED == 3:
        GPIO.output(23,GPIO.HIGH)
        Which_LED += 1
    return HttpResponse("200")