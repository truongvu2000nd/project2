from django.urls import path

from . import views

urlpatterns = [
    path('home/',views.homePage, name ='home'),
    path('login/',views.loginPage,name='login'),
    path('register/',views.registerPage,name='register'),

]