from django.shortcuts import render, HttpResponse

def welcomePage(request):
    return render(request, 'welcome.html')
def indexPage(request):
    return render(request, 'index.html')

def contactPage(request):
    return render(request, 'contact.html')

def trainerPage(request):
    return render(request, 'trainer.html')

def whyPage(request):
    return render(request, 'why.html')

def signinPage(request):
    return render(request, 'sign_in.html')



