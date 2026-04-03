import { useEffect, useRef } from "react";
import axios from "axios"; // Importamos axios

export default function PayPalButton({ orderId, onSuccess }) {
    const paypalRef = useRef(null);

    useEffect(() => {
        // 1. Validaciones iniciales
        if (!window.paypal || !orderId || !paypalRef.current) return;

        // 2. Limpiar el contenedor antes de renderizar (evita botones duplicados)
        paypalRef.current.innerHTML = "";

        window.paypal
            .Buttons({
                createOrder: async () => {
                    try {
                        // Con Axios no necesitas configurar headers manualmente para el CSRF
                        // Laravel y Axios ya están "casados" por defecto.
                        const { data } = await axios.post(
                            "/buy/PayPalCreateOrder",
                            {
                                orderId: orderId,
                            },
                        );

                        // PayPal espera que retornes el ID de la orden que generó tu backend
                        return data.id;
                    } catch (error) {
                        // Si el error es 419 o 500, Axios lo captura aquí
                        const message =
                            error.response?.data?.message ||
                            "Error al crear orden";
                        console.error("Error en PayPal CreateOrder:", message);
                        alert("No se pudo iniciar el pago: " + message);
                        throw error;
                    }
                },

                onApprove: async (data) => {
                    try {
                        // Capturamos el pago enviando el ID de PayPal al backend
                        const { data: details } = await axios.post(
                            `/buy/PayPalOrderCapture/${data.orderID}`,
                        );

                        // Si todo sale bien, ejecutamos la función de éxito que viene por props
                        onSuccess?.(details);
                    } catch (error) {
                        console.error("Error al capturar el pago:", error);
                        alert(
                            "El pago se realizó pero hubo un error al registrarlo.",
                        );
                    }
                },

                onError: (err) => {
                    console.error("PayPal Global Error:", err);
                },
            })
            .render(paypalRef.current);

        // Opcional: limpieza al desmontar el componente
        return () => {
            if (paypalRef.current) paypalRef.current.innerHTML = "";
        };
    }, [orderId]); // Se vuelve a ejecutar si el orderId cambia

    return <div ref={paypalRef} className="w-full" />;
}
