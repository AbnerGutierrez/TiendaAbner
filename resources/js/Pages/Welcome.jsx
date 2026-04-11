import { Head, Link, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import WelcomeS from "@/Components/Sections/WelcomeS";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    productos,
}) {
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;
    return (
        <>
            <Layout user={auth.user}>
                <WelcomeS productos={productos} />
            </Layout>
        </>
    );
}
