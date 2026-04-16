import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import DefaultDiscountBar from "@/Components/defaultProductComponents/DefaultDiscountBar";
import logo from "../../../public/images/LogoHorizontal.png";

export default function GuestBuyNavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <DefaultDiscountBar />
            <nav className="sticky top-0 bg-white shadow p-4 left-0 w-full z-20 ">
                <div className=" container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="h-7 w-auto" />
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
                            <Link
                                href="/politica_privacidad"
                                className="hover:text-black"
                            >
                                Politicas de privacidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/ventas_reembolsos"
                                className="hover:text-black"
                            >
                                Ventas y reembolsos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/aviso_legal"
                                className="hover:text-black"
                            >
                                Aviso legal
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/rastrear_pedido"
                                className="hover:text-black"
                            >
                                Rastrear pedido
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/soporte"
                                className="hover:text-black"
                            >
                                Soporte técnico
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* MENU MOBILE ANIMADO */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col gap-3 text-gray-700 mx px-4 pb-4 pt-4">
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
                                href="/politica_privacidad"
                                className="block py-2 border-b"
                                onClick={() => setOpen(false)}
                            >
                                Politicas de privacidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/ventas_reembolsos"
                                className="block py-2 border-b"
                                onClick={() => setOpen(false)}
                            >
                                Ventas y reembolsos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/aviso_legal"
                                className="block py-2 border-b"
                                onClick={() => setOpen(false)}
                            >
                                Aviso legal
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/rastrear_pedido"
                                className="block py-2 border-b"
                                onClick={() => setOpen(false)}
                            >
                                Rastrear pedido
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/soporte"
                                className="block py-2 border-b"
                                onClick={() => setOpen(false)}
                            >
                                Soporte técnico
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
