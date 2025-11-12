import React from "react";
import { useNavigate } from "react-router-dom";

export default function PanelAgente() {
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        navigate("/"); // redirige al inicio
    };

    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-background-dark flex flex-col border-r border-gray-200 dark:border-gray-800">
            <div className="p-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Re/Max Agente
            </h1>
            <button
                onClick={handleCerrarSesion}
                className="text-xs font-medium text-primary hover:underline"
            >
                Cerrar sesión
            </button>
            </div>

            <nav className="flex-1 px-4 space-y-2">
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
                🏠 <span className="text-sm font-medium">Inicio</span>
            </a>
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
            >
                🏢 <span className="text-sm font-medium">Propiedades</span>
            </a>
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
                📅 <span className="text-sm font-medium">Visitas</span>
            </a>
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
                👥 <span className="text-sm font-medium">Leads</span>
            </a>
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
                📊 <span className="text-sm font-medium">Informes</span>
            </a>
            </nav>

            <div className="px-4 py-6">
            <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
                ⚙️ <span className="text-sm font-medium">Configuración</span>
            </a>
            </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Propiedades Asignadas
                </h2>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                Gestiona tus propiedades y sigue el progreso de las ventas.
                </p>
            </header>

            {/* Buscador */}
            <div className="mb-6 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                🔍
                </span>
                <input
                type="text"
                placeholder="Buscar propiedades por dirección o ID"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white"
                />
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <nav className="-mb-px flex space-x-8">
                <a className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Todas
                </a>
                <a className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    En Venta
                </a>
                <a className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Vendidas
                </a>
                </nav>
            </div>

            {/* Tabla */}
            <div className="bg-white dark:bg-background-dark rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Dirección
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Estado
                    </th>
                    <th className="px-6 py-3"></th>
                    </tr>
                </thead>

                <tbody className="bg-white dark:bg-background-dark divide-y divide-gray-200 dark:divide-gray-800">
                    {[
                    {
                        direccion: "123 Calle Principal, Ciudad",
                        tipo: "Casa",
                        precio: "$250,000",
                        estado: "En Venta",
                    },
                    {
                        direccion: "456 Avenida Central, Ciudad",
                        tipo: "Apartamento",
                        precio: "$180,000",
                        estado: "En Venta",
                    },
                    {
                        direccion: "789 Calle del Parque, Ciudad",
                        tipo: "Casa",
                        precio: "$320,000",
                        estado: "Vendida",
                    },
                    ].map((p, i) => (
                    <tr key={i}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {p.direccion}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {p.tipo}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {p.precio}
                        </td>
                        <td className="px-6 py-4 text-sm">
                        <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            p.estado === "Vendida"
                                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
                                : "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                            }`}
                        >
                            {p.estado}
                        </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                        <a
                            href="#"
                            className="text-primary hover:text-primary/80"
                        >
                            Ver Detalles
                        </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </main>
        </div>
    );
    }
