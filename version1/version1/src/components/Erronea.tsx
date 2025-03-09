import React from "react";
import "../styles/Confirmar.css"; // Importamos los estilos
import { FaExclamation } from "react-icons/fa";

interface ErroneaProps {
    mensaje?: string;
    onAceptar: () => void;
    onCancelar: () => void;
  }

const Erronea: React.FC<ErroneaProps> = ({
    mensaje = "¿Está seguro?",
    onAceptar,
    onCancelar,
  }) => {
  return (
    <div className="confirmar-container">
      <div className="confirmar-content">
        {/* Icono de confirmación */}
        <div className="icon-check">
          <FaExclamation  className="check-icon-red" />
        </div>

        {/* Mensaje */}
        <p className="mensaje">{mensaje}</p>

        {/* Botones */}
        <div className="botones">
          <button className="btn cancelar" onClick={onCancelar}>
            ✖ CANCELAR
          </button>
          <button className="btn aceptar" onClick={onAceptar}>
            💾 ACEPTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Erronea;
