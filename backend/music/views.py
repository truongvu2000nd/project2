from django.shortcuts import render
from rest_framework import viewsets
from .serializers import (
    SongSerializer,
    PlaylistSerializer,
)
from .models import (
    Song,
    Playlist,
)
from rest_framework.response import Response

# Create your views here.


class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()


class SongSearch(viewsets.ViewSet):
    serializer_class = SongSerializer

    def list(self, request):
        search = request.GET.get('search')
        if (search == ''):
            return None
        else:
            #queryset = Song.objects.all()
            queryset = Song.objects.filter(title__contains=search)
            serializer = SongSerializer(queryset, many=True)
            # return HttpResponse(search)
            return Response(serializer.data)


class PlaylistView(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()
