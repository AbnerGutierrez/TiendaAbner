import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDroplet,
    faWind,
    faShieldHalved,
    faPalette,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function Sustentable2() {
    const items = [
        {
            title: "Alta absorción",
            description:
                "Absorbe el agua en segundos, manteniendo el piso seco y limpio.",
            icon: faDroplet,
        },
        {
            title: "Secado rápido",
            description:
                "Gracias a sus materiales técnicos, se seca rápidamente sin acumular humedad.",
            icon: faWind,
        },
        {
            title: "Antideslizante",
            description:
                "Base diseñada para evitar deslizamientos y brindar mayor seguridad.",
            icon: faShieldHalved,
        },
        {
            title: "Diseños únicos",
            description:
                "Estampados modernos y coloridos que decoran y dan vida a tu espacio.",
            icon: faPalette,
        },
    ];

    return (
        <section className="">
            <div className="max-w-xl mx-auto px-6">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center py-8 border-b last:border-b-0"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-2xl text-blue-600 mb-3"
                            />
                        </motion.div>

                        <p className="text-sm font-medium text-gray-800">
                            {item.title}
                        </p>

                        <p className="text-sm text-gray-700">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
