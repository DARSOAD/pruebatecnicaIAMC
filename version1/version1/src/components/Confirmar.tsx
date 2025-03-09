import React from "react";
import { CiCircleCheck } from "react-icons/ci"; // Importamos el icono
import "../styles/Confirmar.css"; // Importamos los estilos

interface ConfirmarProps {
    mensaje?: string;
    onAceptar: () => void;
    onCancelar: () => void;
  }

const Confirmar: React.FC<ConfirmarProps> = ({
    mensaje = "¿Está seguro?",
    onAceptar,
    onCancelar,
  }) => {
  return (
    <div className="confirmar-container">
      <div className="confirmar-content">
        {/* Icono de confirmación */}
        <div className="icon-check">
          <CiCircleCheck className="check-icon" />
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

export default Confirmar;
