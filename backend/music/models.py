from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='musics/')

    def __str__(self):
        return self.title