from rest_framework import serializers
from .models import User
from music.models import PlaylistSongRelation

class UserSersializer(serializers.ModelSerializer):     
    class Meta:
        model= User 
        fields = ('email','password')
        extra_kwargs = {'password':{'write_only':True}}

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)
    