import InputLabel from "@/Components/InputLabel";
import { useState } from "react";

export default function AddPromotionComponent({ data, setData }) {
    const [showCard, setShowCard] = useState(false);
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const addPromotion = () => {
        if (!type) return;

        let newPromotion = {
            type,
            description,
        };

        if (type === "discount") {
            newPromotion.value = value;
        }

        if (type === "moreforless") {
            newPromotion.quantity = quantity;
            newPromotion.price = price;
        }

        setData("promotions", [...data.promotions, newPromotion]);

        setType("");
        setValue("");
        setQuantity("");
        setPrice("");
        setDescription("");
        setShowCard(false);
    };

    const removePromotion = (index) => {
        const newPromotions = [...data.promotions];
        newPromotions.splice(index, 1);
        setData("promotions", newPromotions);
    };

    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    return (
        <>
            <InputLabel className="mb-1" value="Promociones" />

            <div className="shadow-md border-2 rounded-md p-3">
                {/* Lista de promociones */}
                <div className="flex gap-3 flex-wrap mb-3">
                    {data.promotions.map((promo, index) => (
                        <div
                            key={index}
                            className="border rounded p-2 relative bg-white shadow-sm"
                        >
                            <div className="text-sm font-semibold">
                                {promo.type}
                            </div>

                            {promo.value && (
                                <div className="text-xs text-gray-600">
                                    Valor: {promo.value}
                                </div>
                            )}

                            {promo.type === "moreforless" && (
                                <div className="text-xs text-gray-600">
                                    {promo.quantity} x ${promo.price}
                                </div>
                            )}

                            {promo.description && (
                                <div className="text-xs text-gray-500">
                                    {promo.description}
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={() => removePromotion(index)}
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
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="border rounded px-2 py-1"
                        >
                            <option value="">Tipo de promoción</option>
                            <option value="discount">Descuento</option>
                            <option value="2x1">2x1</option>
                            <option value="moreforless">
                                4 unidades X $tanto.
                            </option>
                        </select>

                        {type === "moreforless" && (
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder="Cantidad"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                    className="border rounded px-2 py-1 w-1/2"
                                />

                                <input
                                    type="number"
                                    placeholder="Precio total $"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="border rounded px-2 py-1 w-1/2"
                                />
                            </div>
                        )}

                        {type === "discount" && (
                            <input
                                type="number"
                                placeholder="Valor del descuento (%)"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="border rounded px-2 py-1"
                            />
                        )}

                        <textarea
                            placeholder="Descripción de la oferta"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded px-2 py-1"
                        />

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={addPromotion}
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
