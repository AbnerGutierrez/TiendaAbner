export default function DefaultSectionColors({
    colors = [],
    selectedColors = [],
    onSelect,
    selectedPromotion,
}) {
    const isDisabled = !selectedPromotion;

    return (
        <div className="p-3 pb-14">
            <p className="text-2xl md:text-5xl font-bold leading-tight text-center text-gray-400 my-8">
                Colores disponibles
            </p>

            {!selectedPromotion ? (
                <div className="w-full mx-auto bg-red-400 mb-7 text-white py-2.5 px-4 text-center text-sm font-semibold tracking-wide shadow rounded">
                    Selecciona una promoción primero
                </div>
            ) : (
                <p className="text-center text-gray-500 mb-4">
                    Colores seleccionados: {selectedColors.length} de {selectedPromotion.value}
                </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {colors.map((color) => {
                    const isSelected = selectedColors.some(
                        (c) => c.id === color.id,
                    );

                    return (
                        <button
                            key={color.id}
                            disabled={isDisabled}
                            onClick={() => onSelect(color)}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all
                            
                            ${
                                isSelected
                                    ? "border-blue-500 ring-2 ring-blue-500"
                                    : "border-gray-300 hover:border-gray-400"
                            }

                            ${
                                isDisabled
                                    ? "opacity-50 cursor-not-allowed"
                                    : "cursor-pointer"
                            }
                            
                            `}
                        >
                            <div
                                className="w-12 h-12 rounded-full mb-3 border"
                                style={{
                                    background: `linear-gradient(
                                        180deg,
                                        ${color.color} 50%,
                                        color-mix(in srgb, ${color.color}, black 20%) 50%
                                    )`,
                                }}
                            />

                            <span className="text-sm text-gray-700">
                                {color.description}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
