# Generated by Django 2.1.4 on 2019-02-04 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20190202_1907'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aceleracion',
            name='hora',
            field=models.CharField(max_length=15),
        ),
    ]
