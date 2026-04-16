import { useState } from "react";

export default function PreguntasF() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "¿Cuánto tarda el envío?",
            answer: "El envío tarda entre 5 y 10 días hábiles dependiendo de tu ubicación. Para zonas remotas puede tardar hasta 15 días.",
        },
        {
            id: 2,
            question: "¿El envío tiene costo?",
            answer: "El envío es completamente gratis en todos nuestros pedidos sin monto mínimo de compra.",
        },
        {
            id: 3,
            question: "¿Puedo devolver mi producto?",
            answer: "Sí, tienes hasta 30 días para solicitar una devolución si el producto cumple las condiciones. El reembolso se procesa en 5-7 días hábiles.",
        },
        {
            id: 4,
            question: "¿Mis pagos son seguros?",
            answer: "Sí, todos los pagos están protegidos con cifrado SSL y utilizamos plataformas de pago seguras como Stripe y PayPal.",
        },
        {
            id: 5,
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y transferencia bancaria.",
        },
        {
            id: 6,
            question: "¿Hacen envíos internacionales?",
            answer: "Sí, realizamos envíos a toda Latinoamérica y Estados Unidos. Los tiempos y costos varían según el país de destino.",
        },
        {
            id: 7,
            question: "¿Cómo puedo rastrear mi pedido?",
            answer: "Una vez que tu pedido sea enviado, recibirás un correo con un número de guía para rastrearlo en tiempo real.",
        },
        {
            id: 8,
            question: "¿Ofrecen garantía en sus productos?",
            answer: "Todos nuestros productos tienen garantía de 1 año contra defectos de fabricación.",
        },
        {
            id: 9,
            question: "¿Puedo cambiar o cancelar mi pedido después de comprar?",
            answer: "Sí, tienes hasta 1 hora después de realizar la compra para solicitar cambios o cancelaciones. Contacta a nuestro soporte inmediatamente",
        },
        {
            id: 10,
            question: "¿Tienen tienda física?",
            answer: "Actualmente operamos 100% en línea, pero pronto abriremos nuestras primeras sucursales en CDMX.",
        },
    ];

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-gray-700 rounded-xl p-5 cursor-pointer hover:bg-gray-800 transition-all duration-300"
                            onClick={() => toggle(faq.id)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-white text-base md:text-lg">
                                    {faq.question}
                                </h3>

                                <span className="text-xl text-gray-400 font-bold">
                                    {open === faq.id ? "−" : "+"}
                                </span>
                            </div>

                            {open === faq.id && (
                                <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
