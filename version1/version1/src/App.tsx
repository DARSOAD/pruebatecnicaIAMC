import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pantalla1 from "./pages/Pantalla1";


/**
 * Componente principal de la aplicación que maneja la navegación entre las páginas.
 * Utiliza React Router para cambiar entre la pantalla de registro y la tabla de datos.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Pantalla1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
