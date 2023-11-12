from django.db import models
from Guide.models import *
from Account.models import User
# Create your models here.


class Machine(models.Model):
    factoryNumberOfMachine = models.CharField(unique=True, primary_key=True, max_length=128, verbose_name='Зав. № машины')
    modelOfMachine = models.ForeignKey(ModelOfMachine, verbose_name='Модель машины', related_name='guide_modelOfMachine', on_delete=models.CASCADE)
    modelOfEngine = models.ForeignKey(ModelOfEngine, verbose_name='Модель двигателя', related_name='guide_modelOfEngine', on_delete=models.CASCADE)
    factoryNumberOfEngine = models.CharField(max_length=128, verbose_name='Зав. № двигателя')
    modelOfTransmission = models.ForeignKey(ModelOfTransmission, verbose_name='Модель трансмиссии', related_name='guide_modelOfTransmission', on_delete=models.CASCADE)
    factoryNumberOfTransmission = models.CharField(max_length=128, verbose_name='Зав. № трансмиссии')
    modelOfMainAxle = models.ForeignKey(ModelOfMainAxle, verbose_name='Модель ведущего моста', related_name='guide_modelofMainAxle', on_delete=models.CASCADE)
    factoryNumberOfMainAxle = models.CharField(max_length=128, verbose_name='Зав. № ведущего моста')
    modelOfSteeringAxle = models.ForeignKey(ModelOfSteeringAxle, verbose_name='Модель управляемого моста', related_name='guide_modelOfSteeringAxle', on_delete=models.CASCADE)
    factoryNumberOfSteeringAxle = models.CharField(max_length=128, verbose_name='Зав. № управляемого моста')
    supplyContract = models.CharField(max_length=128, verbose_name='Договор поставки №')
    dateOfShipment = models.DateField(verbose_name='Дата отгрузки с завода')
    consumer = models.CharField(max_length=128, verbose_name='Грузополучатель')
    operationAddress = models.CharField(max_length=128, verbose_name='Адрес поставки')
    additionalOptions = models.TextField(verbose_name='Доп. опции', blank=True)
    client = models.ForeignKey(User, verbose_name='Покупатель', related_name='guide_client', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey(User, verbose_name='Сервисная компания', related_name='machine_serviceCompany', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Машина'
        verbose_name_plural = 'Машины'
        ordering = ['-dateOfShipment']

    def __str__(self):
        return self.factoryNumberOfMachine


class Maintenance(models.Model):
    typeOfMaintenance = models.ForeignKey(TypeOfMaintenance, verbose_name='Вид ТО', related_name='guide_typeofmaintenance', on_delete=models.CASCADE)
    dateOfMaintenance = models.DateField(verbose_name='Дата проведения ТО')
    operatingTime = models.IntegerField(verbose_name='Наработка, м/час')
    numberOrderWork = models.CharField(max_length=128, verbose_name='№ заказ-наряда')
    dateOrderWork = models.DateField(verbose_name='Дата заказ-наряда')
    maintenanceServiceCompany = models.ForeignKey(User, verbose_name='Организация, проводившая ТО', related_name='maintenance_servicecompany', on_delete=models.CASCADE)
    machine = models.ForeignKey(Machine, verbose_name='Машина', related_name='machine', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey(User, verbose_name='Сервисная компания', related_name='maintenance_serviceCompany', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Техническое Обслуживание'
        verbose_name_plural = 'Техническое Обслуживание'
        ordering = ['-dateOfMaintenance']
        
    def __str__(self):
        return f'{self.pk}'


class Complaints(models.Model):
    dateOfRefusal = models.DateField(verbose_name='Дата отказа')
    operatingTime = models.IntegerField(verbose_name='Наработка, м/час')
    nodeOfRefusal = models.ForeignKey(TypeOfRefusal, verbose_name='Узел отказа', related_name='guide_nodeofrefusal', on_delete=models.CASCADE)
    descriptionOfRefusal = models.CharField(max_length=128, verbose_name='Описание отказа')
    repairMethod = models.ForeignKey(MethodOfRepair, verbose_name='Способ восстановления', related_name='guide_repairmethod', on_delete=models.CASCADE)
    usedSpareParts = models.CharField(max_length=128, verbose_name='Используемые запасные части', blank=True)
    dateOfRepair = models.DateField(verbose_name='Дата восстановления')
    downtimeOfMachine = models.IntegerField(verbose_name='Время простоя', blank=True)
    machine = models.ForeignKey(Machine, verbose_name='Машина', related_name='complaints_machine', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey(User, verbose_name='Сервисная компания', related_name='complaints_serviceCompany', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Рекламация'
        verbose_name_plural = 'Рекламации'
        ordering = ['-dateOfRefusal']
        
    def __str__(self):
        return f'{self.pk}'
    
    def save(self, *args, **kwargs):
        _days = self.dateOfRepair - self.dateOfRefusal
        self.downtimeOfMachine = _days.total_seconds() // (24 * 3600)
        
        super(Complaints, self).save(*args, **kwargs)
    
