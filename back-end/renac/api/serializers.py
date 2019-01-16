from django.contrib.auth.models import User, Group
from .models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups', 'first_name','last_name')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class ProvinciaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Provincia
        fields = ('id','nombre', 'zona')

class CantonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Canton
        fields = ('id','nombre', 'provincia')

class ParroquiaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Parroquia
        fields = ('id','nombre', 'canton')

class SensorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sensor
        fields = ('id','nombre', 'modelo', 'url')


class AcelerografoSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Acelerografo
            fields = ('id','nombre','ubicacion', 'longitud','latitud','sensor','altitud','activo','url')

class SismoSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Sismo
            fields = ('id','fecha','hora','ubicacion','longitud','latitud','profundidad','magnitud','azimut','estado','fase')


class DataloggerSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Datalogger
            fields = ('id','nombre','modelo','url')

class EstacionSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Estacion
            fields = ('url','nombre' ,'longitud' ,'latitud' ,'ubicacion' ,'parroquia' ,'red' ,'acelerografo' ,'datalogger' ,'usuario')

class AceleracionSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Aceleracion
            fields = ('id','fecha','hora','compente','frecuencia','fichero','acelerografo','sismo')


class MaterialSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Material
            fields = ('id','nombre')

class DanoSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Dano
            fields = ('id','nombre')

class TipoSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Tipo
            fields = ('id','nombre')

class ReporteSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Reporte
            fields = ('id','fecha','hora','dentro','desplazo','desplazo','visible','material','dano','tipo','usuario')

class PerfilSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model = Perfil
            fields = ('id','nombre','apellido','cedula','usuario')
