import { useState } from "react";
import DefaultSectionImages from "./DefaultSectionImages";
import CompraModal from "../CompraModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router } from "@inertiajs/react";
import {
    faTruck,
    faRotateLeft,
    faShieldHalved,
    faBoxTissue,
} from "@fortawesome/free-solid-svg-icons";
export default function DefaultSectionCompra({
    producto,
    selectedColors,
    selectedPromotion,
    user,
}) {
    const hasPromotion = !!selectedPromotion;
    const colorCount = selectedColors.length;
    const requiredColors = selectedPromotion?.value || 0;

    const isDisabled = !hasPromotion || colorCount !== requiredColors;

    let missingMessage = "";

    if (!hasPromotion && colorCount === 0) {
        missingMessage = "Selecciona un color y una promoción";
    } else if (!hasPromotion) {
        missingMessage = "Selecciona una promoción";
    } else if (colorCount === 0) {
        missingMessage = "Selecciona un color";
    } else if (colorCount !== requiredColors) {
        missingMessage = `Debes seleccionar ${requiredColors} colores`;
    }
    const [imagenActiva, setImagenActiva] = useState(
        producto.images?.length
            ? "storage/" + producto.images[0].image
            : "/placeholder.png",
    );

    const [openModal, setOpenModal] = useState(false);

    const handleModal = (producto) => {
        if (!user) {
            setOpenModal(true);
        } else {
            router.get("/buy/checkOut", {
                product_id: producto.uuid,
                color: selectedColors,
                promotion: selectedPromotion,
            });
        }
    };

    let oferta = parseFloat(producto.price) * 1.3;

    return (
        <section className="py-20 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1  gap-12 items-start px-4">
                {/* INFORMACIÓN */}
                <div className="space-y-6 bg-white rounded-2xl p-8 shadow-sm ">
                    {/* Badges */}
                    <div className="flex gap-2">
                        <span className="bg-orange-100 text-xs px-3 py-1 rounded-full">
                            En stock
                        </span>

                        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                            Envío gratis
                        </span>
                    </div>

                    {/* Título */}
                    <h1 className="text-3xl lg:text-4xl font-bold">
                        {producto.title}
                    </h1>

                    {/* Descripción */}
                    <p className="text-gray-600 leading-relaxed">
                        {producto.description}
                    </p>

                    {/* GALERÍA */}
                    <div className="space-y-4">
                        {/* Imagen principal */}
                        <div className="bg-white rounded-2xl p-6 ">
                            <img
                                src={imagenActiva}
                                alt={producto.title}
                                className="w-full object-contain max-h-[400px] hover:scale-105 transition"
                            />
                        </div>

                        {/* Miniaturas */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:justify-center">
                            {producto.images?.map((img, index) => {
                                const url = "storage/" + img.image;

                                return (
                                    <DefaultSectionImages
                                        key={index}
                                        imagen={url}
                                        producto={producto.title}
                                        active={imagenActiva === url}
                                        onClick={() => setImagenActiva(url)}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Precio */}
                    <div className="flex flex-col items-start gap-1 py-4">
                        {/* Precio anterior */}
                        <span className="text-sm text-gray-500 line-through">
                            ${oferta} <small>MXN</small>
                        </span>

                        {/* Precio con descuento */}
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-black">
                                ${producto.price}{" "}
                                <small className="text-xl">MXN</small>
                            </span>

                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30% 
                            </span>
                        </div>

                        {/* Texto de incentivo */}
                        <span className="text-sm text-green-600 font-semibold">
                             Oferta por tiempo limitado 
                        </span>
                    </div>
                    {/* Botón */}
                    <button
                        disabled={isDisabled}
                        onClick={() => handleModal(producto)}
                        className={`w-full py-4 rounded-xl uppercase text-sm tracking-wider transition shadow-md my-9
                    ${
                        isDisabled
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-black hover:bg-gray-800 text-white"
                    }`}
                    >
                        Comprar ahora
                    </button>
                    {isDisabled && (
                        <small className="text-gray-500 text-sm flex justify-center">
                            {missingMessage}
                        </small>
                    )}

                    {/* Info extra */}
                    <div className="text-sm text-gray-500 space-y-2 pt-4 border-t">
                        <p>
                            {" "}
                            <FontAwesomeIcon icon={faTruck} /> Envíos a todo
                            México
                        </p>
                        <p>
                            {" "}
                            <FontAwesomeIcon icon={faShieldHalved} /> Pago
                            seguro
                        </p>
                        <p>
                            {" "}
                            <FontAwesomeIcon icon={faRotateLeft} /> 7 días de
                            devolución
                        </p>
                    </div>

                    <CompraModal
                        product={producto}
                        open={openModal}
                        selectedColors={selectedColors}
                        selectedPromotions={selectedPromotion}
                        onClose={() => setOpenModal(false)}
                    />
                </div>
            </div>
        </section>
    );
}
