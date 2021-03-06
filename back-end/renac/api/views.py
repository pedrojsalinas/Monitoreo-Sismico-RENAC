import os
from django.shortcuts import render
from rest_framework import viewsets
from api.serializers import *
from api.models import *
from django.contrib.auth.models import User, Group
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import generics
from django.http import HttpResponse
from django.views import View
from django.conf import settings
import json

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.pk,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    for user in User.objects.all():
        Token.objects.get_or_create(user=user)

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class ProvinciaViewSet(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class CantonViewSet(viewsets.ModelViewSet):
    queryset = Canton.objects.all()
    serializer_class = CantonSerializer

class ParroquiaViewSet(viewsets.ModelViewSet):
    queryset = Parroquia.objects.all()
    serializer_class = ParroquiaSerializer

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer

class AcelerografoViewSet(viewsets.ModelViewSet):
    queryset = Acelerografo.objects.all()
    serializer_class = AcelerografoSerializer


class DataloggerViewSet(viewsets.ModelViewSet):
    queryset = Datalogger.objects.all()
    serializer_class = DataloggerSerializer

class EstacionViewSet(viewsets.ModelViewSet):
    queryset = Estacion.objects.all()
    serializer_class = EstacionSerializer

class AceleracionViewSet(viewsets.ModelViewSet):
    queryset = Aceleracion.objects.all()
    serializer_class = AceleracionSerializer

class AceleracionesView(generics.ListAPIView):
    serializer_class = AceleracionSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return Aceleracion.objects.filter(acelerografo__id=id)

class AceleracionesDatosView(View):
    def get(self,request):
        id = request.GET['id']
        print('id: {}'.format(id))
        aceleracion=Aceleracion.objects.get(pk=id)
        fichero=aceleracion.fichero
        print(aceleracion.fichero)
        f = open(settings.MEDIA_ROOT+'/'+fichero, encoding = "ISO-8859-1")
        count = len(f.readlines())
        f.close()
        datos=[]
        f = open(settings.MEDIA_ROOT+'/'+fichero, encoding = "ISO-8859-1")
        for i, line in enumerate(f):
            if i in range(10,count):
                for a in line.split():
                    datos.append((a.replace(",", ".")))
        f.close()
        return HttpResponse(json.dumps(datos), content_type="application/json")

    # def post(self, request):
    #     form = AgresorForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         form = AgresorForm
    #     agresores = Agresor.objects.all()
    #     args = {'agresores': agresores,'form':form}
    #     return render(request, self.template_name , args)

class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class DanoViewSet(viewsets.ModelViewSet):
    queryset = Dano.objects.all()
    serializer_class = DanoSerializer

class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo.objects.all()
    serializer_class = TipoSerializer

class ReporteViewSet(viewsets.ModelViewSet):
    queryset = Reporte.objects.all()
    serializer_class = ReporteSerializer

class PerfilViewSet(viewsets.ModelViewSet):
    queryset = Perfil.objects.all()
    serializer_class = PerfilSerializer
