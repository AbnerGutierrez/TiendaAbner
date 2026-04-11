import { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import axios from "axios";

export default function ModalAddInfo({ isOpen, onClose, orderId, onSuccess }) {
    const [tracking, setTracking] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            setLoading(true);

            await axios.post(`/admin/atender/${orderId}`, {
                tracking,
                company,
            });

            onSuccess();
            onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="fixed inset-0 bg-gray-900/60"
                onClick={onClose}
            ></div>

            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6 z-10">
                <h2 className="text-lg font-bold mb-4">Información de envío</h2>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Número de rastreo"
                        value={tracking}
                        onChange={(e) => setTracking(e.target.value)}
                        className="border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Compañía (DHL, Fedex, Estafeta...)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="border rounded p-2"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-6">
                    <SecondaryButton onClick={onClose}>
                        Cancelar
                    </SecondaryButton>

                    <PrimaryButton onClick={handleSubmit} disabled={loading}>
                        {loading ? "Enviando..." : "Despachar"}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
