from django.urls import path
from . import views

urlpatterns =[
    path('index.html', views.indexPage, name='index'),  # Add this line
    path('index', views.indexPage, name='index'),
    
    
    path("contact.html/", views.contactPage, name="contact") ,
    path('contact', views.contactPage, name='contact'),
         
         
    path("trainer.html/", views.trainerPage, name="trainer"),
    path('trainer/', views.trainerPage, name="trainer"),
    
    path('why.html/', views.whyPage, name='why'),
    path("why/", views.whyPage, name="why" ),
    
]
    
    
 