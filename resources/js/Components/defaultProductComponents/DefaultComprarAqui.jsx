import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
    faRotateLeft,
    faShieldHalved,
    faBoxTissue,
} from "@fortawesome/free-solid-svg-icons";

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
            description: "Devuelve tu producto dentro de los primeros 30 días.",
            icon: faRotateLeft,
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-xl mx-auto px-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center py-8 border-b last:border-b-0"
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            className="text-2xl text-gray-700 mb-3"
                        />

                        <p className="text-sm font-medium text-gray-800">
                            {item.title}
                        </p>

                        <p className="text-sm text-gray-700 hover:underline cursor-pointer">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
