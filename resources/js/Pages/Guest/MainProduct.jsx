import { useState } from "react";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import Modal from "@/Components/Modal";
import CompraModal from "@/Components/CompraModal";
export default function MainProduct({ product }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <GuestBuyLayout>
            <div className="w-full">
                {/* ================= HERO ================= */}
                <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Imagen */}
                    <div className="flex justify-center">
                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="max-w-sm"
                        />
                    </div>
                    {/* Texto */}
                    <div className="space-y-6 px-4">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            LENTES RAIBAN <br /> RUNNING GOLD
                        </h1>

                        <p className="text-gray-600 max-w-md">
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

                        <CompraModal
                            product={product}
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                        />
                    </div>
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
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className=""
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
