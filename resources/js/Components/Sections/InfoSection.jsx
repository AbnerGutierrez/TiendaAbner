import useInView from "@/hooks/useInView";

export default function InfoSection({ imagen, titulo, descripcion, reverse,id,baColor }) {
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className={`reveal ${visible ? "show" : ""} ${baColor ? "bg-indigo-100" : ""}`} id={id} >
            <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">

                {/* Imagen */}
                <div className={`flex-1 ${reverse ? "order-2" : "order-1"}`}>
                    <img
                        src={imagen}
                        alt="Imagen"
                        className="w-full rounded-3xl shadow-lg"
                    />
                </div>

                {/* Texto */}
                <div className={`flex-1 ${reverse ? "order-1" : "order-2"} text-center lg:text-start`}>
                    <h1 className="text-4xl font-extrabold text-indigo-600 md:text-5xl leading-tight">
                        {titulo}
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        {descripcion}
                    </p>
                </div>

            </div>
        </section>
    );
}
