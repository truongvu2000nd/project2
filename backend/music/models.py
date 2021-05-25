from django.db import models
from authentication.models import User
# Create your models here.

### add user to song
class Song(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='musics/')
    image = models.FileField(upload_to='imgs/', null=True)
    genre = models.CharField(max_length=50, default='')
    artist = models.CharField(max_length=200, default='n/a')
    def __str__(self):
        return self.title


### add user to playlist
class Playlist(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="playlists", default=1)

    def __str__(self):
        return self.name


class PlaylistSongRelation(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE, related_name="playlist_song_relation")
    song = models.ForeignKey(Song, on_delete=models.CASCADE, related_name="song_playlist_relation")
