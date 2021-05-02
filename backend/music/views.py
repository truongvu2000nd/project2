from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from .serializers import (
    SongSerializer,
    PlaylistSerializer,
)
from .models import (
    Song,
    Playlist,
    PlaylistSongRelation,
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

    @action(methods=["get"], detail=True)
    def get_relation_song(self, request, pk=None):
        print(pk)
        queryset = Song.objects.filter(
            song_relation__playlist=pk
        )

        serializer = SongSerializer(queryset, many=True)
        return Response(serializer.data)