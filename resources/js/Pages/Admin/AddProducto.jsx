import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { useEffect, useState } from "react";
import Preview from "./AddProductoPartials/Preview";
import FormProduct from "./AddProductoPartials/FormProduct";
export default function AddProducts() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        stock: "",
        price: "",
        image: null,
        advantages: [
            {
                text: "",
                image: null,
                preview: null,
            },
        ],
        variants: [
            {
                text: "",
            },
        ],
        solutions: [
            {
                imagen: null,
                title: "",
                description: "",
                preview: null,
            },
        ],
        features: {
            image: null,
            preview: null,
            items: [{ title: "", description: "" }],
        },
        content: [
            {
                image: null,
                preview: null,
                text: "",
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

                <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* PREVIEW – 70% */}
                    <div className="md:col-span-8 sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto">
                        <Preview data={data} preview={preview} />
                    </div>

                    {/* FORMULARIO – 30% */}
                    <div className="md:col-span-4">
                        <FormProduct
                            data={data}
                            setData={setData}
                            errors={errors}
                            processing={processing}
                            submit={submit}
                            setPreview={setPreview}
                        />
                    </div>
                </div>
            </AuthenticatedAdminLayout>
        </>
    );
}
