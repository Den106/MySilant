

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Guide', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='methodofrepair',
            options={'verbose_name': 'Способ восстановления', 'verbose_name_plural': 'Способы восстановления'},
        ),
        migrations.AlterModelOptions(
            name='modelofmachine',
            options={'verbose_name': 'Модель машины', 'verbose_name_plural': 'Модели машин'},
        ),
        migrations.AlterModelOptions(
            name='modelofmainaxle',
            options={'verbose_name': 'Модель ведущего моста', 'verbose_name_plural': 'Модели ведущих мостов'},
        ),
        migrations.AlterModelOptions(
            name='modelofsteeringaxle',
            options={'verbose_name': 'Модель управляемого моста', 'verbose_name_plural': 'Модели управляемых мостов'},
        ),
        migrations.AlterModelOptions(
            name='modeloftransmission',
            options={'verbose_name': 'Модель трансмиссии', 'verbose_name_plural': 'Модели трансмиссий'},
        ),
        migrations.AlterModelOptions(
            name='typeofrefusal',
            options={'verbose_name': 'Причина отказа', 'verbose_name_plural': 'Причины отказов'},
        ),
        migrations.AlterField(
            model_name='methodofrepair',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='methodofrepair',
            name='title',
            field=models.CharField(max_length=128, verbose_name='Способ восстановления'),
        ),
        migrations.AlterField(
            model_name='modelofengine',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='modelofmachine',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='modelofmainaxle',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='modelofsteeringaxle',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='modeloftransmission',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='typeofmaintenance',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='typeofrefusal',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
    ]
