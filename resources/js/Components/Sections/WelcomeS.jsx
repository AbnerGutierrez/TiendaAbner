import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import DefaultComprarAqui from "../defaultProductComponents/DefaultComprarAqui";
import { router } from "@inertiajs/react";
export default function WelcomeS({ productos }) {
    return (
        <>
            {/* HERO */}
            <section className="relative w-full min-h-screen flex items-center justify- py-16 px-4 bg-[url('/images/herobeb.jpg')] bg-contain md:bg-center ">
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-5xl text-center text-white mx-auto ">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Tu Tienda Online de Confianza
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-lg text-gray-200 mb-10"
                    >
                        Descubre productos de calidad con envío rápido y pago
                        seguro.
                    </motion.p>

                  
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto grid  gap-8 text-center ">
                    <DefaultComprarAqui />
                </div>
            </section>

    
        </>
    );
}
