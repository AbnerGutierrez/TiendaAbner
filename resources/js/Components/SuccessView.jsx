import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function SuccessView({ product, finalPrice }) {
    const { url } = usePage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [url]);

    if (!product) {
        return (
            <div className="max-w-xl mx-auto py-20 text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✅</span>
                </div>

                <h1 className="text-2xl font-bold">¡Compra completada!</h1>
                <p className="text-gray-600 mt-2">
                    Tu pago fue procesado correctamente.
                </p>

                <a
                    href="/dashboard"
                    className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl font-medium"
                >
                    Volver a la tienda
                </a>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-20 px-4">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✅</span>
                </div>

                <h1 className="text-3xl font-bold">¡Gracias por tu compra!</h1>

                <p className="text-gray-600 mt-2">
                    Hemos enviado los detalles del pedido a tu correo
                    electrónico.
                </p>
            </div>

            {/* Product */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 grid md:grid-cols-2 gap-6">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full rounded-xl object-cover"
                />

                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                            Producto comprado
                        </p>

                        <h2 className="text-xl font-semibold mt-1">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 text-sm mt-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-3 mt-6">
                        {product.color && (
                            <div className="flex justify-between items-center border-t pt-3">
                                <span className="text-sm font-medium">
                                    Color
                                </span>

                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-5 h-5 rounded-full border"
                                        style={{
                                            backgroundColor:
                                                product.color.color,
                                        }}
                                    />
                                    <span className="text-sm">
                                        {product.color.description}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center border-t pt-3 font-semibold">
                            <span>Total</span>
                            <span>${finalPrice} MXN</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
                <a
                    href="/dashboard"
                    className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
                >
                    Volver a la tienda
                </a>
            </div>
        </div>
    );
}
