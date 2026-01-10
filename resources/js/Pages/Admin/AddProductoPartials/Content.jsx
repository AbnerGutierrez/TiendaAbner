import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Content({ data, setData, errors }) {
    const addContent = () => {
        if (data.content.length >= 3) return;

        setData("content", [
            ...data.content,
            { image: null, text: "", preview: null },
        ]);
    };

    const updateText = (index, value) => {
        const updated = [...data.content];
        updated[index].text = value;
        setData("content", updated);
    };

    const updateImage = (index, file) => {
        const updated = [...data.content];
        updated[index].image = file;
        updated[index].preview = file ? URL.createObjectURL(file) : null;

        setData("content", updated);
    };

    const removeContent = (index) => {
        if (data.content.length <= 1) return;
        const updated = data.content.filter((_, i) => i !== index);
        setData("content", updated);
    };

    return (
        <div className="mt-6">
            <InputLabel value="Contenido de la caja (máx. 3)" />

            <div className="space-y-3 mt-2">
                {data.content.map((c, i) => (
                    <div key={i} className="flex gap-3 items-center">
                        {/* TEXTO */}
                        <TextInput
                            type="text"
                            value={c.text}
                            placeholder={`Elemento ${i + 1}`}
                            className="flex-1"
                            onChange={(e) => updateText(i, e.target.value)}
                        />

                        {/* IMAGEN */}
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                    updateImage(i, e.target.files[0])
                                }
                            />

                            <div className="w-14 h-14 border rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
                                {c.preview ? (
                                    <img
                                        src={c.preview}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs text-gray-400">
                                        Img
                                    </span>
                                )}
                            </div>
                        </label>

                        {data.content.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeContent(i)}
                                className="text-red-600 hover:text-red-800"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {data.content.length < 3 && (
                <button
                    type="button"
                    onClick={addContent}
                    className="mt-3 text-sm text-indigo-600 hover:underline"
                >
                    + Agregar elemento
                </button>
            )}

            <InputError message={errors.content} className="mt-2" />
        </div>
    );
}
