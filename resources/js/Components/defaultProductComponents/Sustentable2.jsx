import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVolumeHigh,
    faGuitar,
    faShield,
    faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function Sustentable2() {
    const items = [
        {
            title: "Sonido Potente",
            description:
                "Disfruta un audio claro y con gran potencia a pesar de su tamaño compacto.",
            icon: faVolumeHigh,
        },
        {
            title: "Portátil y Ligero",
            description:
                "Llévalo fácilmente a cualquier lugar gracias a su diseño compacto y práctico.",
            icon: faGuitar,
        },
        {
            title: "Material Resistente",
            description:
                "Fabricado con materiales duraderos para acompañarte en cada ensayo o presentación.",
            icon: faShield,
        },
        {
            title: "Diseño Moderno",
            description:
                "Acabado elegante y minimalista que combina perfectamente con cualquier setup musical.",
            icon: faCompactDisc,
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
