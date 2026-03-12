import { useState } from "react";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import Modal from "@/Components/Modal";
import CompraModal from "@/Components/CompraModal";
import "@google/model-viewer";
import { motion } from "framer-motion";
export default function MainProduct({ product }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <GuestBuyLayout>
            <div className="w-full">
                {/* ================= HERO ================= */}
                <section className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16">
                    <div className="flex flex-col items-center text-center">
                        {/* TEXTO: Centrado y con aire */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.2 },
                                },
                            }}
                            className="z-10 mb-12"
                        >
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-none"
                            >
                                RAIBAN <br />
                                <span className="text-gray-400 font-medium">
                                    RUNNING{" "}
                                </span>
                                {/* Contenedor relativo para la palabra GOLD */}
                                <span className="relative inline-block font-bold">
                                    {/* CAPA BASE (Gris inicial, siempre visible) */}
                                    <span className="text-gray-400">GOLD</span>

                                    {/* CAPA DORADA (Se revela de abajo hacia arriba) */}
                                    <motion.span
                                        initial={{
                                            // Estado inicial: Totalmente invisible (recortado desde abajo)
                                            opacity: 0,
                                            backgroundImage:
                                                "linear-gradient(180deg, #bf953f 0%, #fcf6ba 50%, #aa771c 100%)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            // clip-path: inset(arriba derecha abajo izquierda)
                                            clipPath: "inset(100% 0% 0% 0%)", // El recorte cubre el 100% desde arriba
                                        }}
                                        animate={{
                                            // Animación: El recorte desaparece, revelando el color
                                            opacity: 1,
                                            clipPath: "inset(0% 0% 0% 0%)", // El recorte se reduce al 0%
                                        }}
                                        transition={{
                                            delay: 1.5, // TU RETRASO DE 1.5 SEGUNDOS
                                            duration: 5, // Duración del "llenado"
                                            ease: [0.22, 1, 0.36, 1], // Suavizado estilo Apple
                                        }}
                                        className="absolute inset-0 z-10" // Se superpone perfectamente sobre la base gris
                                    >
                                        GOLD
                                    </motion.span>
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                                className="mt-6 text-gray-500 font-medium tracking-wide uppercase text-xs"
                            >
                                La ligereza del oro, la fuerza del running.
                            </motion.p>
                        </motion.div>

                        {/* IMAGEN: El héroe central */}
                        {/* IMAGEN SUSTITUIDA POR MODELO 3D */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative w-full max-w-2xl mb-8"
                        >
                            {/* Resplandor sutil de fondo para resaltar el cristal de los lentes */}
                            <div className="absolute inset-0 bg-radial-gradient from-gray-200/50 to-transparent opacity-30 blur-3xl -z-10" />

                            <model-viewer
                                src="/models/transparent_glasses_with_baked_textures.glb"
                                alt="Modelo 3D Lentes Raiban"
                                auto-rotate
                                rotation-per-second="20deg" // Rotación más lenta y elegante
                                camera-controls
                                disable-zoom={true} // Evita que el usuario haga zoom por accidente al hacer scroll
                                shadow-intensity="1"
                                exposure="1.2" // Un poco más de luz para que brille el dorado
                                environment-image="neutral"
                                aria-label="Lentes Raiban Running Gold 3D"
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    backgroundColor: "transparent",
                                    outline: "none", // Quita el borde azul al hacer clic
                                }}
                            >
                                {/* Slot de carga opcional mientras el modelo aparece */}
                                <div
                                    slot="poster"
                                    className="w-full h-full flex items-center justify-center text-gray-300"
                                >
                                    Cargando experiencia 3D...
                                </div>
                            </model-viewer>
                        </motion.div>

                        {/* BOTÓN Y PRECIO: Limpio y directo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <button
                                onClick={() => setOpenModal(true)}
                                className="group relative overflow-hidden bg-black text-white px-10 py-4 rounded-full text-sm font-medium tracking-widest transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">
                                    COMPRAR POR ${product.price}
                                </span>
                                {/* Efecto de brillo al pasar el mouse */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>

                            <span className="text-xs text-gray-400 font-light">
                                Envío gratuito a todo el país
                            </span>
                        </motion.div>
                    </div>

                    <CompraModal
                        product={product}
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                </section>

                {/* ================= FEATURE DESTACADA ================= */}
                <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Imagen lifestyle */}
                        <div className="flex justify-center">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className="max-w-sm"
                            />
                        </div>

                        {/* Texto */}
                        <div className="text-center md:text-left space-y-5">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                Protección total frente al sol
                            </h2>

                            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                Diseñados para reducir reflejos y proteger tus
                                ojos incluso en condiciones de luz intensa, sin
                                comprometer comodidad ni estilo.
                            </p>

                            {/* Micro detalle de marca */}
                            <p className="text-xs uppercase tracking-widest text-gray-400">
                                Claridad · Confort · Rendimiento
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= BENEFICIOS ================= */}
                <section className="bg-gray-100 py-24">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                        <div className="space-y-4">
                            <h3 className="font-semibold">Material premium</h3>
                            <p className="text-gray-600 text-sm">
                                Diseñados con materiales de alta calidad para
                                mayor comodidad y rendimiento.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className="max-w-sm"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Durabilidad</h3>
                            <p className="text-gray-600 text-sm">
                                Pensados para resistir el uso diario y
                                actividades intensas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Ligeros</h3>
                            <p className="text-gray-600 text-sm">
                                Comodidad total sin sensación de peso.
                            </p>
                        </div>

                        <div />

                        <div className="space-y-4">
                            <h3 className="font-semibold">Fácil de llevar</h3>
                            <p className="text-gray-600 text-sm">
                                Diseño práctico para cualquier situación.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= QUÉ HAY EN LA CAJA ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-12">
                    <h2 className="text-2xl font-semibold">
                        ¿Qué hay en la caja?
                    </h2>

                    <div className="grid grid-cols-1 md:flex md:justify-center md:gap-4 gap-12">
                        <div className="space-y-4">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className=""
                            />
                            <p className="text-sm uppercase tracking-wide">
                                Lentes Running Gold
                            </p>
                        </div>

                        <div className="space-y-4">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className=""
                            />
                            <p className="text-sm uppercase tracking-wide">
                                Funda protectora
                            </p>
                        </div>

                        <div className="space-y-4">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className=""
                            />
                            <p className="text-sm uppercase tracking-wide">
                                Kit de limpieza
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= SEGUNDO BLOQUE COMPRA ================= */}
                <section className="bg-gray-100 py-24">
                    <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <model-viewer
                                src="/models/transparent_glasses_with_baked_textures.glb"
                                alt="Modelo 3D"
                                auto-rotate
                                camera-controls
                                shadow-intensity="1"
                                exposure="1"
                                environment-image="neutral"
                                style={{ width: "100%", height: "500px" }}
                            />
                        </div>

                        <div className="space-y-6 px-4">
                            <h2 className="text-3xl font-bold">
                                LENTES RAIBAN <br /> RUNNING GOLD
                            </h2>

                            <p className="text-gray-600">
                                Lentes de la mejor calidad y a un precio
                                espectacular.
                            </p>

                            <p className="text-2xl font-semibold">
                                ${product.price}
                            </p>

                            <button
                                onClick={() => setOpenModal(true)}
                                className="mt-4 px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
                            >
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= CONFIANZA ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-12">
                    <h3 className="text-xl font-semibold">
                        Tu compra está protegida
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-2">
                            <p className="font-medium">Pagos seguros</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium">Devolución fácil</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium">30 días de garantía</p>
                        </div>
                    </div>
                </section>

                {/* ================= OPINIONES ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24">
                    <h3 className="text-xl font-semibold text-center mb-10">
                        Opiniones
                    </h3>

                    <div className="border h-40 flex items-center justify-center text-gray-400">
                        Aquí van los testimonios
                    </div>
                </section>
            </div>
        </GuestBuyLayout>
    );
}
