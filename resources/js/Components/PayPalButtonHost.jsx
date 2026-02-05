import axios from "axios";
import { useEffect, useRef } from "react";

export default function PayPalButtonHost({ orderId, onSuccess }) {
    const paypalRef = useRef(null);
    const paypalOrderIdRef = useRef(null);

    useEffect(() => {
        if (!window.paypal || !orderId || !paypalRef.current) return;

        paypalRef.current.innerHTML = "";

        window.paypal
            .Buttons({
                createOrder: async () => {
                    if (paypalOrderIdRef.current) {
                        return paypalOrderIdRef.current;
                    }

                    const { data } = await axios.post(
                        "/host/paypal/createOorder",
                        { orderId }
                    );

                    paypalOrderIdRef.current = data.id;
                    return data.id;
                },

                onApprove: async (data) => {
                    const res = await axios.post(
                        `/host/paypal/order/${data.orderID}/capture`
                    );

                    onSuccess?.(res.data);
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
