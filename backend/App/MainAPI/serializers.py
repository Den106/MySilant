from .models import *
from Guide.models import *
from rest_framework import serializers
from Account.models import *
     

class ModelOfMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfMachine
        fields = ['id', 'title',]


class ModelOfEngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEngine
        fields = ['id', 'title',]


class ModelOfTransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfTransmission
        fields = ['id', 'title',]


class ModelOfMainAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfMainAxle
        fields = ['id', 'title',]


class ModelOfSteeringAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfSteeringAxle
        fields = ['id', 'title',]


class FirstNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name']
        

class TypeOfMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfMaintenance
        fields = '__all__'


class TypeOfRefusalSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfRefusal
        fields = '__all__'


class MethodOfRepairSerializer(serializers.ModelSerializer):
    class Meta:
        model = MethodOfRepair
        fields = '__all__'
        
        
class MachineSerializer(serializers.ModelSerializer):
    modelOfMachine = ModelOfMachineSerializer(read_only=True)
    modelOfEngine = ModelOfEngineSerializer(read_only=True)
    modelOfTransmission = ModelOfTransmissionSerializer(read_only=True)
    modelOfMainAxle = ModelOfMainAxleSerializer(read_only=True)
    modelOfSteeringAxle = ModelOfSteeringAxleSerializer(read_only=True)
    client = FirstNameSerializer(read_only = True)
    serviceCompany = FirstNameSerializer(read_only = True)
    class Meta:
        model = Machine
        fields = '__all__'

        
class MaintenanceSerializer(serializers.ModelSerializer):
    machine = MachineSerializer(read_only = True)
    typeOfMaintenance = TypeOfMaintenanceSerializer(read_only = True)
    maintenanceServiceCompany = FirstNameSerializer(read_only = True)
    serviceCompany = FirstNameSerializer(read_only = True)
    class Meta:
        model = Maintenance
        fields = '__all__'
        
        
class ComplaintsSerializer(serializers.ModelSerializer):
    machine = MachineSerializer(read_only = True)
    nodeOfRefusal = TypeOfRefusalSerializer(read_only = True)
    repairMethod = MethodOfRepairSerializer(read_only = True)
    serviceCompany = FirstNameSerializer(read_only = True)
    class Meta:
        model = Complaints
        fields = '__all__'

class DetailedMachineSerilizer(serializers.ModelSerializer):
    complaints_machine = ComplaintsSerializer(many=True, read_only=True)
    machine = MaintenanceSerializer(many=True, read_only=True)
    class Meta:
        model = Machine
        fields = ['complaints_machine', 'machine']
        
