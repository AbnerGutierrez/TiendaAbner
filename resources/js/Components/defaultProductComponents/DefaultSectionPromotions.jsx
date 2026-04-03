export default function DefaultSectionPromotions({
    promotions,
    selectedPromotion,
    onSelect,
}) {
    return (
        <div className="mt-10 py-2">
            <p className="text-2xl md:text-5xl font-bold leading-tight text-center text-gray-400 mb-6">
                Promociones disponibles
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {promotions.map((promotion) => (
                    <button
                        key={promotion.id}
                        onClick={() => onSelect(promotion)}
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
                                {promotion.description}
                            </p>

                            {promotion.value && (
                                <span className="text-blue-600 font-bold text-sm">
                                    % {promotion.value} OFF
                                </span>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
