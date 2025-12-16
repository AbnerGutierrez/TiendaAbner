import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";

export default function AddProducts() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        stock: "",
        price: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("buy.products.store"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <AuthenticatedAdminLayout>
                <Head title="Agregar Producto" />

                <form onSubmit={submit} className="max-w-lg mx-auto mt-10">
                    {/* NOMBRE */}
                    <div>
                        <InputLabel
                            htmlFor="title"
                            value="Titulo del producto"
                        />

                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("title", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* DESCRIPCIÓN */}
                    <div className="mt-4">
                        <InputLabel htmlFor="description" value="Descripción" />

                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            rows={6}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />

                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
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
                    {/* IMAGEN */}
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="image"
                            value="Imagen del producto"
                        />

                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />

                        <InputError message={errors.image} className="mt-2" />
                    </div>
                    {/* BOTÓN */}
                    <div className="mt-6 flex justify-end">
                        <PrimaryButton disabled={processing}>
                            Guardar Producto
                        </PrimaryButton>
                    </div>
                </form>
            </AuthenticatedAdminLayout>
        </>
    );
}
