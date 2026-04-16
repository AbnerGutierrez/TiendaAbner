import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faRecycle,
    faEarthAmericas,
    faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function Sustentable() {
    const items = [
        {
            title: "Amigable con el planeta",
            description:
                "Elaboradas con materiales naturales que reducen el uso de plástico.",
            icon: faLeaf,
        },
        {
            title: "Reutilizable",
            description:
                "Puedes usarlas múltiples veces, ayudando a disminuir residuos en casa.",
            icon: faRecycle,
        },
        {
            title: "Sustentable",
            description:
                "Una alternativa ecológica que contribuye al cuidado del medio ambiente.",
            icon: faEarthAmericas,
        },
        {
            title: "Versátil y adaptable",
            description:
                "Ideales para cubrir frutas, verduras o recipientes de distintos tamaños.",
            icon: faBoxOpen,
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
                                className="text-2xl text-green-600 mb-3"
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
