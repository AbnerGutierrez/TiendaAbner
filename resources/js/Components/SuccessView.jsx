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

    const promotion = product?.promotion;
    const discount =
        promotion?.promotion === "discount"
            ? (product.price * promotion.value) / 100
            : 0;

    return (
        <div className="max-w-3xl mx-auto py-20 px-4">
            {/* HEADER */}
            <div className="text-center mb-10">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✅</span>
                </div>

                <h1 className="text-3xl font-bold">¡Gracias por tu compra!</h1>

                <p className="text-gray-600 mt-2">
                    Hemos enviado los detalles del pedido a tu correo.
                </p>
            </div>

            {/* PRODUCTO */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 grid md:grid-cols-2 gap-6">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full rounded-xl object-cover"
                />

                <div className="flex flex-col justify-between">
                    {/* INFO PRODUCTO */}
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

                    {/* PROMOCIONES */}
                    {promotion && (
                        <div className="border-t pt-4 space-y-3 mt-4">
                            {promotion.promotion === "discount" && (
                                <>
                                    <div className="flex justify-between text-red-500">
                                        <span>
                                            Descuento ({promotion.value}%)
                                        </span>
                                        <span>
                                            - ${discount.toFixed(2)} MXN
                                        </span>
                                    </div>
                                </>
                            )}

                            {promotion.promotion === "2x1" && (
                                <div className="flex justify-between text-blue-500">
                                    <span>Promoción</span>
                                    <span>2x1</span>
                                </div>
                            )}

                            {promotion.promotion === "moreforless" && (
                                <div className="bg-blue-50 rounded-md py-2 text-center text-blue-700 font-semibold">
                                    {promotion.quantity} x ${promotion.price}
                                </div>
                            )}
                        </div>
                    )}

                    {/* COLORES */}
                    <div className="space-y-2 mt-6">
                        <p className="text-sm font-semibold">
                            Colores seleccionados
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {product.colors.map((color) => (
                                <div
                                    key={color.id}
                                    className="flex items-center gap-2 text-xs"
                                >
                                    <div
                                        className="w-5 h-5 rounded-full border"
                                        style={{
                                            backgroundColor: color.color,
                                        }}
                                    />
                                    {color.description}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOTAL */}
                    <div className="flex justify-between items-center border-t pt-4 mt-6 text-lg font-bold text-green-700">
                        <span>Total</span>
                        <span>${finalPrice} MXN</span>
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
