import { useState } from "react";
import DefaultSectionImages from "@/Components/defaultProductComponents/DefaultSectionImages";
export default function DefaultHero({ producto }) {
    const [imagenActiva, setImagenActiva] = useState(
        "storage/" + producto.images[0].image,
    );

    return (
        <section className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
                <span className="text-red-500">New</span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {producto.title}
                </h1>
                <p className="text-lg text-gray-600 my-8">
                    {producto.description}
                </p>
            </div>

            {/* Imagen principal + galería */}
            <div className="space-y-6">
                {/* Imagen principal */}
                <div>
                    <img
                        src={imagenActiva}
                        alt={producto.title}
                        className="w-full h-auto rounded-2xl"
                    />
                </div>

                {/* Miniaturas */}
                <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-thin">
                    {producto.images.map((img, index) => (
                        <DefaultSectionImages
                            key={index}
                            imagen={"storage/" + img.image}
                            producto={producto.title}
                            onClick={() =>
                                setImagenActiva("storage/" + img.image)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
