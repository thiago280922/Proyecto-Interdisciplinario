import React from 'react';

// Datos simulados para los agentes. En una app real, vendrían de la base de datos (Firestore).
const agentesData = [
    { id: 1, nombre: 'Ana Gómez', email: 'ana.gomez@remax.com', telefono: '555-1001', especialidad: 'Residencial', estado: 'Activo' },
    { id: 2, nombre: 'Javier Solís', email: 'javier.solis@remax.com', telefono: '555-1002', especialidad: 'Comercial', estado: 'Inactivo' },
    { id: 3, nombre: 'Luisa Castro', email: 'luisa.castro@remax.com', telefono: '555-1003', especialidad: 'Lujo', estado: 'Activo' },
    { id: 4, nombre: 'Pedro Díaz', email: 'pedro.diaz@remax.com', telefono: '555-1004', especialidad: 'Alquileres', estado: 'Activo' },
];

const getStatusColor = (estado) => {
    switch (estado) {
        case 'Activo':
            return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
        case 'Inactivo':
            return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
};

export default function AgentesAdmin() {
    return (
        <div className="p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Gestión de Agentes
                </h1>
                <button
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-primary/90 transition duration-150"
                    onClick={() => console.log('Crear nuevo agente')}
                >
                    + Nuevo Agente
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                Especialidad
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                        {agentesData.map((agente) => (
                            <tr key={agente.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-100">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{agente.nombre}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 lg:hidden">{agente.especialidad}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{agente.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{agente.especialidad}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(agente.estado)}`}
                                    >
                                        {agente.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        className="text-primary hover:text-primary/70 dark:text-primary-light dark:hover:text-primary-light/70 mr-3"
                                        onClick={() => console.log('Editar agente:', agente.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                        onClick={() => console.log('Eliminar agente:', agente.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}