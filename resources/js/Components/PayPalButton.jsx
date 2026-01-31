import { useEffect, useRef } from "react";

export default function PayPalButton({ orderId, onSuccess }) {
    const paypalRef = useRef(null);

    useEffect(() => {
        if (!window.paypal || !orderId || !paypalRef.current) return;

        paypalRef.current.innerHTML = "";

        window.paypal
            .Buttons({
                createOrder: async () => {
                    const res = await fetch("/guest/paypal/createOorder", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": document.querySelector(
                                'meta[name="csrf-token"]'
                            )?.content,
                        },
                        body: JSON.stringify({ orderId }),
                    });

                    if (!res.ok) {
                        throw new Error("Error creando la orden PayPal");
                    }

                    const data = await res.json();
                    return data.id;
                },

                onApprove: async (data) => {
                    const res = await fetch(
                        `/guest/paypal/order/${data.orderID}/capture`,
                        {
                            method: "POST",
                            headers: {
                                "X-CSRF-TOKEN": document.querySelector(
                                    'meta[name="csrf-token"]'
                                )?.content,
                            },
                        }
                    );

                    if (!res.ok) {
                        throw new Error("Error capturando el pago");
                    }

                    const details = await res.json();

                    onSuccess?.(details);
                },

                onError: (err) => {
                    console.error("PayPal error:", err);
                    alert("Ocurrió un error con PayPal");
                },
            })
            .render(paypalRef.current);
    }, [orderId]);

    return <div ref={paypalRef} />;
}
