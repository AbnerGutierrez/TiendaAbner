import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
    faRotateLeft,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function DefaultComprarAqui() {
    const items = [
        {
            title: "Envío gratis",
            description: "En todos los pedidos sin costo adicional.",
            icon: faTruck,
        },
        {
            title: "Compra segura",
            description: "Tus pagos están protegidos y encriptados.",
            icon: faShieldHalved,
        },
        {
            title: "Garantía incluida",
            description:
                "Devuelve tu producto dentro de los primeros 30 días. (Productos participantes)",
            icon: faRotateLeft,
        },
    ];

    return (
        <section className="py-16">
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
                                className="text-2xl text-gray-700 mb-3"
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
