import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";

export default function Privacidad() {
    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    return (
        <Layout user={auth.user}>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
                    <header className="mb-10 border-b border-gray-100 pb-6">
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Políticas de Privacidad
                        </h1>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            En{" "}
                            <span className="font-semibold text-gray-800">
                                Nebluzo
                            </span>
                            , nos comprometemos a proteger la privacidad y la
                            seguridad de los datos personales de nuestros
                            usuarios y clientes. Esta política describe cómo
                            gestionamos tu información en{" "}
                            <span className="text-blue-600 underline">
                                www.neblozo.com
                            </span>
                            .
                        </p>
                    </header>

                    <div className="space-y-8 text-gray-700">
                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">1.</span> Responsable del
                                tratamiento
                            </h2>
                            <p className="leading-relaxed">
                                <span className="font-medium text-gray-900">
                                    Nebluzo
                                </span>
                                , con domicilio en Tomas Alva Edison 9, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX, es
                                responsable del tratamiento de tus datos. Para
                                dudas o aclaraciones:
                            </p>
                            <div className="mt-2 inline-flex items-center px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
                                📧{" "}
                                <span className="ml-2 text-blue-700 underline">
                                    soporte@nebluzo.com
                                </span>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">2.</span> Datos
                                personales que recopilamos
                            </h2>
                            <ul className="list-disc pl-5 space-y-1 marker:text-blue-500">
                                <li>Nombre completo</li>
                                <li>Dirección de envío y facturación</li>
                                <li>Número telefónico</li>
                                <li>Correo electrónico</li>
                                <li>
                                    Información de pago (procesada por
                                    plataformas seguras)
                                </li>
                                <li>Datos de navegación y uso del sitio</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">3.</span> Finalidad del
                                uso de datos
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h3 className="font-semibold text-blue-900 mb-2">
                                        Finalidades primarias
                                    </h3>
                                    <p className="text-sm text-blue-800">
                                        Procesar pedidos, gestionar facturación,
                                        atención al cliente y contacto directo
                                        sobre tu compra.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Finalidades secundarias
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Envío de promociones, novedades y mejora
                                        de experiencia. Puedes cancelar esto
                                        enviando un correo a
                                        soporte@nebluzo.com.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">
                                4. Transferencia de datos
                            </h2>
                            <p>
                                Compartimos datos únicamente con aliados
                                necesarios para el servicio:
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {[
                                    "Paquetería",
                                    "Pasarelas de Pago",
                                    "Proveedores IT",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-500"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 text-emerald-700 italic">
                                5. Protección de datos
                            </h2>
                            <p>
                                Implementamos medidas administrativas, técnicas
                                y físicas para proteger tu información contra
                                daño, pérdida, alteración o uso no autorizado.
                            </p>
                        </section>

                        <section className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-bold mb-4 text-white">
                                6. Derechos ARCO
                            </h2>
                            <p className="text-sm mb-4 text-gray-400 italic">
                                Como titular, tienes derecho a: Acceder,
                                Rectificar, Cancelar u Oponerte (ARCO).
                            </p>
                            <p className="text-sm">
                                Envía tu solicitud a{" "}
                                <span className="text-blue-400">
                                    soporte@nebluzo.com
                                </span>{" "}
                                indicando tu nombre completo y el derecho que
                                deseas ejercer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">
                                7. Uso de cookies
                            </h2>
                            <p>
                                Utilizamos cookies para analizar el tráfico y
                                personalizar tu experiencia. Puedes
                                deshabilitarlas en cualquier momento desde la
                                configuración de tu navegador.
                            </p>
                        </section>

                        <section className="pt-6 border-t border-gray-100">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                                8. Consentimiento
                            </h2>
                            <p className="text-sm text-gray-500 italic mb-4">
                                Al utilizar este sitio web, aceptas los términos
                                establecidos en esta Política de Privacidad.
                            </p>
                            <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Última actualización: 10/04/2026
                                </span>
                                <span className="text-emerald-500 text-sm font-bold">
                                    ● Activa
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
