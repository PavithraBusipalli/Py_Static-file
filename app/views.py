from django.shortcuts import render

# Create your views here.
def task(request):
    return render(request,'task.html')

def pavii(request):
    return render(request,'pavii.html')

def empsearch(request):
    return render(request,'empsearch.html')

def calc(request):
    return render(request,'calculator.html')