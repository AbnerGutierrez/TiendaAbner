import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
export default function WelcomeS() {
    const services = [
        {
            title: "Envíos Rápidos",
            desc: "Recibe tus productos en tiempo récord con paqueterías confiables.",
            icon: "🚀",
        },
        {
            title: "Precios Accesibles",
            desc: "Ofrecemos las mejores ofertas y descuentos en toda la tienda.",
            icon: "💸",
        },
        {
            title: "Compras Seguras",
            desc: "Tu información y pagos están protegidos con tecnología de última generación.",
            icon: "🔒",
        },
        {
            title: "Reembolsos Fáciles",
            desc: "Si algo no te convence, realizamos devoluciones rápidas y sin complicaciones.",
            icon: "🔁",
        },
    ];

    return (
        <div
            className="
        relative w-full min-h-screen
        flex items-center justify-center
        py-16 px-4
        bg-[url('/images/banner1.jpg')]
        bg-cover bg-center bg-no-repeat
      "
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-5xl w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                >
                    Servicios que Mejoran tu Experiencia
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"
                >
                    En nuestra tienda online queremos ofrecerte la mejor
                    experiencia posible: segura, rápida y accesible.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="
                bg-white/90 backdrop-blur
                shadow-lg rounded-2xl
                p-6 flex flex-col items-center
                hover:shadow-2xl transition-all
              "
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <Link
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-white/90 backdrop-blur text-gray-800 hover:bg-white/70 font-bold py-3 px-8 rounded-xl mx-auto flex justify-center items-center gap-2 md:w-1/4"
                    href={route("products.showlist")}
                >
                    <div className="text-xl">🛒</div> Todos los productos
                </Link>{" "}
            </div>
        </div>
    );
}
