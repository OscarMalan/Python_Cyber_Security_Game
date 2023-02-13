from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home/index.html')

def quiz(request):
    return render(request, 'quiz/quiz.html')

def wrong(request):
    print("wrong")
    return render(request, 'wrong/wrong.html')

def right(request):
    print("right")
    return render(request, 'right/right.html')