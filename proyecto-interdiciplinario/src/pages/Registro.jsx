import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Registro() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistro = (e) => {
        e.preventDefault();

        if (!nombre || !email || !password) {
        alert("⚠️ Por favor completá todos los campos.");
        return;
        }

        if (!email.includes("@gmail.com")) {
        alert("❌ Solo se permiten registros con correos @gmail.com");
        return;
        }

        // Guardar usuario simulado en localStorage
        const nuevoUsuario = { nombre, email, password };
        localStorage.setItem("usuarioRegistrado", JSON.stringify(nuevoUsuario));

        alert("✅ Registro exitoso. Bienvenido/a " + nombre + "!");
        navigate("/home");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
            <img
                src="./logo_remax.png"
                alt="Re/Max Logo"
                className="h-16 w-auto mb-2"
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Crear cuenta
            </h1>
            </div>

            <form onSubmit={handleRegistro} className="space-y-6">
            <div>
                <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                Nombre completo
                </label>
                <input
                id="nombre"
                type="text"
                placeholder="Tu nombre y apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary"
                required
                />
            </div>

            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                Correo electrónico
                </label>
                <input
                id="email"
                type="email"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary"
                required
                />
            </div>

            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                Contraseña
                </label>
                <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary"
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
                Registrarse
            </button>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                ¿Ya tenés una cuenta?{" "}
                <a
                href="/login"
                className="text-primary hover:underline font-medium"
                >
                Iniciá sesión
                </a>
            </p>
            </form>
        </div>
        </div>
    );
    }
