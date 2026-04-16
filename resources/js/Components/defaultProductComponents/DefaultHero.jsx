import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DefaultSectionImages from "@/Components/defaultProductComponents/DefaultSectionImages";
import DefaultRedComponent from "./DefaultRedComponent";

export default function DefaultHero({ producto }) {
    const [[indexActivo, direction], setIndexActivo] = useState([0, 0]);
    const touchStartX = useRef(null);

    const imagenActiva = "storage/" + producto.images[indexActivo].image;

    const cambiarImagen = (nuevoIndex, dir) => {
        setIndexActivo([nuevoIndex, dir]);
    };

    const siguienteImagen = () => {
        const next =
            indexActivo === producto.images.length - 1 ? 0 : indexActivo + 1;
        cambiarImagen(next, 1);
    };

    const imagenAnterior = () => {
        const prev =
            indexActivo === 0 ? producto.images.length - 1 : indexActivo - 1;
        cambiarImagen(prev, -1);
    };

    /* SCROLL */
    const handleWheel = (e) => {
        if (e.deltaY > 0) siguienteImagen();
        else imagenAnterior();
    };

    /* SWIPE */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const distancia = touchStartX.current - touchEndX;

        if (Math.abs(distancia) < 50) return;

        if (distancia > 0) siguienteImagen();
        else imagenAnterior();
    };

    /* 🎬 Animaciones */
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <section className="relative max-w-6xl mx-auto px-6 pt-6 md:pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
            {/* TEXTO */}
            <div className="text-center md:text-left">
                <span className="text-red-500 animate-pulse"> ULTIMAS UNIDADES </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {producto.title}
                </h1>

                <p className="text-lg text-gray-600 my-8">
                    {producto.description}
                </p>
            </div>

            {/* IMÁGENES */}
            <div className="space-y-6">
                {/* IMAGEN PRINCIPAL */}
                <div
                    onWheel={handleWheel}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="overflow-hidden rounded-2xl relative"
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={indexActivo}
                            src={imagenActiva}
                            alt={producto.title}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35 }}
                            className="w-full absolute top-0 left-0"
                        />
                    </AnimatePresence>

                    {/* espacio para evitar colapso */}
                    <img
                        src={imagenActiva}
                        className="opacity-0 w-full"
                        alt=""
                    />
                </div>

                {/* MINIATURAS */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {producto.images.map((img, index) => (
                        <DefaultSectionImages
                            key={index}
                            imagen={"storage/" + img.image}
                            producto={producto.title}
                            onClick={() =>
                                cambiarImagen(
                                    index,
                                    index > indexActivo ? 1 : -1,
                                )
                            }
                        />
                    ))}
                </div>
            </div>

            <DefaultRedComponent />
        </section>
    );
}
