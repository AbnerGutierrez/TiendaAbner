export default function () {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1 */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">
                            Tienda
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Creamos landing pages, tiendas en línea y sistemas a
                            la medida para tu negocio.
                        </p>
                    </div>

                    {/* Columna 2 */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">
                            Enlaces rápidos
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Portafolio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">
                            Síguenos
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Tienda. Todos los derechos
                    reservados.
                </div>
            </footer>
        </>
    );
}
