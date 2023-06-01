from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import RPi.GPIO as GPIO

# # Setting up the pins for the GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(2, GPIO.OUT)
GPIO.setup(3, GPIO.OUT)
GPIO.setup(4, GPIO.OUT)
GPIO.setup(14, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(17, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(27, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)


# Create your views here.

def index(request):
    return render(request, "index/index.html")

# Tells it to ignore CSRF verification. Bad practice but its not going to be used in anything serious.
@csrf_exempt
def correct_answer(request):
    # Reads Which_LED.txt to find which GPIO pin it should be interacting with
    a = open("Which_LED.txt", 'r')
    Which_LED = a.read()
    # Based on value of Which_LED picks a GPIO pin to output the voltage (replace with a switch case)
    if Which_LED == "0":
        GPIO.output(2,GPIO.HIGH)
    elif Which_LED == "1":
        GPIO.output(3,GPIO.HIGH)
    elif Which_LED == "2":
        GPIO.output(4,GPIO.HIGH)
    elif Which_LED == "3":
        GPIO.output(14,GPIO.HIGH)
    elif Which_LED == "4":
        GPIO.output(15,GPIO.HIGH)
    elif Which_LED == "5":
        GPIO.output(17,GPIO.HIGH)
    elif Which_LED == "6":
        GPIO.output(18,GPIO.HIGH)
    elif Which_LED == "7":
        GPIO.output(27,GPIO.HIGH)
    elif Which_LED == "8":
        GPIO.output(22,GPIO.HIGH)
    elif Which_LED == "9":
        GPIO.output(23,GPIO.HIGH)
    else:
        print("Error fuck")
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
    # Turns all LEDs off
    GPIO.output(2,GPIO.LOW)
    GPIO.output(3,GPIO.LOW)
    GPIO.output(4,GPIO.LOW)
    GPIO.output(14,GPIO.LOW)
    GPIO.output(15,GPIO.LOW)
    GPIO.output(17,GPIO.LOW)
    GPIO.output(18,GPIO.LOW)
    GPIO.output(27,GPIO.LOW)
    GPIO.output(22,GPIO.LOW)
    GPIO.output(23,GPIO.LOW)
    
    with open("Which_LED.txt", 'w') as b:
        b.write('0')
        b.close()
    return HttpResponse("200")