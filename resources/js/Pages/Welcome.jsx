import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import WelcomeS from "@/Components/Sections/WelcomeS";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <AppLayout>
                <WelcomeS/>
            </AppLayout>
        </>
    );
}
