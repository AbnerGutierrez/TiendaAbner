import useInView from "@/hooks/useInView";
export default function TestimonioSection({ testimonios = [] }) {
        const [ref, visible] = useInView({ threshold: 0.2 });
    return (
        <section ref={ref} className={`py-20 bg-indigo-100 reveal ${visible ? "show" : ""}`}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl font-bold mb-4">
                    Lo que dicen sobre nosotros
                </h2>

                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Historias reales de personas y negocios que confiaron en nosotros para impulsar su presencia digital.
                </p>

                {/* GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonios.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-lg rounded-2xl p-6 text-left border hover:shadow-xl transition"
                        >
                            {/* FOTO */}
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={item.foto} 
                                    alt={item.nombre}
                                    className="w-14 h-14 rounded-full object-cover border"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.nombre}</h3>
                                    <p className="text-sm text-gray-500">{item.rol}</p>
                                </div>
                            </div>

                            {/* ESTRELLAS */}
                            <div className="flex items-center mb-4">
                                {Array.from({ length: item.estrellas }).map((_, i) => (
                                    <svg 
                                        key={i}
                                        className="w-5 h-5 text-yellow-400" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                ))}
                            </div>

                            {/* TESTIMONIO */}
                            <p className="text-gray-700 leading-relaxed">
                                {item.testimonio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
