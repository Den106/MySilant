

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Guide', '0002_alter_methodofrepair_options_and_more'),
        ('MainAPI', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='additionalOptions',
            field=models.TextField(blank=True, verbose_name='Доп. опции'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='guide_client', to=settings.AUTH_USER_MODEL, verbose_name='Покупатель'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='modelOfMachine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='guide_modelOfMachine', to='Guide.modelofmachine', verbose_name='Модель машины'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='supplyContract',
            field=models.CharField(max_length=128, verbose_name='Договор поставки №'),
        ),
    ]
