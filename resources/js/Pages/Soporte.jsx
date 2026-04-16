import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

export default function Soporte() {
    const { auth } = usePage().props;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route("products.soporte.send"), form, {
            onSuccess: () => {
                setEnviado(true);
                setForm({
                    nombre: "",
                    email: "",
                    asunto: "",
                    mensaje: "",
                });
            },
        });
    };

    return (
        <Layout user={auth.user}>
            <div className="max-w-xl mx-auto p-6">
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Estamos para ayudarte
                    </h2>

                    {enviado && (
                        <p className="mb-4 text-green-600">
                            Tu mensaje ha sido enviado correctamente.
                        </p>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            value={form.email}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />

                        <input
                            type="text"
                            name="asunto"
                            placeholder="Asunto"
                            value={form.asunto}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />

                        <textarea
                            name="mensaje"
                            placeholder="Describe tu problema + Numero de pedido :)"
                            value={form.mensaje}
                            onChange={handleChange}
                            className="border p-2 rounded h-32"
                            required
                        />

                        <PrimaryButton type="submit" className="text-center">
                            Enviar mensaje
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
