from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken


class Provincia(models.Model):
    nombre = models.CharField(max_length=45)
    zona = models.IntegerField()
    def __str__(self):
        return self.nombre

class Canton(models.Model):
    nombre = models.CharField(max_length=45)
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre
class Parroquia(models.Model):
    nombre = models.CharField(max_length=45)
    canton = models.ForeignKey(Canton, on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class Sensor(models.Model):
    nombre = models.CharField(max_length=45)
    modelo = models.CharField(max_length=45)
    def __str__(self):
        return self.nombre + " " + self.modelo

class Acelerografo(models.Model):
    nombre = models.CharField(max_length=100)
    ubicacion = models.CharField(max_length=100)
    longitud = models.DecimalField(max_digits=9, decimal_places=6)
    latitud = models.DecimalField(max_digits=9, decimal_places=6)
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    altitud = models.FloatField()
    activo = models.BooleanField(default=True)
    def __str__(self):
        return self.nombre



class Datalogger(models.Model):
    nombre = models.CharField(max_length=45)
    modelo = models.CharField(max_length=45)

class Estacion(models.Model):
    nombre = models.CharField(max_length=45)
    longitud = models.DecimalField(max_digits=9, decimal_places=6)
    latitud = models.DecimalField(max_digits=9, decimal_places=6)
    ubicacion = models.CharField(max_length=100)
    parroquia = models.ForeignKey(Parroquia, on_delete=models.CASCADE)
    red = models.CharField(max_length=45)
    acelerografo = models.ForeignKey(Acelerografo, on_delete=models.CASCADE)
    datalogger = models.ForeignKey(Datalogger, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Aceleracion(models.Model):
    fecha = models.DateField(auto_now=False)
    hora = models.CharField(max_length=15)
    componente = models.CharField(max_length=5)
    frecuencia = models.CharField(max_length=15)
    fichero = models.CharField(max_length=100)
    acelerografo = models.ForeignKey(Acelerografo, on_delete=models.CASCADE)

class Material(models.Model):
    nombre = models.CharField(max_length=45)

class Dano(models.Model):
    nombre = models.CharField(max_length=45)

class Tipo(models.Model):
    nombre = models.CharField(max_length=45)

class Reporte(models.Model):
    fecha = models.DateField(auto_now=False)
    hora = models.TimeField(auto_now=False)
    dentro = models.BooleanField()
    desplazo = models.BooleanField()
    desplazo = models.BooleanField()
    visible = models.FloatField()
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    dano = models.ForeignKey(Dano, on_delete=models.CASCADE)
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Perfil(models.Model):
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    cedula = models.IntegerField()
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
