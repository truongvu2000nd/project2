from django.shortcuts import render,get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets,status
from rest_framework.decorators import action
from .serializers import (
    SongSerializer,
    PlaylistSerializer,
)
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .models import (
    Song,
    Playlist,
    PlaylistSongRelation,
)
from rest_framework.response import Response

# Create your views here.

# file type
AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']
IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']


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

class SongCreateView(ListCreateAPIView):
    model = Song
    serializer_class = SongSerializer

    def get_queryset(self):
        return Song.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = SongSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return JsonResponse({
                'message':'Create a new Song successfull!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message':'Create a new Song unsuccessful!'
        }, status = status.HTTP_400_BAD_REQUEST)

class UpdateDeleteSongView(RetrieveUpdateDestroyAPIView):
    model = Song
    serializer_class = SongSerializer

    def put(self, request, *args,**kwargs):
        song = get_object_or_404(Song, id=kwargs.get('pk'))
        serializer = SongSerializer(post, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return JsonResponse({
                'message':'Update Song successful!'
            },status=status.HTTP_200_OK)
        
        return JsonResponse({
            'message':'Update Song unsuccessful!'
        }, status= status.HTTP_400_BAD_REQUEST)

    def delete(self,request,*args, **kwargs):
        song = get_object_or_404(Song,id = kwargs.get('pk'))
        song.delete()

        return JsonResponse({
            'message':'Delete song successful!'
        },status= status.HTTP_200_OK)