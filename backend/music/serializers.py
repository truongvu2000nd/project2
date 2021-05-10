from rest_framework import serializers
from .models import (
    Song,
    Playlist,
    PlaylistSongRelation,
)


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'


class PlaylistSongRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaylistSongRelation
        fields = '__all__'