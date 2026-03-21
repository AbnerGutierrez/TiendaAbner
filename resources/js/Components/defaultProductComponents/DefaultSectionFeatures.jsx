export default function DefaultSectionFeatures({ features }) {
    return (
        <section className=" py-4 bg-white">
            <div className="max-w-6xl mx-auto px-4 space-y-24">
                <p className="text-lg text-gray-700 mb-6 text-center font-medium">
                    Caracteristicas del produto
                </p>
                {features.map((feature, index) => {
                    const image = "storage/" + feature.image;
                    const isReverse = index % 2 !== 0;

                    return (
                        <div
                            key={feature.id}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center 
                            ${isReverse ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Imagen */}
                            <div className={`${isReverse ? "md:order-2" : ""}`}>
                                <img
                                    src={image}
                                    alt={feature.title}
                                    className="w-full rounded-2xl shadow-sm object-cover"
                                />
                            </div>

                            {/* Texto */}
                            <div
                                className={`space-y-4 ${
                                    isReverse ? "md:order-1" : ""
                                }`}
                            >
                                <h3 className="text-2xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600">
                                    Descripcion de la caracteristica Lorem,
                                    ipsum dolor.lorem20 Lorem ipsum dolor sit
                                    amet consectetur.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
