# Generated by Django 2.1.4 on 2018-12-25 01:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Aceleracion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('compente', models.DecimalField(decimal_places=6, max_digits=9)),
                ('frecuencia', models.FloatField()),
                ('fichero', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Acelerografo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ubicacion', models.CharField(max_length=100)),
                ('longitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('latitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('altitud', models.FloatField()),
                ('tipo', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Canton',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Dano',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Datalogger',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('modelo', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Estacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('longitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('latitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('ubicacion', models.CharField(max_length=100)),
                ('red', models.CharField(max_length=45)),
                ('acelerografo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Acelerografo')),
                ('datalogger', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Datalogger')),
            ],
        ),
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Parroquia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('canton', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Canton')),
            ],
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('apellido', models.CharField(max_length=45)),
                ('cedula', models.IntegerField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Provincia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('zona', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Reporte',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('dentro', models.BooleanField()),
                ('desplazo', models.BooleanField()),
                ('visible', models.FloatField()),
                ('dano', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Dano')),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Material')),
            ],
        ),
        migrations.CreateModel(
            name='Sensor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('modelo', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Sismo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('ubicacion', models.CharField(max_length=100)),
                ('longitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('latitud', models.DecimalField(decimal_places=6, max_digits=9)),
                ('profundidad', models.FloatField()),
                ('magnitud', models.FloatField()),
                ('azimut', models.FloatField()),
                ('estado', models.CharField(max_length=45)),
                ('fase', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Tipo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
            ],
        ),
        migrations.AddField(
            model_name='reporte',
            name='tipo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Tipo'),
        ),
        migrations.AddField(
            model_name='reporte',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='estacion',
            name='parroquia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Parroquia'),
        ),
        migrations.AddField(
            model_name='estacion',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='canton',
            name='provincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Provincia'),
        ),
        migrations.AddField(
            model_name='acelerografo',
            name='sensor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Sensor'),
        ),
        migrations.AddField(
            model_name='aceleracion',
            name='acelerografo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Acelerografo'),
        ),
        migrations.AddField(
            model_name='aceleracion',
            name='sismo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Sismo'),
        ),
    ]
