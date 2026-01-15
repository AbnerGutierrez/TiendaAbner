import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { motion } from "framer-motion";
import { Star, Check, ShoppingCart } from "lucide-react";

export default function LandingProduct({ product, features, advantages }) {
    return (
        <AuthenticatedAdminLayout>
            <div className="bg-gray-50 text-gray-800">
                {/* HERO / PRODUCTO */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {product.title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            {product.description}
                        </p>
                        <p className="text-3xl font-semibold mb-6">
                            ${product.price}{" "}
                            <span className="text-base text-gray-500">MXN</span>
                        </p>
                        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
                            <ShoppingCart size={18} /> Comprar ahora
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src={product.image_url}
                            alt="Producto"
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>
                </section>

                {/* CARACTERÍSTICAS */}
                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Características
                        </h2>

                        <div className="relative overflow-hidden rounded-2xl">
                            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth">
                                {features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="min-w-full h-[350px] relative snap-start rounded-2xl overflow-hidden shadow-lg"
                                    >
                                        {feature.image_url && (
                                            <img
                                                src={feature.image_url}
                                                alt={feature.text}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}

                                        <div className="absolute inset-0 bg-black/50" />

                                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
                                            <h3 className="text-3xl font-bold mb-3">
                                                {feature.text}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                Desliza para ver más características
                            </p>
                        </div>
                    </div>
                </section>

                {/* VENTAJAS */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                        <img
                            src={product.image_url}
                            alt="Ventajas"
                            className="rounded-2xl shadow-lg"
                        />

                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                ¿Por qué elegirlo?
                            </h2>

                            <ul className="space-y-4 text-gray-600">
                                {advantages.map((adv, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2"
                                    >
                                        <Check
                                            className="text-green-500"
                                            size={18}
                                        />
                                        {adv.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* RESEÑAS */}
                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Reseñas de clientes
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((r) => (
                                <div
                                    key={r}
                                    className="p-6 rounded-2xl shadow-sm bg-gray-50"
                                >
                                    <div className="flex gap-1 mb-3">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star
                                                key={s}
                                                size={16}
                                                className="text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        "Excelente producto, superó mis
                                        expectativas y la batería dura
                                        bastante."
                                    </p>
                                    <p className="font-semibold">
                                        – Usuario satisfecho
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-20 bg-black text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Empieza a mejorar tu día hoy
                    </h2>
                    <p className="mb-6 text-gray-300">
                        Consigue el SmartWatch Pro X ahora mismo
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-2xl font-medium hover:bg-gray-200 transition">
                        Comprar ahora
                    </button>
                </section>
            </div>
        </AuthenticatedAdminLayout>
    );
}
