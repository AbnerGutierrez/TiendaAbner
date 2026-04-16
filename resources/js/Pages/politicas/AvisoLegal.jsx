import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";

export default function AvisoLegal() {
    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    return (
        <Layout user={auth.user}>
            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl mx-auto">
                    {/* Cabecera Estilo Documento Oficial */}
                    <header className="mb-12 border-b-2 border-slate-900 pb-8">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
                            Aviso Legal
                        </h1>
                        <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                El presente Aviso Legal regula el acceso y uso
                                del sitio web
                                <span className="font-bold text-slate-800 underline ml-1 text-blue-600">
                                    www.lunadev.mx
                                </span>
                                , propiedad de{" "}
                                <span className="font-semibold text-slate-800">
                                    lunadev
                                </span>
                                , con domicilio en Tomas Alva Edison 9,
                                Tabacalera, Cuauhtémoc, 06030 Ciudad de México,
                                CDMX.
                            </p>
                            <p className="text-sm bg-slate-100 p-3 rounded-lg border-l-4 border-slate-400">
                                Al acceder, navegar o utilizar este sitio web,
                                el usuario acepta los términos y condiciones
                                establecidos en el presente documento.
                            </p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        {/* Columna Izquierda: Identificación */}
                        <aside className="md:col-span-4">
                            <div className="sticky top-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    1. Titularidad
                                </h2>
                                <div className="space-y-4 text-sm text-slate-700">
                                    <div>
                                        <p className="font-bold text-slate-900">
                                            Operado por:
                                        </p>
                                        <p>lunadev</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">
                                            Domicilio:
                                        </p>
                                        <p>
                                            Tomas Alva Edison 9, Tabacalera,
                                            Cuauhtémoc, 06030 Ciudad de México,
                                            CDMX
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">
                                            Contacto:
                                        </p>
                                        <p className="text-blue-600 underline">
                                            lunadevbusiness@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Columna Derecha: Cláusulas */}
                        <div className="md:col-span-8 space-y-10">
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center mr-3 text-sm">
                                        02
                                    </span>
                                    Uso del sitio web
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    El usuario se compromete a actuar bajo la
                                    legislación mexicana. Queda estrictamente
                                    prohibido:
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Fines fraudulentos",
                                        "Interferir en sistemas",
                                        "Acceso no autorizado",
                                        "Distribución de malware",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center text-sm text-slate-700 bg-red-50/50 p-2 rounded border border-red-100"
                                        >
                                            <span className="text-red-500 mr-2 font-bold">
                                                ✕
                                            </span>{" "}
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300">
                                <h2 className="text-xl font-bold text-slate-900 mb-4">
                                    3. Propiedad intelectual
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Todo el contenido (textos, imágenes,
                                    logotipos, diseños y código fuente) es
                                    propiedad de
                                    <span className="font-bold text-slate-800">
                                        {" "}
                                        lunadev y fuentes privadas
                                    </span>
                                    . Se prohíbe la reproducción o modificación
                                    sin autorización escrita.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">
                                    4. Información y Enlaces
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    El contenido es meramente informativo. No
                                    nos responsabilizamos por el contenido o
                                    políticas de privacidad de{" "}
                                    <strong>sitios de terceros</strong>{" "}
                                    enlazados.
                                </p>
                            </section>

                            <section className="border-l-4 border-amber-400 pl-6 py-2">
                                <h2 className="text-xl font-bold text-slate-900 mb-2">
                                    6. Limitación de responsabilidad
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    No seremos responsables por daños derivados
                                    de fallas técnicas, interrupciones del
                                    servicio o errores en la información
                                    publicada.
                                </p>
                            </section>

                            <section className="bg-slate-900 text-white p-6 rounded-2xl">
                                <h2 className="text-xl font-bold mb-4">
                                    9. Legislación y Jurisdicción
                                </h2>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Este aviso se rige por las leyes de los{" "}
                                    <strong>Estados Unidos Mexicanos</strong>.
                                    Cualquier controversia se someterá a los
                                    tribunales competentes en:
                                </p>
                                <p className="mt-2 font-mono text-amber-400">
                                    Cuauhtémoc CDMX
                                </p>
                            </section>

                            <footer className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase italic">
                                        Vigente: 10/04/2026
                                    </span>
                                </div>
                                <p className="text-[10px] text-slate-400 text-right uppercase tracking-tighter">
                                    Documento de validez legal conforme a leyes
                                    mexicanas.
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
