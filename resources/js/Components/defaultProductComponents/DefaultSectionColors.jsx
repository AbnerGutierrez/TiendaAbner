export default function DefaultSectionColors({
    colors,
    selectedColor,
    onSelect,
}) {
    return (
        <div className="p-3 ">
            <p className="text-2xl md:text-5xl font-bold leading-tight text-center text-gray-400 my-8">
                Colores disponibles
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {colors.map((color) => (
                    <button
                        key={color.id}
                        onClick={() => onSelect(color)}
                        className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all
                        ${
                            selectedColor?.id === color.id
                                ? "border-blue-500 ring-2 ring-blue-500"
                                : "border-gray-300 hover:border-gray-400"
                        }`}
                    >
                        {/* circulo del color */}
                        <div
                            className="w-12 h-12 rounded-full mb-3 border"
                            style={{
                                background: `linear-gradient(180deg,${color.color} 50%, color-mix(in srgb, ${color.color}, black 20%) 50%)`,
                            }}
                        />

                        {/* nombre */}
                        <span className="text-sm text-gray-700">
                            {color.description}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
