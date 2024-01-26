import datetime
import jwt
import logging
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from requests import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Avocat
from .serializers import AvocatSerializer


class RegisterView(APIView):

    def post(self, request):
        serializer = AvocatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()


class LoginView(APIView):
    def post(self, request):
        try:
            username = request.data['username']
            password = request.data['password']
            avocat = Avocat.objects.get(username=username)

            if not avocat.check_password(password):
                raise AuthenticationFailed('Incorrect password')

            payload = {
                'id': avocat.avocat_id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2),
                'iat': datetime.datetime.utcnow(),
                'username': avocat.username
            }

            token = jwt.encode(payload, 'secret', algorithm='HS256')

            response = Response()
            response.set_cookie(key='jwt', value=token, httponly=True)
            response.data = {'jwt': token}
            return response

        except Avocat.DoesNotExist:
            raise AuthenticationFailed('User not found')

        except Exception as e:
            # Log the exception for further investigation
            print(e)
            raise AuthenticationFailed('An unexpected error occurred')


class AvocatView(APIView):
    def get(self, request):
        try:
            token = request.COOKIES.get('jwt')

            if not token:
                raise AuthenticationFailed('Unauthenticated')

            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            avocat_id = payload.get('id')  # Change 'avocat_id' to 'id'

            if not avocat_id:
                raise AuthenticationFailed('Invalid token')

            avocat = Avocat.objects.filter(avocat_id=avocat_id).first()

            if not avocat:
                raise AuthenticationFailed('Avocat not found')

            serializer = AvocatSerializer(avocat)
            return Response(serializer.data)

        except Exception as e:
            print(f"Exception: {str(e)}")
            raise


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response


logger = logging.getLogger(__name__)


class AvocatDatesView(APIView):
    def post(self, request):
        try:
            token = request.COOKIES.get('jwt')

            if not token:
                raise AuthenticationFailed('Unauthenticated')

            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            avocat_id = payload.get('id')

            if not avocat_id:
                raise AuthenticationFailed('Invalid token')

            avocat = get_object_or_404(Avocat, avocat_id=avocat_id)

            year = request.data.get('year')
            month = request.data.get('month')
            day = request.data.get('day')

            # Check if the date is already selected
            selected_dates_list = avocat.selected_dates.split(',')
            selected_date_str = f"{year}-{month}-{day}"

            if selected_date_str in selected_dates_list:
                return Response({'error': 'Date already selected'}, status=400)

            # Add the new date to the selected dates
            if avocat.selected_dates:
                avocat.selected_dates += f",{selected_date_str}"
            else:
                avocat.selected_dates = selected_date_str

            avocat.save()

            serializer = AvocatSerializer(avocat)
            return Response(serializer.data)

        except AuthenticationFailed as auth_failed:
            return Response({'error': str(auth_failed)}, status=401)
        except Exception as e:
            logger.exception(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=500)
