import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function DashboardAdmin({ orders }) {
    return (
        <AuthenticatedAdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard de admin
                </h2>
            }
        >
            <Head title="Inicio" />

            <div className="p-6">
                <div className="overflow-x-auto bg-white shadow rounded">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                    Total
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                    Estado
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                    Fecha
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {orders.data.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-4 text-center text-gray-500"
                                    >
                                        No hay órdenes registradas
                                    </td>
                                </tr>
                            )}

                            {orders.data.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4">{order.id}</td>
                                    <td className="px-6 py-4">
                                        ${Number(order.amount).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded text-xs
                                            ${
                                                order.status === "paid"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(
                                            order.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <Link className="text-blue-600 hover:underline">
                                                Ver
                                            </Link>
                                            <Link className="text-indigo-600 hover:underline">
                                                Editar
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* PAGINACIÓN */}
                <div className="mt-6 flex justify-center gap-1">
                    {orders.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url ?? "#"}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-3 py-1 rounded text-sm
                                ${
                                    link.active
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border text-gray-700 hover:bg-gray-100"
                                }
                                ${!link.url && "opacity-50 cursor-not-allowed"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedAdminLayout>
    );
}
