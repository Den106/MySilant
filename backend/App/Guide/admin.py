from django.contrib import admin
from .models import *


@admin.register(TypeOfRefusal)
class TypeOfRefusalAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(MethodOfRepair)
class MethodOfRepairAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(TypeOfMaintenance)
class TypeOfMaintenanceAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ModelOfSteeringAxle)
class ModelOfStreerungAxleAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ModelOfMainAxle)
class ModelOfMainAxleAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ModelOfTransmission)
class ModelOfTransmissionAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ModelOfEngine)
class ModelOfEngineAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ModelOfMachine)
class ModelOfMachineAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'description']
    prepopulated_fields = {'slug': ('title',)}
