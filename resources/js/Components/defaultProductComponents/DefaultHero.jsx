import { useState, useRef } from "react";
import DefaultSectionImages from "@/Components/defaultProductComponents/DefaultSectionImages";
import DefaultRedComponent from "./DefaultRedComponent";

export default function DefaultHero({ producto }) {
    const [indexActivo, setIndexActivo] = useState(0);
    const touchStartX = useRef(null);

    const imagenActiva = "storage/" + producto.images[indexActivo].image;

    const siguienteImagen = () => {
        setIndexActivo((prev) =>
            prev === producto.images.length - 1 ? 0 : prev + 1,
        );
    };

    const imagenAnterior = () => {
        setIndexActivo((prev) =>
            prev === 0 ? producto.images.length - 1 : prev - 1,
        );
    };

    /* SCROLL CON MOUSE */
    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            siguienteImagen();
        } else {
            imagenAnterior();
        }
    };

    /* SWIPE MOBILE */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;

        const distancia = touchStartX.current - touchEndX;

        if (Math.abs(distancia) < 50) return;

        if (distancia > 0) {
            siguienteImagen();
        } else {
            imagenAnterior();
        }
    };

    return (
        <section className="relative max-w-6xl mx-auto px-6 pt-6 md:pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
            {/* TEXTO */}
            <div className="text-center md:text-left">
                <span className="text-red-500">New</span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {producto.title}
                </h1>

                <p className="text-lg text-gray-600 my-8">
                    {producto.description}
                </p>
            </div>

            {/* IMAGENES */}
            <div className="space-y-6">
                {/* IMAGEN PRINCIPAL */}
                <div
                    onWheel={handleWheel}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="overflow-hidden rounded-2xl"
                >
                    <img
                        src={imagenActiva}
                        alt={producto.title}
                        className="w-full h-auto transition-all duration-300"
                    />
                </div>

                {/* MINIATURAS */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {producto.images.map((img, index) => (
                        <DefaultSectionImages
                            key={index}
                            imagen={"storage/" + img.image}
                            producto={producto.title}
                            onClick={() => setIndexActivo(index)}
                        />
                    ))}
                </div>
            </div>

            <DefaultRedComponent />
        </section>
    );
}
