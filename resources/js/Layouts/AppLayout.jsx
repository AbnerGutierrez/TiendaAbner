import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import NavBar from "./NavBar";
import FooterLayout from "./FooterLayout";
export default function AppLayout({ children }) {



    return (
        <div className="min-h-screen flex flex-col">
            {/* NAVBAR */}
            <NavBar/>

            {/* CONTENIDO DE LA PÁGINA */}
            <main className="flex-1 container mx-auto p-6">{children}</main>
            <FooterLayout/>
            
        </div>
    );
}
