import React from 'react';

// Datos simulados para las propiedades
const propiedadesData = [
    { id: 101, titulo: 'Casa moderna con jardín', precio: 250000, tipo: 'Venta', estado: 'Publicado', agente: 'Ana G.' },
    { id: 102, titulo: 'Apartamento céntrico, 2 hab.', precio: 1200, tipo: 'Alquiler', estado: 'Pendiente', agente: 'Javier S.' },
    { id: 103, titulo: 'Lote comercial en esquina', precio: 500000, tipo: 'Venta', estado: 'Publicado', agente: 'Luisa C.' },
    { id: 104, titulo: 'Casa de lujo con piscina', precio: 850000, tipo: 'Venta', estado: 'Vendido', agente: 'Luisa C.' },
];

const getStatusColor = (estado) => {
    switch (estado) {
        case 'Publicado':
            return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
        case 'Pendiente':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
        case 'Vendido':
            return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
};

export default function PropiedadesAdmin() {
    return (
        <div className="p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Gestión de Propiedades
                </h1>
                <button
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-primary/90 transition duration-150"
                    onClick={() => console.log('Crear nueva propiedad')}
                >
                    + Nueva Propiedad
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Título / Precio
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                Tipo
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                Agente
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
                        {propiedadesData.map((prop) => (
                            <tr key={prop.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-100">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{prop.titulo}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {prop.tipo === 'Venta' ? `$${prop.precio.toLocaleString()}` : `$${prop.precio.toLocaleString()}/mes`}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{prop.tipo}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{prop.agente}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(prop.estado)}`}
                                    >
                                        {prop.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        className="text-primary hover:text-primary/70 dark:text-primary-light dark:hover:text-primary-light/70 mr-3"
                                        onClick={() => console.log('Editar propiedad:', prop.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                        onClick={() => console.log('Eliminar propiedad:', prop.id)}
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