from rest_framework import serializers
from .models import Persona, Tarea

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'

class TareaSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer(read_only=True)  # Para mostrar los datos de la persona en la tarea
    persona_id = serializers.PrimaryKeyRelatedField(
        queryset=Persona.objects.all(), source='persona', write_only=True)

    class Meta:
        model = Tarea
        fields = '__all__'
