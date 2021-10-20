from django.shortcuts import render,HttpResponse

# Create your views here.
def contact (request):
    return HttpResponse("This is the contact app")
