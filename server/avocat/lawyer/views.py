import datetime
from traceback import format_exc
import jwt
import logging
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse, Http404
from requests import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Avocat, Admin, Rdv, Utilisateur
from .serializers import AvocatSerializer, ReviewSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404


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
    def get(self, request, avocat_id):
        try:
            avocat = Avocat.objects.filter(avocat_id=avocat_id).first()
            if not avocat_id:
                raise AuthenticationFailed('Avocat ID not provided')

            avocat = Avocat.objects.filter(avocat_id=avocat_id).first()

            if not avocat:
                raise Http404('Avocat not found')

            serializer = AvocatSerializer(avocat)
            filtered_data = [
                {'SelectedOptions': avocat.setSelectedOptions, 'address': avocat.adressar, 'nom': avocat.nom,
                 'num_tel': avocat.numero_tel, 'description': avocat.detail, 'experience': avocat.experience}]
            return Response(filtered_data)

        except AuthenticationFailed as e:
            return Response({'error': str(e)}, status=401)

        except Http404 as e:
            return Response({'error': str(e)}, status=401)

        except Exception as e:
            print(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=401)


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

            print(f"Selected Dates list: {selected_dates_list}")

            logger.debug(f"Selected Dates list: {selected_dates_list}")
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


class FilterView(APIView):
    def post(self, request):
        try:
            # Get filter parameters from request
            wilaya = request.data.get('wilaya')
            option = request.data.get('option')
            name = request.data.get('name')

            # Filter avocats based on the provided criteria
            avocats = Avocat.objects.all()

            if wilaya and option:
                avocats = avocats.filter(
                    Q(adressar__icontains=wilaya) & Q(setSelectedOptions__contains=[option])
                )
            elif wilaya:
                avocats = avocats.filter(adressar__icontains=wilaya)
            elif option:
                avocats = avocats.filter(setSelectedOptions__contains=[option])

            if name:
                avocats = avocats.filter(nom__icontains=name)

            serializer = AvocatSerializer(avocats, many=True)
            filtered_data = [
                {'avocat_id': avocat.avocat_id, 'setSelectedOptions': avocat.setSelectedOptions,
                 'adressar': avocat.adressar, 'nom': avocat.nom} for
                avocat in avocats]

            return Response({'filtered_data': filtered_data}, status=status.HTTP_200_OK)

        except Exception as e:
            error_message = f"Exception: {str(e)}\n{format_exc()}"
            print(error_message)
            return Response({'error': 'Internal Server Error'}, status=500)


class ReviewCreateView(APIView):
    def post(self, request, avocat_id):
        try:
            avocat = Avocat.objects.get(avocat_id=avocat_id)
            data = {
                'editeur_nom': request.data.get('editeur_nom'),
                'review_txt': request.data.get('review_txt'),
                'stars': request.data.get('stars'),
                'date_review': datetime.datetime.now().date(),
                'heur': datetime.datetime.now().time(),
                'id_avocat': avocat.avocat_id,
            }

            serializer = ReviewSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'message': 'Review added successfully'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class FirstGetView(APIView):
    def get(self, request, avocat_id):
        try:
            avocat = Avocat.objects.get(avocat_id=avocat_id)
            selected_days = avocat.selected_dates.split(',')
            current_date = datetime.datetime.now().date()
            result = set()

            for day in selected_days:
                selected_date = datetime.datetime.strptime(day, '%Y-%m-%d').date()

                if selected_date >= current_date:
                    availability = AvailabilityChecker.check_availability(avocat_id, selected_date)
                    result.add(selected_date.strftime('%Y-%m-%d'))

            return Response(result, status=status.HTTP_200_OK)

        except Avocat.DoesNotExist:
            return Response({'error': 'Avocat not found'}, status=status.HTTP_404_NOT_FOUND)
        except Rdv.DoesNotExist:
            return Response({'error': 'Rdv not found'}, status=status.HTTP_404_NOT_FOUND)
        except ValidationError as validation_error:
            return Response({'error': str(validation_error)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.exception(f"Unhandled exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SecondGetAndPostView(APIView):
    def get(self, request, avocat_id, selected_date):
        try:
            all_hours = [8, 9, 10, 11, 13, 14, 15, 16]
            booked_hours = Rdv.objects.filter(
                id_avocat=avocat_id,
                date_rdv=selected_date,
                heure__in=all_hours
            ).values_list('heure', flat=True)

            available_hours = [hour for hour in all_hours if hour not in booked_hours]

            logger.debug(f"available_hours: {available_hours}")

            return Response({'available_hours': available_hours})

        except Exception as e:
            logger.exception("Exception in get_available_hours")
            raise

    def post(self, request, avocat_id):
        try:
            selected_date_data = request.data

            selected_date = datetime.date(
                year=int(selected_date_data.get('year')),
                month=int(selected_date_data.get('month')),
                day=int(selected_date_data.get('day')),
                hour=int(selected_date_data.get('heure').split('.')[0]),
                minute=int(selected_date_data.get('heure').split('.')[1])
            )

            user_info = {
                'tel': selected_date_data.get('numero'),
                'description_cas': selected_date_data.get('description'),
                'nom_prenom': f"{selected_date_data.get('nom')} {selected_date_data.get('prenom')}",
            }

            if not AvailabilityChecker.check_availability(avocat_id, selected_date):
                return Response({'error': 'Selected hour is not available'}, status=status.HTTP_400_BAD_REQUEST)

            utilisateur = Utilisateur.objects.create(**user_info)

            Rdv.objects.create(
                id_avocat=avocat_id,
                id_user=utilisateur.id_user,
                date_rdv=selected_date.date(),
                heure=selected_date.hour,
                taken=True
            )

            return Response({'message': 'Appointment booked successfully'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.exception(f"Exception: {str(e)}")
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AvailabilityChecker:
    @staticmethod
    def check_availability(avocat_id, selected_date):
        # Get all hours that need to be checked for availability
        hours_to_check = [8, 9, 10, 11, 13, 14, 15, 16]

        # Query the Rdv table for the specified avocat and date
        booked_hours = Rdv.objects.filter(
            id_avocat=avocat_id,
            date_rdv=selected_date,
            heure__in=[datetime.time(hour) for hour in hours_to_check]
        ).values_list('heure', flat=True)

        # Check if all specified hours are booked
        all_hours_booked = all(hour in booked_hours for hour in hours_to_check)

        # Return True if available, False otherwise
        return not all_hours_booked
