import React from "react";
import "../styles/Pantalla2.css";
import usuariossData from "../data/dataUsuario.json"; // Importa el JSON
import { FaEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface Usuario {
  id: number;
  fecha: string;
  nit: string;
  razonSocial: string;
  naturalezaEmpresa: string;
  tipoEmpresaCacaotera: string;
  correoElectronico: string;
  numeroCelular: string;
  representanteLegal: string;
  estado: string;
  acciones: string[];
}
const usuarios: Usuario[] = usuariossData as Usuario[];

const Pantalla2: React.FC = () => {


  return (
    <div className="pantalla2-container">
      <h3 className="titulo">Usuarios Registrados</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>NIT</th>
            <th>Razón Social</th>
            <th>Naturaleza de la empresa</th>
            <th>Tipo de empresa cacaotera</th>
            <th>Correo electrónico</th>
            <th>Número de celular</th>
            <th>Nombre del representate legal</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.fecha}</td>
              <td>{usuario.nit}</td>
              <td>{usuario.razonSocial}</td>
              <td>{usuario.naturalezaEmpresa}</td>
              <td>{usuario.tipoEmpresaCacaotera}</td>
              <td>{usuario.correoElectronico}</td>
              <td>{usuario.numeroCelular}</td>
              <td>{usuario.representanteLegal}</td>
              <td>{usuario.estado}</td>
              <td>
                <FaEdit/>
                <CiCircleCheck/>
                <RiDeleteBin6Fill />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pantalla2;
