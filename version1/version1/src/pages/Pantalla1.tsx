import React, { useEffect, useState } from "react";
import "../styles/Pantalla1.css";
import { FaRegUser, FaBell, FaExclamationCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import departamentosData from "../data/dataDepartamentos.json"; // Importa el JSON
import paisesData from "../data/dataPaises.json"; // Importa el JSON
import municipiosData from "../data/dataMunicipios.json"; // Importa el JSON
import personasData from "../data/dataPersonas.json"; // Importa el JSON
import { CiCircleCheck } from "react-icons/ci";
import "../styles/Pantalla2.css";
import usuariossData from "../data/dataUsuario.json"; // Importa el JSON
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Confirmar from "../components/Confirmar";
import Erronea from "../components/Erronea";
import Informativa from "../components/Informativa";

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

interface Ubicacion {
  codigo: string;
  nombre: string;
}


interface Personas {
  tipoPersona: string;
  tipoDocumento: string;
  numeroDocumento: string;
}

// Forzar que `departamentosData` sea un array de objetos tipo `Departamento`
const departamentos: Ubicacion[] = departamentosData as Ubicacion[];
const paises: Ubicacion[] = paisesData as Ubicacion[];
const municipios: Ubicacion[] = municipiosData as Ubicacion[];
const personas: Personas[] = personasData as Personas[];



const Pantalla1: React.FC = () => {
  const [formData, setFormData] = useState({
    pais: "",
    departamento: "",
    municipio: "",
    digitoVerificacion: "",
    razonSocial: "",
    nombreComercial: "",
    direccion: "",
    tipoEmpresa: "",
    correoElectronico: "",
    confirmarCorreo: "",
    numeroCelular: "",
    confirmarCelular: "",
    diligenciaFormulario: "",
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

  const [formPersonasData, setFormPersonasData] = useState({
    tipoPersona: "",
    tipoDocumento: "",
    numeroDocumento: ""
  });

  const handleChangePersonas = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormPersonasData({ ...formPersonasData, [e.target.name]: e.target.value });
  };

  // Buscar persona en la base de datos
  const handleBuscar = () => {
    const personaEncontrada = personas.find(
      (p) => p.tipoPersona === formPersonasData.tipoPersona &&
        p.tipoDocumento === formPersonasData.tipoDocumento &&
        p.numeroDocumento === formPersonasData.numeroDocumento
    );

    if (personaEncontrada) {
      document.getElementById("checkSi")!.style.display = "grid";
      setTimeout(() => {
        document.getElementById("checkSi")!.style.display = "none";
      }, 5000);
    } else {
      document.getElementById("noExiste")!.style.display = "grid";
      setTimeout(() => {
        document.getElementById("noExiste")!.style.display = "none";
      }, 5000);
    }
  };
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [mostrarPantalla1, setMostrarPantalla1] = useState(true);
  const [mostrarPantalla2, setMostrarPantalla2] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [mostrarErronea, setMostrarErronea] = useState(false);
  const [mostrarInformativa, setMostrarInformativa] = useState(false);

  const handleSubmitLoaders = () => {

    setCargando(true);
    setMostrarPantalla1(false);

    setTimeout(() => {
      setCargando(false);
      setMostrarPantalla2(true);
    }, 1000); // Simulamos tiempo de respuesta del servidor
  };

  const handleAceptar = () => {
    setCargando(true);
    setMostrarConfirmar(false);
    setMostrarErronea(false);
    setMostrarInformativa(false);

    setTimeout(() => {
      setCargando(false);
      setMostrarPantalla1(true);
    }, 1000); // Simulamos tiempo de respuesta del servidor
  };

  const handleCancelar = () => {
    setCargando(true);
    setMostrarConfirmar(false);
    setMostrarErronea(false);
    setMostrarInformativa(false);

    setTimeout(() => {
      setCargando(false);
      setMostrarPantalla1(true);
    }, 1000); // Simulamos tiempo de respuesta del servidor
  };

  const handleSubmitConfirmar = () => {
    setMostrarPantalla2(false);
    setMostrarConfirmar(true);
  };

  const handleSubmitErronea = () => {
    setMostrarPantalla2(false);
    setMostrarErronea(true);
  };

  
  const handleSubmitInformativa = () => {
    setMostrarPantalla2(false);
    setMostrarInformativa(true);
  };

  useEffect(() => {
    if (!cargando) {
      setLoadingVisible(false);
      return;
    }

    setLoadingVisible(true);
  }, [cargando]);

  return (
    <div className="pantalla1-container">

      <aside className="sidebar">
        <div className="user-section">
          <FaRegUser className="user-icon" />
          <h3>Usuario Interno</h3>
        </div>
        <button className="perfil btn-class">Perfil</button>
        <button className="cerrar btn-class">Cerrar Sesión</button>
        <button className="gestor btn-class">Gestor de Recaudo</button>
        <button className="gestor btn-class">Identificador de usuarios</button>
      </aside>
      <div className="right-section">
        <div className="top-bar">
          <FaHouse className="icons-top-bar" />
          <FaBell className="icons-top-bar" />
          <FaRegUser className="icons-top-bar" />
        </div>
        <h1 className="titulo">Identificación de Usuarios Recaudadores</h1>
        <form onSubmit={handleSubmit} style={{ display: mostrarPantalla1 ? 'block' : 'none' }}>
          <div className="form-group">
            <select name="tipoPersona" value={formPersonasData.tipoPersona} onChange={handleChangePersonas}>
              <option value="">Tipo de Persona: *</option>
              <option value="Natural">Natural</option>
              <option value="Jurídica">Jurídica</option>
            </select>
            <select name="tipoDocumento" value={formPersonasData.tipoDocumento} onChange={handleChangePersonas}>
              <option value="">Tipo de documento: * </option>
              <option value="NIT">NIT</option>
              <option value="CC">Cédula</option>
            </select>
            <input type="text" name="numeroDocumento" placeholder="Número de Documento" value={formPersonasData.numeroDocumento} onChange={handleChangePersonas} />
            <button type="button" className="buscar-btn btn-class" onClick={handleBuscar}>Buscar 🔍</button>
          </div>

          <h1 className="titulo">Información de Usuarios Recaudadores</h1>
          <div className="grid-form">
            <select name="pais" value={formData.pais} onChange={handleChange}>
              <option value="">País *</option>
              {paises.map((pais) => (
                <option key={pais.codigo} value={pais.codigo}>
                  {pais.nombre}
                </option>
              ))}
            </select>

            <select name="departamento" value={formData.departamento} onChange={handleChange}>
              <option value="">Departamento *</option>
              {departamentos.map((dept) => (
                <option key={dept.codigo} value={dept.codigo}>
                  {dept.nombre}
                </option>
              ))}
            </select>

            <select name="municipio" value={formData.municipio} onChange={handleChange}>
              <option value="">Municipio *</option>
              {municipios.map((mun) => (
                <option key={mun.codigo} value={mun.codigo}>
                  {mun.nombre}
                </option>
              ))}
            </select>

            <input type="text" name="digitoVerificacion" placeholder="Dígito de verificación" value={formData.digitoVerificacion} onChange={handleChange} />
            <input type="text" name="razonSocial" placeholder="Razón Social" value={formData.razonSocial} onChange={handleChange} />
            <input type="text" name="nombreComercial" placeholder="Nombre Comercial" value={formData.nombreComercial} onChange={handleChange} />
            <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} />
            <select name="tipoEmpresa" value={formData.tipoEmpresa} onChange={handleChange}>
              <option value="">Tipo de empresa cacaotera</option>
              <option value="comercializador">Comercializador</option>
              <option value="transformador">Transformador</option>
              <option value="exportador">Exportador</option>
            </select>
            <button type="button" className="btn-class" onClick={handleSubmitLoaders}>Generar Dirección</button>
          </div>
          <div className="grid-form2">
            <input type="email" name="correoElectronico" placeholder="Correo Electrónico" value={formData.correoElectronico} onChange={handleChange} />
            <input type="email" name="confirmarCorreo" placeholder="Confirmar Correo Electrónico" value={formData.confirmarCorreo} onChange={handleChange}
              style={{
                borderColor: formData.confirmarCorreo && formData.confirmarCorreo !== formData.correoElectronico ? 'red' : 'initial',
                color: formData.confirmarCorreo && formData.confirmarCorreo !== formData.correoElectronico ? 'red' : 'initial'
              }}
            />
            <input type="number" name="numeroCelular" placeholder="Número de Celular" value={formData.numeroCelular} onChange={handleChange} />
            <input type="number" name="confirmarCelular" placeholder="Confirmar Número de Celular" value={formData.confirmarCelular} onChange={handleChange}
              style={{
                borderColor: formData.confirmarCelular && formData.confirmarCelular !== formData.numeroCelular ? 'red' : 'initial',
                color: formData.confirmarCelular && formData.confirmarCelular !== formData.numeroCelular ? 'red' : 'initial'
              }}
            />
            <input type="text" name="diligenciaFormulario" placeholder="Quién diligencia el formulario" value={formData.diligenciaFormulario} onChange={handleChange} />
            <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} />

          </div>
          <div className="grid-form">
            <input type="text" name="area" placeholder="Área" value={formData.area} onChange={handleChange} />
            <button type="submit" className="actualizar-btn btn-class" onClick={handleSubmitLoaders}>Actualizar</button>
            <button type="submit" className="guardar-btn btn-class" onClick={handleSubmitLoaders}>Guardar</button>
          </div>
        </form>
        <div className="grid-form">
          <div className="checkSi" id='checkSi'>
            <p>Se ha encontrado la persona jurídica</p>
            <CiCircleCheck />
          </div>
          <div className="noExiste" id='noExiste'>
            <p>No existe ninguna persona registrada con este NIT</p>
            <FaExclamationCircle />
          </div>
        </div>
        {/* Loader visible mientras `cargando` es true */}
        {loadingVisible && (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Cargando...</p>
          </div>
        )}
        <div style={{ display: mostrarConfirmar ? 'block' : 'none' }}>
          <Confirmar

            mensaje="¿Desea guardar los cambios?"
            onAceptar={handleAceptar}
            onCancelar={handleCancelar}
          />
        </div>
        <div style={{ display: mostrarErronea ? 'block' : 'none' }}>
          <Erronea

            mensaje="Mo se puede eliminar"
            onAceptar={handleAceptar}
            onCancelar={handleCancelar}
          />
        </div>
        <div style={{ display: mostrarInformativa ? 'block' : 'none' }}>
          <Informativa

            mensaje="Esta es la info del usuario "
            onAceptar={handleAceptar}
            onCancelar={handleCancelar}
          />
        </div>


        <div style={{ display: mostrarPantalla2 ? 'block' : 'none' }}>
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
                      <FaEdit onClick={handleSubmitInformativa}/>
                      <CiCircleCheck onClick={handleSubmitConfirmar} />
                      <RiDeleteBin6Fill onClick={handleSubmitErronea} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pantalla1;
