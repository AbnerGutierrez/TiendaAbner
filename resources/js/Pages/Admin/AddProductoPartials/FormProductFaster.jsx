import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useEffect, useState } from "react";

export default function FormProductFaster({ data, setData, errors }) {
    const [previews, setPreviews] = useState([]);

    // Generar previews cuando cambian las imágenes
    useEffect(() => {
        if (!data.images || data.images.length === 0) {
            setPreviews([]);
            return;
        }

        const urls = data.images.map((file) =>
            URL.createObjectURL(file)
        );

        setPreviews(urls);

        // Limpieza de memoria
        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [data.images]);

    // ✅ AQUÍ ESTÁ LA CLAVE
    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setData("images", [...data.images, ...files]);
    };

    const removeImage = (index) => {
        const newImages = [...data.images];
        newImages.splice(index, 1);

        setData("images", newImages);
    };

    return (
        <div className="space-y-6">
            {/* TÍTULO */}
            <div>
                <InputLabel value="Título" />
                <TextInput
                    className="w-full"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <InputError message={errors.title} />
            </div>

            {/* DESCRIPCIÓN */}
            <div>
                <InputLabel value="Descripción" />
                <textarea
                    className="w-full rounded border-gray-300"
                    rows="4"
                    value={data.description}
                    onChange={(e) =>
                        setData("description", e.target.value)
                    }
                />
                <InputError message={errors.description} />
            </div>

            {/* PRECIO */}
            <div>
                <InputLabel value="Precio" />
                <TextInput
                    type="number"
                    className="w-full"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                />
                <InputError message={errors.price} />
            </div>

            {/* STOCK */}
            <div>
                <InputLabel value="Stock" />
                <TextInput
                    type="number"
                    className="w-full"
                    value={data.stock}
                    onChange={(e) => setData("stock", e.target.value)}
                />
                <InputError message={errors.stock} />
            </div>

            {/* IMÁGENES */}
            <div>
                <InputLabel value="Imágenes del producto" />

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImagesChange}
                    className="mt-2"
                />

                <InputError message={errors.images} />
            </div>

            {/* PREVIEW DE IMÁGENES */}
            {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previews.map((src, index) => (
                        <div
                            key={index}
                            className="relative border rounded overflow-hidden"
                        >
                            <img
                                src={src}
                                alt="Preview"
                                className="w-full h-32 object-cover"
                            />

                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
