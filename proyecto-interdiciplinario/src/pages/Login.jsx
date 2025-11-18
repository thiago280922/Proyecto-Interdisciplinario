import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
        alert("Por favor, complete todos los campos");
        return;
    }

    const correo = email.toLowerCase();
    let usuario = {};

    // Lógica de acceso con distintos roles
    if (correo === "administrador@remax.com") {
    usuario = { nombre: "Administrador", email: correo, telefono: "—", rol: "admin" };
    alert("Bienvenido Administrador 👑");
    localStorage.setItem("usuario", JSON.stringify(usuario));
    // CORRECCIÓN: Cambia "/admin" por "/paneladmin"
    navigate("/paneladmin"); 
} else if (correo === "agente@remax.com") {
        usuario = { nombre: "Agente Re/Max", email: correo, telefono: "—", rol: "agente" };
        alert("Bienvenido Agente 🧑‍💼");
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/agente");
    } else if (correo.endsWith("@gmail.com")) {
        usuario = { nombre: correo.split("@")[0], email: correo, telefono: "", rol: "cliente" };
        alert("Bienvenido al sistema 🏠");
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/");
    } else {
        alert("Correo no autorizado ❌");
        return;
    }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark font-display">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center mb-6">
            <img
                src="./logo_remax.png"
                alt="Re/Max Logo"
                className="h-16 w-auto mb-2"
            /></div>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Iniciar Sesión
            </h2>
            

            <form onSubmit={handleLogin} className="space-y-4">
            {/* Campo correo */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Correo electrónico
                </label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-background-dark dark:border-gray-700 dark:text-white"
                placeholder="usuario@correo.com"
                />
            </div>

            {/* Campo contraseña */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Contraseña
                </label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-background-dark dark:border-gray-700 dark:text-white"
                placeholder="••••••••"
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition"
            >
                Iniciar sesión
            </button>
            </form>

            {/* Enlace registro */}
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            ¿No tienes una cuenta?{" "}
            <a href="/registro" className="text-primary hover:underline">
                Regístrate
            </a>
            </p>
        </div>
        </div>
    );
    }
