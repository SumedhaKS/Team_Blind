# views.py
from django.shortcuts import render

def home(request):
    return render(request, 'Home.html')

def login(request):
    return render(request, 'login.html')

def profile(request):
    return render(request, 'profile.html')

def register(request):
    return render(request, 'register.html')

def teachers(request):
    return render(request, 'teachers.html')
