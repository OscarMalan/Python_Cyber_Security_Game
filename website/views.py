from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "home/index.html")

def information(request):
    return render(request, "information/information.html")

def quiz(request):
    return render(request, "quiz/quiz.html")

def wrong(request):
    # Place code for the GPIO headers here
    print("wrong")
    return render(request, "wrong/wrong.html")

def right(request):
    # Place code for the GPIO headers here
    print("right")
    return render(request, "right/right.html")