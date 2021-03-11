from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SongSerializer
from .models import Song

# Create your views here.
class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()