from rest_framework import serializers
from .models import User, Users

        
class UserSerializer(serializers.ModelSerializer):
    character = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'first_name', 'username', 'character']
        
    def get_character(self, obj):
        return obj.users.get_character_display()
   

class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('__all__')
        
        
class UsersSerializer(serializers.ModelSerializer):
    users = AccountsSerializer(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'first_name', 'username', 'users']
