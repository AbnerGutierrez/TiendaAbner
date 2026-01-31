import PayPalButton from "@/Components/PayPalButton";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import axios from "axios";
import { useState } from "react";
import SuccessView from "@/Components/SuccessView";
export default function GuestCheckout({ product }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    });

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [paid, setPaid] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(
                "/guest/mainProduct/createOrder",
                {
                    product_id: product.id,
                    ...form,
                }
            );
            console.log("Respuesta checkout:", data);
            setOrderId(data.id);
        } catch (error) {
            alert("Completa todos los datos correctamente" + error);
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = (details) => {
        console.log("Pago exitoso:", details);
        setPaid(true);
    };
    if (paid) {
        return (
            <GuestBuyLayout>
                <SuccessView product={product} />
            </GuestBuyLayout>
        );
    }
    return (
        <GuestBuyLayout>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-2xl md:text-3xl font-semibold mb-10">
                    Finalizar compra
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* ================= PRODUCTO ================= */}
                    <div className="lg:col-span-1 bg-white rounded-2xl border shadow-sm p-6 space-y-4">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                            Producto
                        </p>

                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="w-full rounded-xl object-cover"
                        />

                        <div>
                            <h2 className="text-lg font-semibold">
                                {product.title}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">
                                {product.description}
                            </p>
                        </div>

                        <div className="border-t pt-4 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${product.price} MXN</span>
                        </div>
                    </div>

                    {/* ================= FORMULARIO ================= */}
                    <div className="lg:col-span-1 bg-white rounded-2xl border shadow-sm p-6 space-y-6">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                            Información de envío
                        </p>

                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Teléfono"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Dirección (calle y número)"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                            />

                            <input
                                type="text"
                                name="address2"
                                placeholder="Referencias (Ej: Porton azul)"
                                value={form.address2}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Ciudad"
                                    value={form.city}
                                    onChange={handleChange}
                                    className="rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                                />

                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Estado"
                                    value={form.state}
                                    onChange={handleChange}
                                    className="rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                                />

                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="Código postal"
                                    value={form.zip}
                                    onChange={handleChange}
                                    className="rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                                />
                            </div>
                            {!orderId && (
                                <button
                                    onClick={createOrder}
                                    disabled={loading || orderId}
                                    className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-50"
                                >
                                    {loading
                                        ? "Procesando..."
                                        : "Continuar al pago"}
                                </button>
                            )}

                            {orderId && (
                                <p className="text-sm text-green-600 text-center mt-4">
                                    ✔ Información guardada, puedes pagar
                                </p>
                            )}
                        </div>
                    </div>

                    {/* ================= PAGO ================= */}
                    {/* PAGO */}
                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        {orderId ? (
                            <PayPalButton
                                orderId={orderId}
                                onSuccess={handlePaymentSuccess}
                            />
                        ) : (
                            <p className="text-gray-500 text-center">
                                Completa tus datos para pagar
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </GuestBuyLayout>
    );
}
