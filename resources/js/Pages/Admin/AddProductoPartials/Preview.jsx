import { useState } from "react";

export default function Preview({ data, preview }) {
    const [currentSolution, setCurrentSolution] = useState(0);

    const hasSolutions = data.solutions.length > 0;
    const solution = data.solutions[currentSolution];

    const prev = () => {
        setCurrentSolution(
            (currentSolution - 1 + data.solutions.length) %
                data.solutions.length
        );
    };

    const next = () => {
        setCurrentSolution((currentSolution + 1) % data.solutions.length);
    };

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* HERO PRODUCTO */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        {data.title || "Nombre del producto"}
                    </h1>

                    {data.variants.length > 0 && (
                        <div className="flex gap-2 mt-2">
                            {data.variants.map((variant, i) => (
                                <div
                                    key={i}
                                    className="px-3 py-1 bg-gray-200 rounded-full text-xs"
                                >
                                    {variant.text}
                                </div>
                            ))}
                        </div>
                    )}

                    <p className="text-gray-600 mt-3">
                        {data.description ||
                            "Descripción del producto aparecerá aquí"}
                    </p>

                    <p className="text-2xl font-semibold mt-4">
                        ${data.price || "0.00"}
                    </p>

                    <button className="mt-4 px-4 py-2 bg-black text-white rounded">
                        Comprar ahora
                    </button>
                </div>

                <div className="flex justify-center">
                    {preview ? (
                        <img
                            src={preview}
                            className="max-w-xs object-contain rounded-xl"
                        />
                    ) : (
                        <div className="w-64 h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                            Imagen
                        </div>
                    )}
                </div>
            </section>
            {/* PROBLEMAS / SOLUCIÓN */}
            <section className="relative bg-white py-10 px-6 border-t">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* IMAGEN */}
                    <div>
                        {solution?.preview ? (
                            <img
                                src={solution.preview}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 rounded-lg" />
                        )}
                    </div>

                    {/* TEXTO */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-center">
                            {solution?.title || "Titulo"}
                        </h3>

                        <p className="text-gray-600 text-center">
                            {solution?.description || "Descripcion breve."}
                        </p>
                    </div>
                </div>

                {/* FLECHAS */}
                {data.solutions.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-black"
                        >
                            ‹
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-black"
                        >
                            ›
                        </button>
                    </>
                )}
            </section>
            {/* CARACTERÍSTICAS */}
            <section className="bg-white  py-12 mx-auto">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* IMAGEN */}
                    <div className="flex justify-center">
                        {data.features.preview ? (
                            <img
                                src={data.features.preview}
                                className="max-w-xs"
                            />
                        ) : (
                            <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                Imagen
                            </div>
                        )}
                    </div>

                    {/* LISTA DE CARACTERÍSTICAS */}
                    <div className="space-y-4 text-xl font-semibold">
                        {data.features.items
                            .filter((f) => f.title)
                            .slice(0, 4)
                            .map((f, i) => (
                                <div key={i}>{f.title}</div>
                            ))}
                    </div>
                </div>
            </section>
            {/* CONTENIDO EN CAJA */}
            <section className="bg-white py-12 border-t">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-10">
                        ¿Qué hay en la caja?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {data.content
                            .filter((c) => c.text)
                            .slice(0, 3)
                            .map((c, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center space-y-4"
                                >
                                    {c.preview ? (
                                        <img
                                            src={c.preview}
                                            className="w-32 h-32 object-contain"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 bg-gray-100" />
                                    )}

                                    <p className="text-xs font-semibold uppercase text-center">
                                        {c.text}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            {/* PRODUCTO BUY */}
            {/* COMPRA PROTEGIDA */}
            {/* OPINIONES */}
        </div>
    );
}
