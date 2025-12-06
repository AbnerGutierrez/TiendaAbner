import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import HeroSection from "@/Components/Sections/HeroSection";
import InfoSection from "@/Components/Sections/InfoSection";
import PrecioSection from "@/Components/Sections/PrecioSection";
import ClienteSection from "@/Components/Sections/ClienteSection";
import TestimonioSection from "@/Components/Sections/TestimonioSection";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <>
            <Head title="Inicio" />
            <nav className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <div className="text-xl font-semibold tracking-wide">
                        DesWeb
                    </div>

                    {/* Botón móvil */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Links */}
                    <div className="hidden md:flex gap-6 text-gray-700 font-medium">
                        <a
                            href="#loQueHacemos"
                            className="hover:text-gray-500 transition"
                        >
                            Lo que hacemos
                        </a>
                        <a
                            href="#quienSomos"
                            className="hover:text-gray-500 transition"
                        >
                            Quienes somos
                        </a>
                        <a
                            href="#clientes"
                            className="hover:text-gray-500 transition"
                        >
                            Nuestros clientes
                        </a>
                        <a
                            href="#costosYplanes"
                            className="hover:text-gray-500 transition"
                        >
                            Costos y planes
                        </a>
                        <Link
                            href={route("login")}
                            className="hover:text-gray-500 transition"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            href={route("login")}
                            className="hover:text-gray-500 transition"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>

                {/* Menú desplegable móvil */}
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } md:hidden px-4 pb-4 space-y-2`}
                >
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Lo que hacemos
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Costos y planes
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Registrarse
                    </Link>
                </div>
            </nav>
            <main>
                <HeroSection />
                <InfoSection
                baColor={true}
                    id={"loQueHacemos"}
                    imagen={
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    }
                    titulo={"Mejora tu productividad y toma de decisiones"}
                    descripcion={`Ofrecemos soluciones a los desafíos más comunes de tu
                    negocio. Centraliza toda la información que necesitas para
                    gestionar y administrar tus operaciones.`}
                    reverse={false}
                />
                <InfoSection
                   baColor={false}
                    imagen={
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    }
                    titulo={"Mejora la experiencia de tus clientes"}
                    descripcion={`No solo tú obtienes beneficios: tus clientes
                                también disfrutan de una experiencia más ágil,
                                con la información y las herramientas necesarias
                                para realizar sus consultas y acciones de manera
                                rápida y sencilla.`}
                    reverse={true}
                />
                <InfoSection
                   baColor={true}
                    id={"quienSomos"}
                    imagen={
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    }
                    titulo={"¿ Quines somos ?"}
                    descripcion={`Somos una empresa enfocada en ofrecer soluciones
                                reales a las necesidades de tu negocio. Creamos
                                aplicaciones personalizadas que te permiten
                                gestionar de manera eficiente cualquier
                                actividad que necesites.`}
                    reverse={false}
                />
                <ClienteSection
                    clientes={[
                        {
                            nombre: "Empresa 1",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 2",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 3",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 4",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 5",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 6",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 7",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                        {
                            nombre: "Empresa 8",
                            logo: "https://img.freepik.com/vector-premium/ilustracion-concepto-empresa_114360-2581.jpg",
                        },
                    ]}
                />
                <TestimonioSection
                    testimonios={[
                        {
                            nombre: "María López",
                            rol: "Dueña de boutique",
                            foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                            estrellas: 5,
                            testimonio:
                                "Webzico transformó por completo la manera en que mis clientes encuentran mi negocio. Profesionales y muy atentos.",
                        },
                        {
                            nombre: "Carlos Hernández",
                            rol: "Emprendedor",
                            foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                            estrellas: 5,
                            testimonio:
                                "Mi landing quedó increíble, moderna y rápida. El mejor servicio que he probado.",
                        },
                        {
                            nombre: "Ana Torres",
                            rol: "Freelancer",
                            foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                            estrellas: 4,
                            testimonio:
                                "Excelente trato y comunicación. Me ayudaron a crear mi primera página web sin complicaciones.",
                        },
                    ]}
                />
                <PrecioSection />
            </main>
            <footer className="bg-indigo-600 text-white py-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold">DesWeb</h2>
                        <p className="mt-3 text-sm text-indigo-100">
                            Simplificamos tus procesos con soluciones digitales
                            modernas y profesionales para impulsar el
                            crecimiento de tu empresa.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Navegación</h3>
                        <ul className="space-y-2 text-indigo-100">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Síguenos</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white text-xl">
                                📘
                            </a>
                            <a href="#" className="hover:text-white text-xl">
                                📸
                            </a>
                            <a href="#" className="hover:text-white text-xl">
                                🎵
                            </a>
                            <a href="#" className="hover:text-white text-xl">
                                🐦
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-indigo-200 text-sm mt-10 border-t border-indigo-500 pt-6">
                    © 2025 DesWeb. Todos los derechos reservados.
                </div>
            </footer>
        </>
    );
}
