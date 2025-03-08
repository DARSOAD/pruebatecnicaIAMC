from django.db import models

class Persona(models.Model):
    TIPOS_DOCUMENTO = [
        ('CC', 'Cédula de Ciudadanía'),
        ('CE', 'Cédula de Extranjería'),
        ('TI', 'Tarjeta de Identidad'),
        ('PAS', 'Pasaporte'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    tipo_documento = models.CharField(max_length=3, choices=TIPOS_DOCUMENTO)
    numero_documento = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    fecha_limite = models.DateField()
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, related_name="tareas")

    def __str__(self):
        return self.titulo
