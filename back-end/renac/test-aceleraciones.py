import os
import re
import time
from time import gmtime, strftime
from datetime import datetime
from api.models import Acelerografo,Aceleracion
from django.conf import settings
from django.core.files import File
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
import shutil

f = open(settings.MEDIA_ROOT+"/aceleraciones/APED.txt", encoding = "ISO-8859-1")

for line in f:
    if 'Esta' in line:
        # estacion = line.split(":")[1].strip()
        estacion = 'La Victoria'
        acelerografo = Acelerografo.objects.get(nombre=estacion)
        acelerografo_id = acelerografo.id
f.close()

f = open(settings.MEDIA_ROOT+"/aceleraciones/APED.txt", encoding = "ISO-8859-1")
for i, line in enumerate(f):
    if i in range(0,10):
        if 'Fecha' in line:
            fecha = re.findall(r'\d+',line.split(":")[1].strip())
            date = datetime(year=int(fecha[0]), month=int(fecha[1]), day=int(fecha[2]))
            print(date)
        elif 'Hora' in line:
            hora = re.findall(r'\d+',line.split(":")[1].strip())
            t = "{}:{}:{}".format(hora[0],hora[1],hora[2])
        elif 'Componente' in line:
            componente=line.split(":")[1].strip()
            print(componente)
        elif 'Frecuencia' in line:
            frecuencia=line.split(":")[1].strip()
            print(frecuencia)
f.close()
day = strftime("%Y%m%d", gmtime())
hour = strftime("%H%M%S", gmtime())
fichero = "aceleraciones/{}/{}/{}/".format(acelerografo_id,day,hour)
os.makedirs(os.path.join(settings.MEDIA_ROOT, fichero))
fichero_final = settings.MEDIA_ROOT+'/'+fichero+'/datos.txt'
shutil.copy(settings.MEDIA_ROOT+"/aceleraciones/APED.txt", fichero_final)

aceleracion =Aceleracion.objects.create(fecha =date,hora =t,compente =componente,frecuencia =frecuencia,fichero =fichero+'datos.txt',acelerografo_id=acelerografo_id)
aceleracion.save()
