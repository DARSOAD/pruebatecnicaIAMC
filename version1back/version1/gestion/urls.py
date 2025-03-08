from django.urls import path
from .views import (
    PersonaListCreateView, PersonaRetrieveUpdateDestroyView, PersonaByDocumentView,
    TareaListCreateView, TareaRetrieveUpdateDestroyView, TareasByFechaLimiteView,
    TareasByRangoFechaView, TareasByPersonaView
)

urlpatterns = [
    path('personas/', PersonaListCreateView.as_view(), name='personas-list'),
    path('personas/<int:pk>/', PersonaRetrieveUpdateDestroyView.as_view(), name='persona-detail'),
    path('personas/documento/<str:numero_documento>/', PersonaByDocumentView.as_view(), name='persona-documento'),
    
    path('tareas/', TareaListCreateView.as_view(), name='tareas-list'),
    path('tareas/<int:pk>/', TareaRetrieveUpdateDestroyView.as_view(), name='tarea-detail'),
    path('tareas/fecha/<str:fecha>/', TareasByFechaLimiteView.as_view(), name='tareas-fecha'),
    path('tareas/rango/<str:inicio>/<str:fin>/', TareasByRangoFechaView.as_view(), name='tareas-rango'),
    path('tareas/persona/<str:tipo_doc>/<str:num_doc>/', TareasByPersonaView.as_view(), name='tareas-persona'),
]
