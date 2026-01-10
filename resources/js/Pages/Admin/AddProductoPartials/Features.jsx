import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function Features({ data, errors, setData }) {
    const features = data.features;

    const addItem = () => {
        if (features.items.length >= 4) return;

        setData("features", {
            ...features,
            items: [...features.items, { title: "", description: "" }],
        });
    };

    const removeItem = (index) => {
        if (features.items.length <= 1) return;

        const newItems = features.items.filter((_, i) => i !== index);

        setData("features", {
            ...features,
            items: newItems,
        });
    };

    const updateItem = (index, field, value) => {
        const newItems = features.items.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );

        setData("features", {
            ...features,
            items: newItems,
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setData("features", {
            ...features,
            image: file,
            preview: URL.createObjectURL(file),
        });
    };

    return (
        <div className="space-y-6">
            {/* IMAGEN */}
            <div>
                <InputLabel value="Imagen de características" />
                <input type="file" accept="image/*" onChange={handleImage} />

                {features.preview && (
                    <img
                        src={features.preview}
                        alt="Preview"
                        className="mt-3 w-40 rounded"
                    />
                )}
            </div>

            {/* ITEMS */}
            <div className="space-y-4">
                {features.items.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded p-4 space-y-2 relative"
                    >
                        <TextInput
                            value={item.title}
                            onChange={(e) =>
                                updateItem(index, "title", e.target.value)
                            }
                            placeholder="Título (ej: Duraderos)"
                        />
                        {features.items.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="text-red-500 text-sm"
                            >
                                Eliminar
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* CONTROLES */}
            <button
                type="button"
                onClick={addItem}
                disabled={features.items.length >= 4}
                className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
            >
                Agregar característica
            </button>
        </div>
    );
}
