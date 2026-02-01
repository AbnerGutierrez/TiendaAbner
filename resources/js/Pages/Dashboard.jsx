import MainProducto from "@/Components/Sections/MainProducto";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react"; // Importamos router
import { useEffect } from "react"; // Importamos useEffect

export default function Dashboard() {
    useEffect(() => {
        const intentoCompra = localStorage.getItem("checkout_intent");

        if (intentoCompra) {
        
            const datos = JSON.parse(intentoCompra);
            console.log(datos);
            router.get("/host/mainProduct/checkout", datos);

            localStorage.removeItem("checkout_intent");
        }
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard usuario logeado
                </h2>
            }
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <MainProducto />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
