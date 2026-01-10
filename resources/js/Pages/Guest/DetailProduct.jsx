import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import AppLayout from "@/Layouts/AppLayout";

export default function DetailProduct({ product }) {
    const [mainImage, setMainImage] = useState(product.images[0] ?? null);
    const [quantity, setQuantity] = useState(1);

    const maxStock = product.stock;

    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* GALERÍA */}
                    <div>
                        <div className="border rounded-lg bg-gray-50 overflow-hidden">
                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt={product.title}
                                    className="w-full h-[420px] object-contain"
                                />
                            ) : (
                                <div className="h-[420px] flex items-center justify-center text-gray-400">
                                    Sin imagen
                                </div>
                            )}
                        </div>

                        {/* MINIATURAS */}
                        {product.images.length > 1 && (
                            <div className="flex gap-2 mt-4">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setMainImage(img)}
                                        className={`border rounded p-1 ${
                                            mainImage === img
                                                ? "border-black"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            className="w-16 h-16 object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* INFO + COMPRA */}
                    <div className="space-y-6">
                        <h1 className="text-2xl font-semibold">
                            {product.title}
                        </h1>

                        <p className="text-3xl font-bold text-green-600">
                            ${product.price}
                        </p>

                        <p className="text-sm text-gray-500">
                            {product.stock > 0 ? (
                                <>Stock disponible: {product.stock}</>
                            ) : (
                                <span className="text-red-500">Sin stock</span>
                            )}
                        </p>

                        <div className="pt-4 border-t text-gray-700 leading-relaxed">
                            {product.description}
                        </div>

                        {/* CANTIDAD */}
                        {product.stock > 0 && (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium">
                                    Cantidad:
                                </span>

                                <div className="flex items-center border rounded">
                                    <button
                                        type="button"
                                        className="px-3 py-1 text-lg"
                                        onClick={() =>
                                            setQuantity(
                                                quantity > 1 ? quantity - 1 : 1
                                            )
                                        }
                                    >
                                        −
                                    </button>

                                    <span className="px-4">{quantity}</span>

                                    <button
                                        type="button"
                                        className="px-3 py-1 text-lg"
                                        onClick={() =>
                                            setQuantity(
                                                quantity < maxStock
                                                    ? quantity + 1
                                                    : quantity
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* BOTÓN COMPRAR */}
                        <div className="space-y-3">
                            <button
                                disabled={product.stock === 0}
                                className={`w-full py-3 rounded-lg font-semibold transition ${
                                    product.stock > 0
                                        ? "bg-black text-white hover:bg-gray-800"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                                onClick={() =>
                                    alert(`Comprar ${quantity} unidad(es)`)
                                }
                            >
                                <FontAwesomeIcon icon={faPaypal} /> Comprar
                                ahora
                            </button>

                            <p className="text-xs text-gray-400 text-center ">
                                Compra segura · Envío rápido · Garantía incluida
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
