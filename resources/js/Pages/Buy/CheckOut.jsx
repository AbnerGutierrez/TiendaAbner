import PayPalButton from "@/Components/PayPalButton";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import axios from "axios";
import { useState } from "react";
import SuccessView from "@/Components/SuccessView";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
export default function checkOut({ product }) {
    const { auth } = usePage().props;
    //Descuento
    const discount =
        product.promotion?.promotion === "discount"
            ? product.price * (product.promotion.value / 100)
            : 0;
    const finalPrice = product.price - discount;
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        color: product.color,
        product: product.promotion,
    });

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [paid, setPaid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });

        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const createOrder = async () => {
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const { data } = await axios.post("/buy/CreateOrder", {
                product_id: product.id,
                ...form,
            });

            setOrderId(data.id);
        } catch (error) {
            alert("Error al crear la orden");
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = (details) => {
        console.log("Pago exitoso:", details);
        setPaid(true);
    };

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!form.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email inválido";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "El teléfono es obligatorio";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Debe tener 10 dígitos";
        }

        if (!form.address.trim()) {
            newErrors.address = "La dirección es obligatoria";
        }
        if (!form.address2.trim()) {
            newErrors.address2 = "La referencia es obligatoria";
        }

        if (!form.city.trim()) {
            newErrors.city = "La ciudad es obligatoria";
        }

        if (!form.state.trim()) {
            newErrors.state = "El estado es obligatorio";
        }

        if (!form.zip.trim()) {
            newErrors.zip = "Código postal obligatorio";
        } else if (!/^[0-9]{5}$/.test(form.zip)) {
            newErrors.zip = "Código postal inválido";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    if (paid) {
        return (
            <Layout user={auth.user}>
                <SuccessView product={product} finalPrice={finalPrice} />
            </Layout>
        );
    }
    return (
        <Layout user={auth.user}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-2xl md:text-3xl font-semibold mb-10">
                    Finalizar compra
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* ================= PRODUCTO ================= */}
                    <div className="lg:col-span-1 bg-white rounded-2xl border shadow-sm p-6 space-y-4">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                            Caracteristicas de la compra
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

                        <div className="border-t pt-4 flex justify-between items-center font-semibold">
                            <span>Color</span>

                            <div className="flex items-center gap-2">
                                <div
                                    className="w-5 h-5 rounded-full border"
                                    style={{
                                        backgroundColor: product.color.color,
                                    }}
                                ></div>

                                <span>{product.color.description}</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 flex justify-between font-semibold">
                            <span>Precio</span>
                            <span>${product.price} MXN</span>
                        </div>
                        {product.promotion &&
                            product.promotion.promotion === "discount" && (
                                <>
                                    <div className="border-t pt-4 flex justify-between text-red-500">
                                        <span>
                                            Descuento ({product.promotion.value}
                                            %)
                                        </span>
                                        <span>
                                            - ${discount.toFixed(2)} MXN
                                        </span>
                                    </div>

                                    <div className="border-t pt-4 flex justify-between font-bold text-green-700">
                                        <span>Total con descuento</span>
                                        <span>
                                            ${finalPrice.toFixed(2)} MXN
                                        </span>
                                    </div>
                                </>
                            )}
                        {product.promotion &&
                            product.promotion.promotion === "2x1" && (
                                <>
                                    <div className="border-t pt-4 flex justify-between text-blue-500">
                                        <span>Promocion</span>
                                        <span>
                                            {product.promotion.promotion}
                                        </span>
                                    </div>

                                    <div className="border-t pt-4 flex justify-between font-bold text-green-700">
                                        <span>Total</span>
                                        <span>
                                            ${finalPrice.toFixed(2)} MXN
                                        </span>
                                    </div>
                                </>
                            )}
                    </div>

                    {/* ================= FORMULARIO ================= */}
                    <div className="lg:col-span-1 bg-white rounded-2xl border shadow-sm p-6 space-y-6">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                            Información de envío
                        </p>

                        <div className="space-y-4">
                            <p className="text-sm text-gray-500  tracking-wider">
                                - Información de contacto
                            </p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                value={form.name}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={form.email}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email}
                                </p>
                            )}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Teléfono"
                                value={form.phone}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phone}
                                </p>
                            )}
                            <p className="text-sm text-gray-500  tracking-wider">
                                - Información de envío
                            </p>
                            <input
                                type="text"
                                name="address"
                                placeholder="Dirección (calle y número)"
                                value={form.address}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.address ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.address}
                                </p>
                            )}
                            <input
                                type="text"
                                name="address2"
                                placeholder="Referencias (Ej: Porton azul)"
                                value={form.address2}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.address2 ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.address2 && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.address2}
                                </p>
                            )}

                            <input
                                type="text"
                                name="city"
                                placeholder="Ciudad"
                                value={form.city}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.city ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.city && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.city}
                                </p>
                            )}
                            <input
                                type="text"
                                name="state"
                                placeholder="Estado"
                                value={form.state}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.state ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.state && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.state}
                                </p>
                            )}
                            <input
                                type="text"
                                name="zip"
                                placeholder="Código postal"
                                value={form.zip}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:outline-none 
                                ${errors.zip ? "border-red-500 focus:ring-red-500" : "focus:ring-black"}`}
                            />
                            {errors.zip && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.zip}
                                </p>
                            )}

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
        </Layout>
    );
}
