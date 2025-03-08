from rest_framework import generics
from .models import Persona, Tarea
from .serializers import PersonaSerializer, TareaSerializer

class PersonaListCreateView(generics.ListCreateAPIView):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

class PersonaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

class PersonaByDocumentView(generics.ListAPIView):
    serializer_class = PersonaSerializer

    def get_queryset(self):
        numero_documento = self.kwargs['numero_documento']
        return Persona.objects.filter(numero_documento=numero_documento)

class TareaListCreateView(generics.ListCreateAPIView):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializer

class TareaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializer

class TareasByFechaLimiteView(generics.ListAPIView):
    serializer_class = TareaSerializer

    def get_queryset(self):
        fecha = self.kwargs['fecha']
        return Tarea.objects.filter(fecha_limite=fecha)

class TareasByRangoFechaView(generics.ListAPIView):
    serializer_class = TareaSerializer

    def get_queryset(self):
        inicio = self.kwargs['inicio']
        fin = self.kwargs['fin']
        return Tarea.objects.filter(fecha_limite__range=[inicio, fin])

class TareasByPersonaView(generics.ListAPIView):
    serializer_class = TareaSerializer

    def get_queryset(self):
        tipo_doc = self.kwargs['tipo_doc']
        num_doc = self.kwargs['num_doc']
        return Tarea.objects.filter(persona__tipo_documento=tipo_doc, persona__numero_documento=num_doc)
