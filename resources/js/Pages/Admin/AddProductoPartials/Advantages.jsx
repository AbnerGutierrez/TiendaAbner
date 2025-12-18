import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Advantages({ data, errors, setData }) {
    const addAdvantages = () => {
        setData("advantages", [
            ...data.advantages,
            { text: "", image: null, preview: null },
        ]);
    };

    const updateText = (index, value) => {
        const updated = [...data.advantages];
        updated[index].text = value;
        setData("advantages", updated);
    };

    const updateImage = (index, file) => {
        const updated = [...data.advantages];
        updated[index].image = file;
        updated[index].preview = file ? URL.createObjectURL(file) : null;

        setData("advantages", updated);
    };

    const removeAdvantages = (index) => {
        const updated = data.advantages.filter((_, i) => i !== index);
        setData("advantages", updated);
    };

    return (
        <>
            {/* VENTAJAS */}
            <div className="mt-6">
                <InputLabel value="Características del producto" />

                <div className="space-y-3 mt-2">
                    {data.advantages.map((advantage, index) => (
                        <div key={index} className="flex gap-2">
                            {/* INPUT TEXTO */}
                            <TextInput
                                type="text"
                                value={advantage.text}
                                placeholder={`Característica ${index + 1}`}
                                className="flex-1"
                                onChange={(e) =>
                                    updateText(index, e.target.value)
                                }
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
                                    {advantage.preview ? (
                                        <img
                                            src={advantage.preview}
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

                            {data.advantages.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeAdvantages(index)}
                                    className="px-3 text-red-600 hover:text-red-800"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={addAdvantages}
                    className="mt-3 text-sm text-indigo-600 hover:underline"
                >
                    + Agregar ventaja
                </button>

                <InputError message={errors.advantages} className="mt-2" />
            </div>
        </>
    );
}
