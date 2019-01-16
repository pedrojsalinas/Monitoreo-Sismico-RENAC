#comando
#python manage.py runscript script_bda.py --verbosity 0

import csv
from api.models import *

# with open('datos/cantones.csv') as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         canton = Canton.objects.create(nombre=row['canton'],provincia_id=row['provincia_id'])
#         canton.save()

with open('datos/parroquias.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        parroquia = Parroquia.objects.create(nombre=row['parroquia'],canton_id=row['id_canton'])
        parroquia.save()
