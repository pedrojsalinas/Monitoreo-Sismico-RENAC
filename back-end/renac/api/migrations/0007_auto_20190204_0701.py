# Generated by Django 2.1.4 on 2019-02-04 07:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20190204_0416'),
    ]

    operations = [
        migrations.RenameField(
            model_name='aceleracion',
            old_name='compente',
            new_name='componente',
        ),
    ]
