from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User
from .serializers import UserSersializer,UserLoginSerializer

# Create your views here.

class UserRegisterView(APIView):
    def post(self,request):
        serializer = UserSersializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            user = serializer.save()

            return JsonResponse({
                'message': 'Register successful!'
            },status=status.HTTP_201_CREATED)
        
        else:
            return JsonResponse({
                'error_message':'this email has already exist!',
                'error_code': 400,
            },status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self,request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                request,
                email=serializer.validated_data['email'],
                password = serializer.validated_data['password']
            )

            if user:
                refresh = TokenObtainPairSerializer.get_token(user)
                data = {
                    'refresh_token': str(refresh),
                    'access_token': str(refresh.access_token)
                }

                return Response(data, status=status.HTTP_200_OK)

            return Response({
                'error_message': 'Email or password is incorrect!',
                'error_code': 400,
            }, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({
            'error_message': serializer.errors,
            'error_code': 400
        }, status= status.HTTP_400_BAD_REQUEST)