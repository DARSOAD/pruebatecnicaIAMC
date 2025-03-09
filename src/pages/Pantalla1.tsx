import React, { useState } from "react";
import "../styles/Pantalla1.css";

/**
 * Pantalla1.tsx
 * Componente que representa el formulario de registro de usuarios recaudadores.
 */
const Pantalla1: React.FC = () => {
  const [formData, setFormData] = useState({
    tipoPersona: "",
    tipoDocumento: "",
    numeroDocumento: "",
    departamento: "",
    municipio: "",
    razonSocial: "",
    nombreComercial: "",
    direccion: "",
    correoElectronico: "",
    numeroCelular: "",
    cargo: "",
    area: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="pantalla1-container">
      <h1>Registro de Usuarios Recaudadores</h1>
      <form onSubmit={handleSubmit}>
        <label>Tipo de Persona:</label>
        <select name="tipoPersona" value={formData.tipoPersona} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="Natural">Natural</option>
          <option value="Jurídica">Jurídica</option>
        </select>

        <label>Tipo de Documento:</label>
        <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="CC">Cédula</option>
          <option value="NIT">NIT</option>
        </select>

        <label>Número de Documento:</label>
        <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Pantalla1;
