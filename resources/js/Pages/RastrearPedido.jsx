import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";

export default function RastrearPedido() {
    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    const [guia, setGuia] = useState("");
    const [paqueteria, setPaqueteria] = useState("");

    const paqueterias = [
        { id: "dhl", nombre: "DHL" },
        { id: "estafeta", nombre: "Estafeta" },
        { id: "fedex", nombre: "FedEx" },
    ];

    const rastrear = (e) => {
        e.preventDefault();

        const urls = {
            dhl: `https://www.dhl.com/mx-es/home/tracking.html?tracking-id=${guia}`,
            estafeta: `https://www.estafeta.com/Herramientas/Rastreo?rastreo=${guia}`,
            fedex: `https://www.fedex.com/fedextrack/?trknbr=${guia}`,
        };

        if (urls[paqueteria]) {
            window.open(urls[paqueteria], "_blank");
        }
    };

    return (
        <Layout user={auth.user}>
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Rastrear pedido</h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Ingresa tu número de guía y selecciona la paquetería
                        </p>
                    </div>

                    <form onSubmit={rastrear} className="space-y-5">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Número de guía
                            </label>
                            <input
                                type="text"
                                value={guia}
                                onChange={(e) => setGuia(e.target.value)}
                                placeholder="Ej. 123456789"
                                className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                Paquetería
                            </p>

                            <div className="grid grid-cols-3 gap-2">
                                {paqueterias.map((p) => (
                                    <button
                                        type="button"
                                        key={p.id}
                                        onClick={() => setPaqueteria(p.id)}
                                        className={`p-3 rounded-xl border text-sm font-medium transition
                                        ${
                                            paqueteria === p.id
                                                ? "bg-black text-white border-black"
                                                : "bg-gray-50 hover:bg-gray-100"
                                        }`}
                                    >
                                        {p.nombre}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!guia || !paqueteria}
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold disabled:opacity-50"
                        >
                            Rastrear envío
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
