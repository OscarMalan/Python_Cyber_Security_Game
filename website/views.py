from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import RPi.GPIO as GPIO

# Setting up the pins for the GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(14, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)


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
    # Reads Which_LED.txt to find which GPIO pin it should be interacting with
    a = open("Which_LED.txt", 'r')
    Which_LED = a.read()
    # Based on value of Which_LED picks a GPIO pin to output the voltage (replace with a switch case)
    if Which_LED == 0:
        GPIO.output(14,GPIO.HIGH)
    elif Which_LED == 1:
        GPIO.output(15,GPIO.HIGH)
    elif Which_LED == 2:
        GPIO.output(18,GPIO.HIGH)
    elif Which_LED == 3:
        GPIO.output(23,GPIO.HIGH)
    # Updates the value in Which_LED.txt
    New_LED = int(Which_LED) + 1
    with open("Which_LED.txt", 'w') as b:
        b.write(str(New_LED))
        b.close()
    return HttpResponse("200")

@csrf_exempt
def incorrect_answer(request):
    a = open("Which_LED.txt", 'r')
    Which_LED = a.read()
    New_LED = int(Which_LED) + 1
    with open("Which_LED.txt", 'w') as b:
        b.write(str(New_LED))
        b.close()
    return HttpResponse("200")

@csrf_exempt
def reset_LED(request):
    with open("Which_LED.txt", 'w') as b:
        b.write('0')
        b.close()
    return HttpResponse("200")