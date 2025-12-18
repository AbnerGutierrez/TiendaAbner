import Features from "./Features";
import Advantages from "./Advantages";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
export default function FormProduct({
    data,
    setData,
    errors,
    processing,
    submit,
    setPreview,
}) {
    return (
        <>
            {/* DERECHA - formulario */}
            <form onSubmit={submit} className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Agregar producto</h2>

                {/* TITULO */}
                <div>
                    <InputLabel htmlFor="title" value="Título del producto" />
                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                {/* DESCRIPCIÓN */}
                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Descripción" />

                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        rows={6}
                        className="mt-1 block w-full min-h-[160px] resize-y rounded-lg border-gray-300 bg-gray-50 p-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                {/* PRECIO */}
                <div className="mt-4">
                    <InputLabel htmlFor="price" value="Precio" />
                    <TextInput
                        id="price"
                        type="number"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("price", e.target.value)}
                        required
                    />
                    <InputError message={errors.price} className="mt-2" />
                </div>

                {/* STOCK */}
                <div className="mt-4">
                    <InputLabel htmlFor="stock" value="Stock" />
                    <TextInput
                        id="stock"
                        type="number"
                        name="stock"
                        value={data.stock}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("stock", e.target.value)}
                        required
                    />
                    <InputError message={errors.stock} className="mt-2" />
                </div>

                {/* IMAGEN */}
                <div className="mt-4">
                    <InputLabel htmlFor="image" value="Cambiar imagen" />
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="mt-1 block w-full"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setData("image", file);

                            if (file) {
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />

                    <InputError message={errors.image} className="mt-2" />
                </div>

                <Features data={data} errors={errors} setData={setData} />

                <Advantages data={data} errors={errors} setData={setData} />

                {/* BOTÓN */}
                <div className="mt-6 flex justify-end">
                    <PrimaryButton disabled={processing}>
                        Agregar producto
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
