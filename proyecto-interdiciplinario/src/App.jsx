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
import Comprar from "./pages/Comprar";
import Vender from "./pages/Vender";
import Alquilar from "./pages/Alquilar";
import Asesoria from "./pages/Asesoria";
import Contactanos from "./pages/Contactanos";
import Agentes from "./pages/Agentes";

import VisitasAgente from "./pages/VisitasAgente";
import LeadsAgente from "./pages/LeadsAgente";
import InformesAgente from "./pages/InformesAgente";

import ConfiguracionAgente from "./pages/ConfiguracionAgente";

import ConfiguracionAgente from "./pages/ConfiguracionAgente";

function App() {
  return (
    <Router>
      <Routes>

        {/* Publico */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propiedad/:id" element={<DetallePropiedad />} />
        <Route path="/guardadas" element={<PropiedadesGuardadas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/paneladmin" element={<PanelAdmin />} />
        <Route path="/contacto" element={<ContactoServicios />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/alquilar" element={<Alquilar />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/agentes" element={<Agentes />} />

        {/* Panel Agente */}
        <Route path="/agente" element={<PanelAgente />} />
        <Route path="/agente/visitasagente" element={<VisitasAgente />} />
        <Route path="/agente/leadsagente" element={<LeadsAgente />} />
        <Route path="/agente/informesagente" element={<InformesAgente />} />

        <Route path="/agente/configuracion" element={<ConfiguracionAgente />} />

      </Routes>
    </Router>
  );
}

export default App;
