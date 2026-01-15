import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { router } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function CompraModal({ open, onClose, product }) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const handleGuestCheckout = () => {
        // (Opcional) guardar intención
        localStorage.setItem(
            "checkout_intent",
            JSON.stringify({
                product_id: product.id,
                from: "product_modal",
            })
        );

        onClose();

        router.get(route("mainProduct.checkout"), {
            product_id: product.id,
        });
    };

    const handleRegister = () => {
        localStorage.setItem(
            "checkout_intent",
            JSON.stringify({
                product_id: product.id,
                from: "product_modal",
            })
        );

        onClose();
        router.visit("/register");
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white w-full max-w-lg p-6 rounded-2xl relative shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cerrar */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-semibold mb-6">
                            Realiza tu compra
                        </h2>

                        <div className="flex flex-col gap-3">
                            <PrimaryButton
                                type="button"
                                className="py-4"
                                onClick={handleGuestCheckout}
                            >
                                Comprar como invitado
                            </PrimaryButton>

                            <SecondaryButton
                                type="button"
                                className="py-4"
                                onClick={handleRegister}
                            >
                                Crear cuenta | Inisiar secion
                            </SecondaryButton>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
