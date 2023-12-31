

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MethodOfRepair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='способ восстановления')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Способ Восстановления',
                'verbose_name_plural': 'Способы восстановления',
            },
        ),
        migrations.CreateModel(
            name='ModelOfEngine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Модель двигателя')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель двигателя',
                'verbose_name_plural': 'Модели двигателей',
            },
        ),
        migrations.CreateModel(
            name='ModelOfMachine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Модель машины')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель машины',
                'verbose_name_plural': 'Модели машины',
            },
        ),
        migrations.CreateModel(
            name='ModelOfMainAxle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Модель ведущего моста')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель ведущего моста',
                'verbose_name_plural': 'Модели ведущего моста',
            },
        ),
        migrations.CreateModel(
            name='ModelOfSteeringAxle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Модель управляемого моста')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель управляемого моста',
                'verbose_name_plural': 'Модели управляемого моста',
            },
        ),
        migrations.CreateModel(
            name='ModelOfTransmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Модель трансмиссии')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель Трансмиссии',
                'verbose_name_plural': 'Модели трансмиссии',
            },
        ),
        migrations.CreateModel(
            name='TypeOfRefusal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='характер отказа')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Причина отказа',
                'verbose_name_plural': 'Причины отказа',
            },
        ),
        migrations.CreateModel(
            name='TypeOfMaintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Вид ТО')),
                ('slug', models.SlugField(blank=True, max_length=128, verbose_name='Название')),
                ('description', models.CharField(max_length=128, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Вид ТО',
                'verbose_name_plural': 'Виды ТО',
            },
        ),
    ]
