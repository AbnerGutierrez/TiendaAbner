import useInView from "@/hooks/useInView";
export default function ClienteSection({ clientes = [] }) {
    const [ref, visible] = useInView({ threshold: 0.2 });
    return (
        <section className={`py-16 bg-white reveal ${visible ? "show" : ""}`}>
            <div ref={ref} className="max-w-6xl mx-auto text-center px-4">
                
                <h2 className="text-3xl font-bold mb-4">
                    Nuestros Clientes
                </h2>

                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Empresas y emprendedores que han confiado en nosotros para llevar su presencia digital al siguiente nivel.
                </p>

                {/* GRID DE LOGOS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center opacity-90">
                    {clientes.map((cliente, index) => (
                        <div
                            key={index}
                            className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <img
                                src={cliente.logo}
                                alt={cliente.nombre}
                                className="h-16 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
