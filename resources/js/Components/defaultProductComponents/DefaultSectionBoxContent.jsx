import { useState } from "react";
import CompraModal from "../CompraModal";
import { router } from "@inertiajs/react";

export default function DefaultSectionBoxContent({
    boxContent,
    producto,
    selectedColor,
    selectedPromotion,
    user,
}) {
    const isDisabled = !selectedColor || !selectedPromotion;
    let missingMessage = "";

    if (!selectedColor && !selectedPromotion) {
        missingMessage = "Selecciona un color y una promoción";
    } else if (!selectedColor) {
        missingMessage = "Selecciona un color";
    } else if (!selectedPromotion) {
        missingMessage = "Selecciona una promoción";
    }

    const [openModal, setOpenModal] = useState(false);
    const handleModal = (producto) => {
        if (!user) {
            setOpenModal(true);
        } else {
            router.get("/buy/checkOut", {
                product_id: producto.uuid,
                color: selectedColor,
                promotion: selectedPromotion,
            });
        }
    };

    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Titulo */}
                <h2 className="text-3xl font-bold text-center mb-16">
                    ¿Qué hay en la caja?
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {boxContent.map((item) => {
                        const image = "storage/" + item.image;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                                    <img
                                        src={image}
                                        alt={item.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>

                                <p className="text-sm font-medium text-gray-700">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
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
                <CompraModal
                    product={producto}
                    open={openModal}
                    selectedColor={selectedColor}
                    selectedPromotions={selectedPromotion}
                    onClose={() => setOpenModal(false)}
                />
            </div>
        </section>
    );
}
