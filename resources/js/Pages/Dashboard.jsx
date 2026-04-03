import MainProducto from "@/Components/Sections/MainProducto";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard({ productos }) {
    useEffect(() => {
        const intentoCompra = localStorage.getItem("checkout_intent");

        if (intentoCompra) {
            const datos = JSON.parse(intentoCompra);
            router.get("/buy/checkOut", datos);
            localStorage.removeItem("checkout_intent");
        }
    }, []);

    return (
        <AuthenticatedLayout>
            <Head title="Inicio" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6">
                    <h1 className="text-2xl font-bold mb-8">Productos</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {productos.map((product) => {
                            const image = product.images?.[0]?.image;

                            return (
                                <div
                                    key={product.uuid}
                                    className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-4 flex flex-col"
                                >
                                    {/* Imagen */}
                                    <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                                        <img
                                            src={`/storage/${image}`}
                                            alt={product.title}
                                            className="w-full h-full object-cover hover:scale-105 transition"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col flex-1">
                                        <h2 className="font-semibold text-lg">
                                            {product.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                                            {product.description}
                                        </p>

                                        <div className="mt-auto pt-4 flex justify-between items-center">
                                            <span className="font-bold text-lg">
                                                ${product.price}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    router.get("/cepillo_ducha")
                                                }
                                                className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:opacity-90"
                                            >
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
