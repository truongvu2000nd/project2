"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from music.views import (
    SongView,
    SongSearch,
    PlaylistView,
    PlaylistSongRelationView,
)
from music import views
from django.conf.urls.static import static
from django.conf import settings
from authentication.views import UserRegisterView,UserLoginView
# to handle login ( generate token)
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'songs', SongView, basename='song')
router.register(r'search', SongSearch, basename='search')
router.register(r'playlists', PlaylistView, basename='playlist')
router.register(r'playlist-song', PlaylistSongRelationView, basename='playlist-song')



urlpatterns = [
    path('api/register/', UserRegisterView.as_view(), name='register'),
    path('api/login/',UserLoginView.as_view(),name='login'),
    path('account/', include('account.urls')),
    path('songs/',views.SongCreateView.as_view()),
    path('song/<int:pk>',views.UpdateDeleteSongView.as_view()),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
