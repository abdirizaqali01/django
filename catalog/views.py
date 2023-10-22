from django.shortcuts import render, redirect

def landing_page(request):
    return render(request, 'landingPage.html')

def loader(request):
    return render(request, 'loader.html')