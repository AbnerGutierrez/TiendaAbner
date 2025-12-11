import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import MainProducto from "@/Components/Sections/MainProducto";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <AppLayout>
                <h1 className="text-2xl font-bold">Welcome</h1>
                <MainProducto/>
            </AppLayout>
        </>
    );
}
