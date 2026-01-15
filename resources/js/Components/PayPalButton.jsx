import { useEffect, useRef } from "react";

export default function PayPalButton({ amount }) {
    const paypalRef = useRef(null);

    useEffect(() => {
        if (!window.paypal || !amount) return;

        // Limpiar botón previo (importante)
        paypalRef.current.innerHTML = "";

        window.paypal
            .Buttons({
                createOrder: async () => {
                    const res = await fetch("/buy/paypal/order", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": document.querySelector(
                                'meta[name="csrf-token"]'
                            ).content,
                        },
                        body: JSON.stringify({
                            amount: amount, // MXN
                        }),
                    });

                    const data = await res.json();
                    return data.id;
                },

                onApprove: async (data) => {
                    const res = await fetch(
                        `/buy/paypal/order/${data.orderID}/capture`,
                        {
                            method: "POST",
                            headers: {
                                "X-CSRF-TOKEN": document.querySelector(
                                    'meta[name="csrf-token"]'
                                ).content,
                            },
                        }
                    );

                    const details = await res.json();
                    alert("Pago completado correctamente");
                    console.log(details);
                },

                onError: (err) => {
                    console.error(err);
                    alert("Error en el pago");
                },
            })
            .render(paypalRef.current);
    }, [amount]); // 👈 MUY IMPORTANTE

    return <div ref={paypalRef}></div>;
}
