import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function AddFeature({ data, setData }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const addFeature = () => {
        if (!title || !description || !image) return;

        const newFeature = {
            title,
            description,
            image,
        };

        setData("features", [...(data.features || []), newFeature]);

        // reset
        setTitle("");
        setDescription("");
        setImage(null);
    };

    const removeFeature = (index) => {
        const newFeatures = [...data.features];
        newFeatures.splice(index, 1);
        setData("features", newFeatures);
    };

    return (
        <div>
            <InputLabel value="Características (mínimo 4)" />

            {/* Inputs */}
            <div className="flex flex-col gap-2 border rounded p-3 bg-gray-50">
                <TextInput
                    placeholder="Título (Ej: Resistente al agua)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Descripción de la característica"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded px-2 py-1"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button
                    type="button"
                    onClick={addFeature}
                    className="bg-green-600 text-white px-3 py-1 rounded w-fit"
                >
                    Agregar
                </button>
            </div>

            {/* Lista */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {(data.features || []).map((f, index) => (
                    <div key={index} className="border p-2 rounded relative">
                        {f.image && (
                            <img
                                src={URL.createObjectURL(f.image)}
                                alt=""
                                className="w-full h-24 object-cover rounded"
                            />
                        )}

                        <p className="text-sm font-semibold mt-2">{f.title}</p>

                        <p className="text-xs text-gray-600">{f.description}</p>

                        <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
