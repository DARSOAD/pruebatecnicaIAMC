import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Archivo principal donde se monta la aplicación en el DOM.
 * Se utiliza React 18 con createRoot para una mejor gestión del rendimiento.
 */
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
