import datetime
import jwt
import json
import logging
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from requests import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Avocat, Admin
from .serializers import AvocatSerializer


class RegisterView(APIView):
    def post(self, request):
        try:
            print(request.data)  # Print the received data
            serializer = AvocatSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginView(APIView):
    def post(self, request):
        try:
            username = request.data['username']
            password = request.data['password']
            is_admin = False
            user = None

            try:
                # Check if the user is an admin
                admin = Admin.objects.get(username=username)
                is_admin = True
                user = admin  # Use admin as the common user variable
            except Admin.DoesNotExist:
                # If the user is not an admin, try finding an avocat
                try:
                    user = Avocat.objects.get(username=username)
                except Avocat.DoesNotExist:
                    raise AuthenticationFailed('User not found')
            if not user.check_password(password):
                raise AuthenticationFailed('Incorrect password')

            payload = {
                'id': user.admin_id if is_admin else user.avocat_id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2),
                'iat': datetime.datetime.utcnow(),
                'username': user.username,
                'is_admin': is_admin,
            }

            token = jwt.encode(payload, 'secret', algorithm='HS256')

            response = Response()
            response.set_cookie(key='jwt', value=token, httponly=True)
            response.data = {'jwt': token, 'is_admin': is_admin, 'username': user.username}
            return response

        except AuthenticationFailed as e:
            return Response({'detail': str(e)}, status=401)

        except Exception as e:
            # Log the exception for further investigation
            print(e)
            return Response({'detail': 'An unexpected error occurred'}, status=500)


class AvocatView(APIView):
    def get(self, request):
        try:
            # Get avocat_id from request parameters
            avocat_id = request.query_params.get('avocat_id')

            if not avocat_id:
                raise AuthenticationFailed('Avocat ID not provided')

            avocat = Avocat.objects.filter(avocat_id=avocat_id).first()

            if not avocat:
                raise AuthenticationFailed('Avocat not found')

            serializer = AvocatSerializer(avocat)
            return Response(serializer.data)

        except Exception as e:
            print(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=500)


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
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    @authentication_classes([SessionAuthentication])
    def get(self, request):
        try:
            token = request.COOKIES.get('jwt')

            if not token:
                raise AuthenticationFailed('Unauthenticated')

            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            avocat_id = payload.get('id')

            if not avocat_id:
                raise AuthenticationFailed('Invalid token')

            avocat = get_object_or_404(Avocat, avocat_id=avocat_id)

            # Retrieve and return the selected dates
            selected_dates_list = avocat.selected_dates.split(',') if avocat.selected_dates else []
            return Response({'selected_dates': selected_dates_list})

        except AuthenticationFailed as auth_failed:
            return Response({'error': str(auth_failed)}, status=401)
        except Exception as e:
            logger.exception(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=500)

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


class AdminView(APIView):
    def get(self, request):
        try:
            avocats = Avocat.objects.values('avocat_id', 'nom')
            avocats_list = list(avocats)
            return JsonResponse(avocats_list, safe=False)
        except ObjectDoesNotExist as e:
            logger.exception("Error in AdminView GET: %s", str(e))
            return JsonResponse({'success': False, 'error': 'No avocats found'}, status=404)
        except Exception as e:
            logger.exception("Error in AdminView GET: %s", str(e))
            return JsonResponse({'success': False, 'error': 'Internal Server Error'}, status=500)

    def post(self, request):
        try:
            avocat_id = request.data.get('avocat_id')

            if avocat_id is not None:
                avocat = Avocat.objects.get(avocat_id=avocat_id)
                avocat.delete()
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'error': 'Avocat ID not provided'}, status=400)
        except Avocat.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Avocat not found'}, status=404)
        except Exception as e:
            logger.exception("Error in AdminView POST: %s", str(e))
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

