from django.db import models

# Create your models here.


class Song(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='musics/')
    image = models.FileField(upload_to='imgs/', null=True)
    genre = models.CharField(max_length=50, null=True)
    artist = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.title


class Playlist(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class PlaylistSongRelation(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE, related_name="playlist_song_relation")
    song = models.ForeignKey(Song, on_delete=models.CASCADE, related_name="song_playlist_relation")
