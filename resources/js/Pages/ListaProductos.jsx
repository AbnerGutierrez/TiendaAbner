import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ListaProductos({ productos, user }) {
    const { url } = usePage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [url]);

    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;
    return (
        <Layout user={auth.user}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Producto 1 */}
                <div
                    key={productos[0].uuid}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <div className="aspect-square bg-gray-900 rounded-xl mb-4 overflow-hidden">
                        <img
                            src={
                                "storage/" + productos[0].images[0].image ||
                                "/placeholder.jpg"
                            }
                            alt={"image" + productos[0].title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-white text-xl font-semibold mb-2">
                        {productos[0].title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {productos[0].description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-white font-bold text-lg">
                            ${productos[0].price}
                        </span>
                    </div>

                    <button
                        onClick={() => router.get("/cepillo_ducha")}
                        className="w-full bg-black text-white py-3 rounded-xl uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Comprar ahora
                    </button>
                </div>

                {/* Producto 2 */}
                <div
                    key={productos[2].uuid}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <div className="aspect-square bg-gray-900 rounded-xl mb-4 overflow-hidden">
                        <img
                            src={
                                "storage/" + productos[2].images[2].image ||
                                "/placeholder.jpg"
                            }
                            alt={"image" + productos[2].title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-white text-xl font-semibold mb-2">
                        {productos[2].title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {productos[2].description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-white font-bold text-lg">
                            ${productos[2].price}
                        </span>
                    </div>

                    <button
                        onClick={() => router.get("/beeswax_food_wrap")}
                        className="w-full bg-black text-white py-3 rounded-xl uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Comprar ahora
                    </button>
                </div>
            </div>
        </Layout>
    );
}
