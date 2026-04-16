import { Link, router } from "@inertiajs/react";
export default function Footer() {
    return (
        <footer className="container mx-auto border-t border-gray-200 bg-white text-black py-6">
            <section className="py-20 bg-black text-white text-center">
                {/* Métodos de pago */}
                <div className="flex justify-center items-center gap-3 mb-4 flex-wrap">
                    {/* VISA */}
                    <svg viewBox="0 0 48 32" className="h-6">
                        <rect width="48" height="32" rx="4" fill="#1A1F71" />
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            fontSize="12"
                            fill="white"
                            fontWeight="bold"
                        >
                            VISA
                        </text>
                    </svg>

                    {/* Mastercard */}
                    <svg viewBox="0 0 48 32" className="h-6">
                        <rect width="48" height="32" rx="4" fill="#fff" />
                        <circle cx="20" cy="16" r="8" fill="#EB001B" />
                        <circle cx="28" cy="16" r="8" fill="#F79E1B" />
                    </svg>

                    {/* PayPal */}
                    <svg viewBox="0 0 48 32" className="h-6">
                        <rect width="48" height="32" rx="4" fill="#003087" />
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            fontWeight="bold"
                        >
                            PayPal
                        </text>
                    </svg>

                    {/* Apple Pay */}
                    <svg viewBox="0 0 48 32" className="h-6">
                        <rect width="48" height="32" rx="4" fill="black" />
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                        >
                             Pay
                        </text>
                    </svg>

                    {/* Google Pay */}
                    <svg viewBox="0 0 48 32" className="h-6">
                        <rect width="48" height="32" rx="4" fill="#4285F4" />
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                        >
                            G Pay
                        </text>
                    </svg>
                </div>

                {/* Texto footer */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} lunadev.mx :).{" "}
                    <a
                        className="font-medium hover:underline"
                        href="/politica_privacidad"
                    >
                        Política de privacidad
                    </a>{" "}
                    |{" "}
                    <a
                        className="font-medium hover:underline"
                        href="/ventas_reembolsos"
                    >
                        Ventas y reembolsos
                    </a>{" "}
                    |{" "}
                    <a
                        className="font-medium hover:underline"
                        href="/aviso_legal"
                    >
                        Aviso legal
                    </a>
                </div>
            </section>
        </footer>
    );
}
