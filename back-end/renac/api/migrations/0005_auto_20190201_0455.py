# Generated by Django 2.1.4 on 2019-02-01 04:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190201_0451'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aceleracion',
            name='compente',
        ),
        migrations.RemoveField(
            model_name='aceleracion',
            name='frecuencia',
        ),
    ]
