import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import FormSection from "../FormSection";

export default function Solutions({ data, errors, setData }) {
    const addSolution = () => {
        setData("solutions", [
            ...data.solutions,
            { image: null, title: "", description: "", preview: null },
        ]);
    };

    const updateField = (index, field, value) => {
        const updated = [...data.solutions];
        updated[index][field] = value;
        setData("solutions", updated);
    };

    const updateImage = (index, file) => {
        const updated = [...data.solutions];
        updated[index].image = file;
        updated[index].preview = file ? URL.createObjectURL(file) : null;
        setData("solutions", updated);
    };

    const removeSolution = (index) => {
        setData(
            "solutions",
            data.solutions.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="mt-6">
            <InputLabel value="Problemas / Soluciones" />

            <div className="space-y-4 mt-3">
                {data.solutions.map((s, i) => (
                    <FormSection key={i} title={`Solución ${i + 1}`}>
                        <TextInput
                            placeholder="Título"
                            value={s.title}
                            onChange={(e) =>
                                updateField(i, "title", e.target.value)
                            }
                        />

                        <textarea
                            className="mt-2 w-full rounded-md border-gray-300"
                            placeholder="Descripción"
                            value={s.description}
                            onChange={(e) =>
                                updateField(i, "description", e.target.value)
                            }
                        />

                        <input
                            type="file"
                            className="mt-2"
                            onChange={(e) => updateImage(i, e.target.files[0])}
                        />

                        <button
                            type="button"
                            onClick={() => removeSolution(i)}
                            className="text-red-500 text-sm mt-2"
                        >
                            Eliminar
                        </button>
                    </FormSection>
                ))}
            </div>

            <button
                type="button"
                onClick={addSolution}
                className="mt-4 text-sm text-indigo-600"
            >
                + Agregar solución
            </button>
        </div>
    );
}
