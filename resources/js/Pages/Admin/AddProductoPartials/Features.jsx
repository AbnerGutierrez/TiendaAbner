import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Features({ data, errors, setData }) {
    const addFeature = () => {
        setData("features", [
            ...data.features,
            { text: "", image: null, preview: null },
        ]);
    };

    const updateText = (index, value) => {
        const updated = [...data.features];
        updated[index].text = value;
        setData("features", updated);
    };

    const updateImage = (index, file) => {
        const updated = [...data.features];
        updated[index].image = file;
        updated[index].preview = file ? URL.createObjectURL(file) : null;

        setData("features", updated);
    };

    const removeFeature = (index) => {
        const updated = data.features.filter((_, i) => i !== index);
        setData("features", updated);
    };

    return (
        <div className="mt-6">
            <InputLabel value="Características del producto" />

            <div className="space-y-4 mt-3">
                {data.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        {/* INPUT TEXTO */}
                        <TextInput
                            type="text"
                            value={feature.text}
                            placeholder={`Característica ${index + 1}`}
                            className="flex-1"
                            onChange={(e) => updateText(index, e.target.value)}
                        />

                        {/* INPUT IMAGEN */}
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                    updateImage(index, e.target.files[0])
                                }
                            />

                            <div className="w-14 h-14 border rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
                                {feature.preview ? (
                                    <img
                                        src={feature.preview}
                                        alt="preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs text-gray-400">
                                        Img
                                    </span>
                                )}
                            </div>
                        </label>

                        {/* ELIMINAR */}
                        {data.features.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeFeature(index)}
                                className="text-red-600 hover:text-red-800 px-2"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={addFeature}
                className="mt-3 text-sm text-indigo-600 hover:underline"
            >
                + Agregar característica
            </button>

            <InputError message={errors.features} className="mt-2" />
        </div>
    );
}
