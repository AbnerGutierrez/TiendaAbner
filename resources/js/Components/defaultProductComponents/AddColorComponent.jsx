import InputLabel from "@/Components/InputLabel";
import { useState } from "react";

export default function AddColorComponent({ data, setData }) {
    const [showCard, setShowCard] = useState(false);
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    const addColor = () => {
        if (!name) return;

        const newColor = {
            name,
            value: color,
        };

        setData("colors", [...data.colors, newColor]);

        setName("");
        setColor("#000000");
        setShowCard(false);
    };

    const removeColor = (index) => {
        const newColors = [...data.colors];
        newColors.splice(index, 1);
        setData("colors", newColors);
    };

    return (
        <>
            <InputLabel className="mb-1" value="Colores" />

            <div className="shadow-md border-2 rounded-md p-3">
                {/* Lista de colores */}
                <div className="flex gap-3 flex-wrap mb-3">
                    {data.colors.map((c, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 border rounded p-2 relative"
                        >
                            <div
                                className="w-6 h-6 rounded-full border"
                                style={{ backgroundColor: c.value }}
                            />

                            <span className="text-sm">{c.name}</span>

                            <button
                                type="button"
                                onClick={() => removeColor(index)}
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    {/* Botón + */}
                    <button
                        type="button"
                        onClick={() => setShowCard(true)}
                        className="w-10 h-10 flex items-center justify-center border-2 border-dashed rounded text-xl"
                    >
                        +
                    </button>
                </div>

                {/* Card para agregar */}
                {showCard && (
                    <div className="border rounded p-3 flex flex-col gap-2 bg-gray-50">
                        <input
                            type="text"
                            placeholder="Nombre del color"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded px-2 py-1"
                        />

                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={addColor}
                                className="px-3 py-1 bg-blue-600 text-white rounded"
                            >
                                Guardar
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowCard(false)}
                                className="px-3 py-1 bg-gray-400 text-white rounded"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
