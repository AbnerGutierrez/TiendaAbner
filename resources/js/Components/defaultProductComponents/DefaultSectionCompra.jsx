import { useState } from "react";
import DefaultSectionImages from "./DefaultSectionImages";
import CompraModal from "../CompraModal";

export default function DefaultSectionCompra({ producto }) {
    const [imagenActiva, setImagenActiva] = useState(
        producto.images?.length
            ? "storage/" + producto.images[0].image
            : "/placeholder.png",
    );

    const [cantidad, setCantidad] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4">
                {/* GALERÍA */}
                <div className="space-y-4">
                    {/* Imagen principal */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <img
                            src={imagenActiva}
                            alt={producto.title}
                            className="w-full object-contain max-h-[400px]"
                        />
                    </div>

                    {/* Miniaturas */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
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

                {/* INFORMACIÓN */}
                <div className="space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                        {producto.title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                        {producto.description}
                    </p>

                    {/* Precio */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-semibold">
                            ${producto.price}
                        </span>

                        {/* ejemplo si hay descuento */}
                        {producto.old_price && (
                            <span className="text-gray-400 line-through">
                                ${producto.old_price}
                            </span>
                        )}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => setOpenModal(true)}
                            className="flex-1 bg-black text-white py-3 rounded-lg uppercase text-sm tracking-wider hover:bg-gray-800 transition "
                        >
                            Comprar ahora
                        </button>
                    </div>
                    <CompraModal
                        product={producto}
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                </div>
            </div>
        </section>
    );
}
