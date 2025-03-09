import React from "react";
import "../styles/Pantalla2.css";

/**
 * Pantalla2.tsx
 * Componente que muestra la tabla con los datos de los usuarios registrados.
 */
const Pantalla2: React.FC = () => {
  const datosEjemplo = [
    { id: 1, tipoPersona: "Natural", documento: "123456789", razonSocial: "N/A" },
    { id: 2, tipoPersona: "Jurídica", documento: "987654321", razonSocial: "Empresa S.A." },
  ];

  return (
    <div className="pantalla2-container">
      <h1>Usuarios Registrados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo de Persona</th>
            <th>Número de Documento</th>
            <th>Razón Social</th>
          </tr>
        </thead>
        <tbody>
          {datosEjemplo.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.tipoPersona}</td>
              <td>{usuario.documento}</td>
              <td>{usuario.razonSocial}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pantalla2;
