import { useState } from "react";

export default function DefaultSectionPromotions({ promotions, onSelect }) {
    const [selectedPromotion, setSelectedPromotion] = useState(null);

    const handleSelect = (promotion) => {
        setSelectedPromotion(promotion);

        if (onSelect) {
            onSelect(promotion);
        }
    };

    return (
        <div className="mt-10 py-2">
            <p className="text-lg text-gray-700 mb-6 text-center font-medium">
                Promociones disponibles
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {promotions.map((promotion) => (
                    <button
                        key={promotion.id}
                        onClick={() => handleSelect(promotion)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-200
                        ${
                            selectedPromotion?.id === promotion.id
                                ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50"
                                : "border-gray-300 hover:border-gray-400"
                        }`}
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-gray-900">
                                {promotion.promotion}
                            </h3>

                            <p className="text-sm text-gray-600">
                                Este porcentaje se descontara de tu compra
                            </p>

                            {promotion.value && (
                                <span className="text-blue-600 font-bold text-sm">
                                    %{promotion.value} OFF
                                </span>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
