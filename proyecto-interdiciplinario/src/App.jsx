import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetallePropiedad from "./pages/Detalles_propiedad";
import PropiedadesGuardadas from "./pages/PropiedadesGuardadas";
import PanelAgente from "./pages/PanelAgente";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import PanelAdmin from "./pages/PanelAdmin";
import ContactoServicios from "./pages/ContactoServicios";
import Reservas from "./pages/Reservas";
import Transacciones from "./pages/Transacciones";
import Perfil from "./pages/Perfil";
import Ayuda from "./pages/Ayuda";
import Configuracion from "./pages/Configuracion";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* 👈 agregado para tu caso */}
        <Route path="/propiedad/:id" element={<DetallePropiedad />} />
        <Route path="/guardadas" element={<PropiedadesGuardadas />} />
        <Route path="/agente" element={<PanelAgente />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin" element={<PanelAdmin />} />
        <Route path="/contacto" element={<ContactoServicios />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/configuracion" element={<Configuracion />} />

      </Routes>
    </Router>
  );
}

export default App;