import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FooterLayout from "./FooterLayout";

export default function AppLayout({ children }) {
    const { url } = usePage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [url]);

    return (
        <div className="min-h-screen flex flex-col">
            {/* NAVBAR */}
            <NavBar />
            {/* CONTENIDO DE LA PÁGINA */}
            <main className="flex-1 container mx-auto  mt-12">{children}</main>
            <FooterLayout />
        </div>
    );
}
