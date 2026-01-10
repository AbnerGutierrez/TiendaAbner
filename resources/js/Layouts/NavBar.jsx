import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow p-4 fixed top-0 left-0 w-full z-20">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="font-bold text-xl">Mi Navegador</h1>

                {/* BOTÓN MOBILE */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            // ICONO X
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            // ICONO HAMBURGUESA
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* MENU DESKTOP */}
                <ul className="hidden md:flex gap-6 text-gray-700">
                    <li>
                        <Link href="/" className="hover:text-black">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link  href={route("products.showlist")} className="hover:text-black">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link href="/register" className="hover:text-black">
                            Registrarme
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="hover:text-black">
                            Iniciar sesión
                        </Link>
                    </li>
                </ul>
            </div>

            {/* MENU MOBILE ANIMADO */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-3 text-gray-700 px-4 pb-4">
                    <li>
                        <Link
                            href="/"
                            className="block py-2 border-b"
                            onClick={() => setOpen(false)}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                           href={route("products.showlist")}
                            className="block py-2 border-b"
                            onClick={() => setOpen(false)}
                        >
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/register"
                            className="block py-2 border-b"
                            onClick={() => setOpen(false)}
                        >
                            Registrarme
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="block py-2 border-b"
                            onClick={() => setOpen(false)}
                        >
                            Iniciar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
