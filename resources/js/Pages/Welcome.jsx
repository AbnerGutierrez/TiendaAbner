import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import WelcomeS from "@/Components/Sections/WelcomeS";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <AppLayout>
                <h1 className="text-2xl font-bold">Welcome</h1>
                <WelcomeS/>
            </AppLayout>
        </>
    );
}
