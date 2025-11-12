import React from "react";

export default function PanelAdmin() {
    const actividades = [
        {
        fecha: "2024-07-26",
        tipo: "Venta",
        descripcion: "Propiedad vendida en el centro",
        usuario: "Carlos",
        color: "blue",
        },
        {
        fecha: "2024-07-25",
        tipo: "Agente",
        descripcion: "Nuevo agente registrado",
        usuario: "Admin",
        color: "purple",
        },
        {
        fecha: "2024-07-24",
        tipo: "Propiedad",
        descripcion: "Nueva propiedad añadida",
        usuario: "Admin",
        color: "green",
        },
        {
        fecha: "2024-07-23",
        tipo: "Contrato",
        descripcion: "Contrato de alquiler actualizado",
        usuario: "Ana",
        color: "yellow",
        },
        {
        fecha: "2024-07-22",
        tipo: "Comisión",
        descripcion: "Comisión pagada",
        usuario: "Admin",
        color: "red",
        },
    ];

    return (
        <div className="flex h-screen bg-background-light dark:bg-background-dark font-display">
        {/* ASIDE */}
        <aside className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Re/Max</h1>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg"
            >
                🏠 Panel de control
            </a>
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                🏢 Propiedades
            </a>
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                👥 Agentes
            </a>
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                💰 Ventas
            </a>
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                📄 Contratos
            </a>
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                💼 Comisiones
            </a>
            </nav>

            <div className="px-4 py-4 mt-auto border-t border-gray-200 dark:border-gray-800">
            <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-lg"
            >
                ⚙️ Configuración
            </a>
            </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Panel de control
            </h1>

            {/* STATS */}
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Propiedades totales
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">120</p>
                <p className="mt-2 text-sm font-medium text-green-600">+10%</p>
            </div>
            <div className="p-6 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Agentes activos
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">25</p>
                <p className="mt-2 text-sm font-medium text-green-600">+5%</p>
            </div>
            <div className="p-6 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Ventas del mes
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$50,000</p>
                <p className="mt-2 text-sm font-medium text-green-600">+15%</p>
            </div>
            <div className="p-6 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Comisiones ganadas
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$5,000</p>
                <p className="mt-2 text-sm font-medium text-green-600">+8%</p>
            </div>
            </div>

            {/* ACTIVIDAD RECIENTE */}
            <h2 className="mt-8 text-2xl font-bold text-gray-800 dark:text-white">
            Actividad reciente
            </h2>
            <div className="mt-4 overflow-hidden border border-gray-200 dark:border-gray-800 rounded-xl">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                    <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                    Fecha
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                    Tipo
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                    Descripción
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                    Usuario
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-background-dark divide-y divide-gray-200 dark:divide-gray-800">
                {actividades.map((item, i) => (
                    <tr key={i}>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {item.fecha}
                    </td>
                    <td className="px-6 py-4">
                        <span
                        className={`inline-flex px-2 text-xs font-semibold leading-5 text-${item.color}-800 bg-${item.color}-100 rounded-full dark:bg-${item.color}-900/50 dark:text-${item.color}-300`}
                        >
                        {item.tipo}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {item.descripcion}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {item.usuario}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </main>
        </div>
    );
    }
