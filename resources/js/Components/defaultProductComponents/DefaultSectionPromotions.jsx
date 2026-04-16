export default function DefaultSectionPromotions({
    promotions,
    selectedPromotion,
    onSelect,
}) {
    const PROMOTION_LABELS = {
        discount: "Descuento Especial",
        "2x1": "Promoción 2x1",
        moreforless: "Más por menos",
    };
    return (
        <div className=" py-2">
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-10 md:w-20 bg-gray-300"></div>

                <p className="text-lg md:text-2xl text-center text-black font-semibold whitespace-nowrap">
                    Ofertas exclusivas de Abril
                </p>

                <div className="h-[1px] w-10 md:w-20 bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {promotions.map((promotion, index) => {
                    const isLast = index === promotions.length - 1;

                    return (  
                        <button
                            key={promotion.id}
                            onClick={() => onSelect(promotion)}
                            className={`relative text-left p-5 rounded-2xl border transition-all duration-200
                ${
                    selectedPromotion?.id === promotion.id
                        ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                }`}
                        >
                            {/* Badge */}
                            {isLast && (
                                <span className="absolute -top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                    🔥 El más pedido
                                </span>
                            )}

                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-gray-900">
                                    {PROMOTION_LABELS[promotion.promotion] ||
                                        promotion.promotion}
                                </h3>

                                {promotion.quantity && (
                                    <span className="text-blue-600 font-bold text-xl">
                                        {promotion.quantity} X $
                                        {promotion.price}{" "}
                                        <small className="text-sm">MXN</small>
                                    </span>
                                )}

                                <p className="text-sm text-gray-600">
                                    {promotion.description}
                                </p>

                                {promotion.promotion == "discount" && (
                                    <span className="text-blue-600 font-bold text-sm">
                                        % {promotion.value} OFF
                                    </span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
