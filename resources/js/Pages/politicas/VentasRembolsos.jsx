import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";

export default function VentasRembolsos() {
    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;
    return (
        <Layout user={auth.user}>
            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-slate-200 rounded-3xl shadow-sm">
                    <header className="mb-12 text-center">
                        <span className="text-amber-600 font-bold text-sm uppercase tracking-widest">
                            Atención al Cliente
                        </span>
                        <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">
                            Políticas de Ventas y Reembolsos
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
                            En{" "}
                            <span className="font-semibold text-slate-800">
                                Lunadev
                            </span>
                            , buscamos ofrecer productos de calidad y una
                            experiencia de compra segura en{" "}
                            <span className="text-blue-600">
                                www.lunadev.mx
                            </span>
                            .
                        </p>
                    </header>

                    <div className="space-y-12">
                        {/* 1. Proceso de Compra */}
                        <section>
                            <div className="flex items-center mb-6">
                                <div className="bg-amber-100 text-amber-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                                    1
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">
                                    Proceso de compra
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    {
                                        step: "01",
                                        text: "Selecciona tu producto",
                                    },
                                    { step: "02", text: "Datos de envío" },
                                    { step: "03", text: "Realiza el pedido" },
                                    { step: "04", text: "Realiza el pago" },
                                ].map((item) => (
                                    <div
                                        key={item.step}
                                        className="relative bg-slate-50 p-5 rounded-xl border border-slate-200 hover:shadow-md transition"
                                    >
                                        {/* Número decorativo */}
                                        <span className="absolute right-3 bottom-1 text-6xl font-extrabold text-slate-200 opacity-60 select-none">
                                            {item.step}
                                        </span>

                                        {/* Texto */}
                                        <p className="text-sm font-semibold text-slate-700 relative z-10">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-4 text-sm text-slate-500 italic">
                                Recibirás un correo de confirmación tras validar
                                el pago.
                            </p>
                        </section>

                        <hr className="border-slate-100" />

                        {/* 2 & 3. Precios y Envíos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="mr-2">2.</span> Precios y
                                    disponibilidad
                                </h2>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Precios expresados en **pesos mexicanos
                                    (MXN)**. Sujetos a cambios sin previo aviso.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 text-xs text-blue-800">
                                    <strong>
                                        Si un producto se agota después de tu
                                        compra:
                                    </strong>
                                    <ul className="list-disc pl-4 mt-1">
                                        <li>Ofrecemos reemplazo</li>
                                        <li>Crédito en tienda</li>
                                        <li>Reembolso total</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="mr-2">3.</span> Envíos
                                </h2>
                                <p className="text-slate-600 text-sm mb-2 italic">
                                    Procesamiento:{" "}
                                    <strong>[1 a 3 días hábiles]</strong>
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    El tiempo de entrega depende de la
                                    ubicación, paquetería y factores externos.
                                    Te enviaremos un{" "}
                                    <strong>número de seguimiento</strong> en
                                    cuanto el paquete salga de bodega.
                                </p>
                            </section>
                        </div>

                        {/* 4. Cambios y Devoluciones */}
                        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="text-amber-400 mr-3 text-3xl">
                                    4.
                                </span>{" "}
                                Cambios y devoluciones
                            </h2>
                            <p className="mb-6 text-slate-300">
                                Aceptamos cambios dentro de los primeros{" "}
                                <strong>[7 o 30] días naturales</strong> bajo
                                las siguientes condiciones:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {[
                                    "Producto sin uso",
                                    "Empaque original",
                                    "Estado íntegro",
                                    "Aplicable",
                                ].map((cond) => (
                                    <div
                                        key={cond}
                                        className="flex items-center text-sm bg-white/10 p-3 rounded-lg border border-white/10"
                                    >
                                        <span className="text-emerald-400 mr-2">
                                            ✓
                                        </span>{" "}
                                        {cond}
                                    </div>
                                ))}
                            </div>
                            <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-xl text-amber-200 text-sm">
                                <p className="font-bold mb-2">
                                    Para solicitarlo, envía un correo a
                                    lunadevbusiness@gmail.com incluyendo:
                                </p>
                                <ul className="list-disc pl-5 opacity-90">
                                    <li>Número de pedido</li>
                                    <li>Motivo de la solicitud</li>
                                    <li>Fotografías (en caso de daño)</li>
                                </ul>
                            </div>
                        </section>

                        {/* 5, 6 & 7. Detalles Finales */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="border border-slate-100 p-6 rounded-2xl">
                                <h3 className="font-bold text-slate-800 mb-2 underline decoration-amber-400 decoration-2 underline-offset-4">
                                    5. Daños de fábrica
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Reportar dentro de las primeras{" "}
                                    <strong>48 horas</strong> tras recibir el
                                    paquete. En estos casos, cubrimos todos los
                                    costos de envío para la reposición.
                                </p>
                            </section>

                            <section className="border border-slate-100 p-6 rounded-2xl">
                                <h3 className="font-bold text-slate-800 mb-2 underline decoration-amber-400 decoration-2 underline-offset-4">
                                    6. Reembolsos
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Se procesan al mismo método de pago original
                                    en un plazo de{" "}
                                    <strong>[5 a 10 días hábiles]</strong> tras
                                    la aprobación.
                                </p>
                            </section>
                        </div>

                        {/* Footer Contacto */}
                        <footer className="mt-12 pt-10 border-t border-slate-100 text-center">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">
                                ¿Necesitas ayuda?
                            </h2>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <div className="flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-full hover:bg-slate-200 transition-colors cursor-pointer">
                                    <span className="text-lg">📧</span>
                                    <span className="text-sm font-semibold text-slate-700">
                                        lunadevbusiness@gmail.com
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-full hover:bg-slate-200 transition-colors cursor-pointer">
                                    <span className="text-lg">📱</span>
                                    <span className="text-sm font-semibold text-slate-700">
                                        WhatsApp 7341330970
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
