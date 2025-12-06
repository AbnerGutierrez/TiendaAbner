import CardPrecio from "./CardPrecio";
export default function PrecioSection() {
    return (
        <section className="bg-white" id="costosYplanes">
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-600 ">
                            Nuestros costos y planes
                        </h2>
                        <p className="mb-5 font-light  sm:text-xl ">
                            Estos son nuestros planes más contratados. Consulta{" "}
                            <a
                                className="text-blue-600 hover:text-blue-800"
                                href=""
                            >
                                otros planes
                            </a>{" "}
                            para conocer más opciones y precios adicionales.
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                        <CardPrecio
                            titulo={"Plan basico"}
                            descripcion={
                                "Para sitios estaticos que solo necesitan presencia en internet. "
                            }
                            precio={"599"}
                            onClick={() => setSelectedCard("basico")}
                            items={[
                                {
                                    texto: "Diseño personalizado",
                                    disponible: true,
                                },
                                {
                                    texto: "Desarollo web",
                                    disponible: true,
                                },
                                {
                                    texto: "Dominio .com",
                                    disponible: true,
                                },
                                {
                                    texto: "Hosting",
                                    disponible: true,
                                },
                                {
                                    texto: "Atencion 24/7",
                                    disponible: true,
                                },
                                {
                                    texto: "Cantidad de páginas ilimitadas",
                                    disponible: false,
                                },
                                {
                                    texto: "Cambios mensuales ilimitados",
                                    disponible: false,
                                },
                                {
                                    texto: "Correos corporativos",
                                    disponible: false,
                                },
                                {
                                    texto: "SEO inicial",
                                    disponible: false,
                                },
                                {
                                    texto: "Soporte prioritario",
                                    disponible: false,
                                },
                            ]}
                        />

                        <CardPrecio
                            titulo={"Plan avanzado"}
                            descripcion={
                                "Para negocios que necesitan más secciones y funciones."
                            }
                            precio={"999"}
                            onClick={() => setSelectedCard("basico")}
                            items={[
                                {
                                    texto: "Diseño personalizado",
                                    disponible: true,
                                },
                                {
                                    texto: "Desarollo web",
                                    disponible: true,
                                },
                                {
                                    texto: "Dominio .com",
                                    disponible: true,
                                },
                                {
                                    texto: "Hosting",
                                    disponible: true,
                                },
                                {
                                    texto: "Atencion 24/7",
                                    disponible: true,
                                },
                                {
                                    texto: "Cantidad de páginas ilimitadas",
                                    disponible: false,
                                },
                                {
                                    texto: "Cambios mensuales ilimitados",
                                    disponible: false,
                                },
                                {
                                    texto: "Correos corporativos",
                                    disponible: true,
                                },
                                {
                                    texto: "SEO inicial",
                                    disponible: true,
                                },
                                {
                                    texto: "Soporte prioritario",
                                    disponible: true,
                                },
                            ]}
                        />

                        <CardPrecio
                            titulo={"Plan empresarial"}
                            descripcion={
                                "Para tiendas online o sistemas personalizados. "
                            }
                            precio={"1999"}
                            onClick={() => setSelectedCard("basico")}
                            items={[
                                {
                                    texto: "Diseño personalizado",
                                    disponible: true,
                                },
                                {
                                    texto: "Desarollo web",
                                    disponible: true,
                                },
                                {
                                    texto: "Dominio .com",
                                    disponible: true,
                                },
                                {
                                    texto: "Hosting",
                                    disponible: true,
                                },
                                {
                                    texto: "Atencion 24/7",
                                    disponible: true,
                                },
                                {
                                    texto: "Cantidad de páginas ilimitadas",
                                    disponible: true,
                                },
                                {
                                    texto: "Cambios mensuales ilimitados",
                                    disponible: true,
                                },
                                {
                                    texto: "Correos corporativos",
                                    disponible: true,
                                },
                                {
                                    texto: "SEO avanzado",
                                    disponible: true,
                                },
                                {
                                    texto: "Soporte prioritario",
                                    disponible: true,
                                },
                                {
                                    texto: "Funciones avanzadas (base de datos, panel, pagos, integraciones)",
                                    disponible: true,
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
