import { useState } from "react";

export default function MainProducto() {
    // ESTADOS
    const [cantidad, setCantidad] = useState(1);
    const [color, setColor] = useState(null);

    // DATOS DE EJEMPLO (puedes recibirlos como props)
    const precio = 199;
    const colores = ["Rojo", "Azul", "Negro"];

    const incrementar = () => setCantidad((prev) => prev + 1);
    const decrementar = () => {
        if (cantidad > 1) setCantidad((prev) => prev - 1);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* IMAGEN */}
                <div className="flex justify-center   ">
                    <img
                        src="https://womensecret.mx/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-ws-master-catalog/default/dw426f3a94/images/hi-res/P_214257820FM.jpg?sw=800&sh=1200&sm=fit&q=90"
                        alt="Producto"
                        className="w-full max-w-sm rounded-lg shadow-md object-cover bg-gray-100 "
                    />
                </div>

                {/* INFORMACIÓN */}
                <div className="flex flex-col justify-between">
                    {/* TITULO */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Título del producto
                        </h3>
                        <small className="text-sm text-gray-500">
                            +143 unidades vendidas
                        </small>
                    </div>

                    {/* PRECIO + COLORES + CANTIDAD */}
                    <div className="space-y-4">
                        {/* PRECIO DINÁMICO */}
                        <span className="text-3xl font-extrabold text-black">
                            ${precio * cantidad}
                        </span>

                        {/* COLORES */}
                        <div>
                            <p className="font-medium text-gray-700 mb-2">
                                Elige un color
                            </p>

                            <div className="flex gap-3">
                                {colores.map((c, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setColor(c)}
                                        className={`
                                            px-3 py-1 rounded-full text-sm border
                                            transition-all 
                                            ${
                                                color === c
                                                    ? "bg-green-600 text-white border-green-700"
                                                    : "bg-gray-200 hover:bg-gray-300 border-gray-300"
                                            }
                                        `}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>

                            {!color && (
                                <p className="text-red-500 text-sm mt-2">
                                    Selecciona un color
                                </p>
                            )}
                        </div>

                        {/* CANTIDAD */}
                        <div>
                            <p className="font-medium text-gray-700 mb-2">
                                Cantidad
                            </p>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={decrementar}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold"
                                >
                                    -
                                </button>

                                <span className="text-xl font-semibold">
                                    {cantidad}
                                </span>

                                <button
                                    onClick={incrementar}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BOTONES */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            disabled={!color}
                            className={`
                                py-3 rounded-lg font-semibold shadow text-white
                                ${
                                    color
                                        ? "bg-gray-600 hover:bg-gray-700"
                                        : "bg-gray-300 cursor-not-allowed"
                                }
                            `}
                        >
                            Comprar ahora
                        </button>

                        <button
                            disabled={!color}
                            className={`
                                py-3 rounded-lg font-semibold shadow
                                ${
                                    color
                                        ? "border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                                        : "border border-gray-300 text-gray-400 cursor-not-allowed bg-transparent"
                                }
                            `}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
