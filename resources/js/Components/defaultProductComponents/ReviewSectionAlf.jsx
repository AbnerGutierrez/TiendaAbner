import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function ReviewsSectionAlf() {
    const reviews = [
        {
            name: "Daniel M.",
            comment:
                "El sonido me sorprendió muchísimo para su tamaño. Perfecto para practicar en casa o llevarlo de viaje.",
            rating: 5,
        },
        {
            name: "Carlos R.",
            comment:
                "Muy ligero y fácil de transportar. Lo llevo en mi mochila junto con la guitarra sin problema.",
            rating: 5,
        },
        {
            name: "Andrea L.",
            comment:
                "La batería dura bastante y el audio es muy limpio. Excelente mini amplificador portátil.",
            rating: 5,
        },
        {
            name: "Luis T.",
            comment:
                "Ideal para practicar en cualquier lugar. Tiene muy buena potencia para ser tan compacto.",
            rating: 4,
        },
        {
            name: "Fernanda P.",
            comment:
                "Me encantó el diseño y la calidad de materiales. Se siente resistente y bien construido.",
            rating: 5,
        },
        {
            name: "Jorge C.",
            comment:
                "Lo uso todos los días para ensayar y funciona excelente. Súper recomendado para guitarristas.",
            rating: 5,
        },
        {
            name: "Sofía G.",
            comment:
                "Muy práctico y fácil de usar. Solo conecté mi guitarra y empezó a sonar increíble.",
            rating: 4,
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-semibold mb-10">
                    Opiniones de nuestros clientes
                </h2>

                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm"
                >
                    {/* Inicial del cliente */}
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                            {reviews[current].name.charAt(0)}
                        </div>
                    </div>

                    {/* Calificación en estrellas */}
                    <div className="flex justify-center mb-3">
                        {[...Array(reviews[current].rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    {/* Comentario del cliente */}
                    <p className="text-sm text-gray-700 mb-4">
                        "{reviews[current].comment}"
                    </p>

                    {/* Nombre del cliente */}
                    <p className="text-sm font-medium text-gray-900">
                        {reviews[current].name}
                    </p>
                </motion.div>

                {/* Indicadores de navegación */}
                <div className="flex justify-center mt-6 gap-2">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition ${
                                current === index
                                    ? "bg-gray-800"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
