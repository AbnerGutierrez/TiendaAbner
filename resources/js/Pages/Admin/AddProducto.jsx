import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { useState } from "react";
import Preview from "./AddProductoPartials/Preview";
import FormProduct from "./AddProductoPartials/FormProduct";
export default function AddProducts() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        stock: "",
        price: "",
        image: null,
        features: [
            {
                text: "",
                image: null,
                preview: null,
            },
        ],
        advantages: [
            {
                text: "",
                image: null,
                preview: null,
            },
        ],
    });

    const [preview, setPreview] = useState();

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.products.store"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <AuthenticatedAdminLayout>
                <Head title="Agregar Producto" />
                <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Preview data={data} preview={preview} />
                    <FormProduct
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        submit={submit}
                        setPreview={setPreview}
                    />
                </div>
            </AuthenticatedAdminLayout>
        </>
    );
}
