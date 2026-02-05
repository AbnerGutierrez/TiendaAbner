import OrdersTable from "@/Components/Admin/OrdersTable";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { Head } from "@inertiajs/react";

export default function DashboardAdmin({ orders, ordersClients }) {
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
                <OrdersTable
                    title="Órdenes del sistema"
                    orders={orders}
                />

                <OrdersTable
                    title="Órdenes de clientes (host)"
                    orders={ordersClients}
                />
            </div>
        </AuthenticatedAdminLayout>
    );
}
