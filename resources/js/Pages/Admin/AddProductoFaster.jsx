import { useForm } from "@inertiajs/react";
import FormProductFaster from "./AddProductoPartials/FormProductFaster";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";

export default function AddProductFaster() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        stock: "",
        price: "",
        images: [],
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.products.storeFaster"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedAdminLayout>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Agregar producto</h1>

                <form onSubmit={submit}>
                    <FormProductFaster
                        data={data}
                        setData={setData}
                        errors={errors}
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="mt-6 bg-black text-white px-6 py-2 rounded"
                    >
                        Guardar producto
                    </button>
                </form>
            </div>
        </AuthenticatedAdminLayout>
    );
}
