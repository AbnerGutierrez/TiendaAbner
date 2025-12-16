import MainProducto from '@/Components/Sections/MainProducto';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AuthenticatedAdminLayout from '@/Layouts/AuthenticatedAdminLayout';
export default function DashboardAdmin() {
    return (
        <AuthenticatedAdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard de admin
                </h2>
            }
        >
            <Head title="Inicio" />

            loading

        </AuthenticatedAdminLayout>
    );
}
