import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
export default function Variants({ data, errors, setData }) {
    const addVariante = () => {
        setData("variants", [...data.variants, { text: "", preview: null }]);
    };
    const updateText = (index, value) => {
        const updated = [...data.variants];
        updated[index].text = value;
        setData("variants", updated);
    };

    const removeVariant = (index) => {
        const updated = data.variants.filter((_, i) => i !== index);
        setData("variants", updated);
    };

    return (
        <>
            <div className="mt-6">
                <InputLabel value="Variantes del producto" />
                <div className="space-y-3 mt-2">
                    {data.variants.map((variant, index) => (
                        <div key={index} className="flex gap-2">
                            {/* INPUT VARIANTE */}
                            <TextInput
                                type="text"
                                value={variant.text}
                                placeholder={`Variante ${index + 1}`}
                                className="flex-1"
                                onChange={(e) =>
                                    updateText(index, e.target.value)
                                }
                            />

                            {data.variants.length >= 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeVariant(index)}
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
                    onClick={addVariante}
                    className="mt-3 text-sm text-indigo-600 hover:underline"
                >
                    + Agregar variante
                </button>

                <InputError message={errors.variants} className="mt-2" />
            </div>
        </>
    );
}
