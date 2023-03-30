from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# import RPi.GPIO as GPIO

# Setting up the pins for the GPIO
# GPIO.setmode(GPIO.BCM)
# GPIO.setup(14, GPIO.OUT)
# GPIO.setup(15, GPIO.OUT)
# GPIO.setup(16, GPIO.OUT)
# GPIO.setup(23, GPIO.OUT)


# Create your views here.

def index(request):
    return render(request, "index/index.html")

# # Tells it to ignore CSRF verification. Bad practice but its not going to be used in anything serious.
@csrf_exempt
def correct_answer(request):
#     # Reads Which_LED.txt to find which GPIO pin it should be interacting with
#     a = open("Which_LED.txt", 'r')
#     Which_LED = a.read()
#     # Based on value of Which_LED picks a GPIO pin to output the voltage (replace with a switch case)
#     if Which_LED == 0:
#         GPIO.output(14,GPIO.HIGH)
#     elif Which_LED == 1:
#         GPIO.output(15,GPIO.HIGH)
#     elif Which_LED == 2:
#         GPIO.output(18,GPIO.HIGH)
#     elif Which_LED == 3:
#         GPIO.output(23,GPIO.HIGH)
#     # Updates the value in Which_LED.txt
#     New_LED = int(Which_LED) + 1
#     with open("Which_LED.txt", 'w') as b:
#         b.write(str(New_LED))
#         b.close()
    return HttpResponse("200")

@csrf_exempt
def incorrect_answer(request):
#     a = open("Which_LED.txt", 'r')
#     Which_LED = a.read()
#     New_LED = int(Which_LED) + 1
#     with open("Which_LED.txt", 'w') as b:
#         b.write(str(New_LED))
#         b.close()
    return HttpResponse("200")

@csrf_exempt
def reset_LED(request):
    print("reset")
#     with open("Which_LED.txt", 'w') as b:
#         b.write('0')
#         b.close()
    return HttpResponse("200")