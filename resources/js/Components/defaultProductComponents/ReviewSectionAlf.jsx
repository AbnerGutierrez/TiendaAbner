import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function ReviewsSectionAlf() {
    const reviews = [
        {
            name: "María G.",
            comment:
                "Me encantó, absorbe el agua súper rápido y mantiene mi baño siempre seco.",
            rating: 5,
        },
        {
            name: "Carlos R.",
            comment:
                "Muy buena calidad y no se desliza. Perfecta para salir de la ducha.",
            rating: 4,
        },
        {
            name: "Ana L.",
            comment:
                "El diseño está hermoso y además seca en segundos. La recomiendo mucho.",
            rating: 5,
        },
        {
            name: "Luis M.",
            comment: "Es muy práctica, no guarda humedad ni malos olores.",
            rating: 5,
        },
        {
            name: "Sofía P.",
            comment: "Me sorprendió lo rápido que seca, es súper cómoda.",
            rating: 5,
        },
        {
            name: "Jorge T.",
            comment: "Antideslizante y absorbente, justo lo que necesitaba.",
            rating: 4,
        },
        {
            name: "Laura C.",
            comment: "Buen producto, fácil de limpiar y muy bonita.",
            rating: 5,
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
