from django.shortcuts import render
#from RPi.GPIO import GPIO

# Create your views here.
def home(request):
    return render(request, "home/index.html")

def information(request):
    return render(request, "information/information.html")

def quiz(request):
    return render(request, "quiz/quiz.html")

def Correct_Answer():
    print("Right")
    f = open("Score.txt", 'r')
    Score = f.read()
    Score = int(Score)
    Score += 1
    Score = str(Score)
    f = open("Score.txt", "w")
    f.write(Score)
    # Turn an LED on