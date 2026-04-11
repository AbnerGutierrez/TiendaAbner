import { useState } from "react";

export default function PreguntasF() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "¿Cuánto tarda el envío?",
            answer: "El envío tarda entre 2 y 5 días hábiles dependiendo de tu ubicación.",
        },
        {
            question: "¿El envío tiene costo?",
            answer: "El envío es completamente gratis en todos nuestros pedidos.",
        },
        {
            question: "¿Puedo devolver mi producto?",
            answer: "Sí, tienes hasta 30 días para solicitar una devolución si el producto cumple las condiciones.",
        },
        {
            question: "¿Mis pagos son seguros?",
            answer: "Sí, todos los pagos están protegidos con cifrado y plataformas de pago seguras.",
        },
    ];

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-black mb-16">
            <div className="max-w-3xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 rounded-xl p-5 cursor-pointer hover:bg-gray-800 transition"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-white">
                                    {faq.question}
                                </h3>

                                <span className="text-xl text-gray-400">
                                    {open === index ? "−" : "+"}
                                </span>
                            </div>

                            {open === index && (
                                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
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