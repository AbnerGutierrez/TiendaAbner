import { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import ModalAddInfo from "./ModalAddInfo";

export default function ModalAtender({
    data,
    isOpen,
    loading,
    onClose,
    onCancelar,
    onEliminar,
}) {
    if (!isOpen) return null;
    const [openModalAddInfo, setOpenModalAddInfo] = useState(false);
    console.log(data);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Fondo con desenfoque */}
            <div
                className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Contenedor Principal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden z-10 animate-in fade-in zoom-in duration-200">
                {/* Cabecera */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">
                            Detalles del Ticket
                        </h3>
                        {!loading && data && (
                            <span className="text-xs font-mono text-gray-600 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">
                                ID: #{data.id}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-light"
                    >
                        &times;
                    </button>
                </div>

                {/* Cuerpo del Modal */}
                <div className="p-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-600 mb-4"></div>
                            <p className="text-gray-500 text-sm">
                                Cargando información...
                            </p>
                        </div>
                    ) : data ? (
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600 w-1/3">
                                            Cliente
                                        </th>
                                        <td className="px-4 py-3 text-gray-800">
                                            {data.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600 w-1/3">
                                            Contacto
                                        </th>
                                        <td className="px-4 py-3 text-gray-800">
                                            {data.email} | {data.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Artículo
                                        </th>
                                        <td className="px-4 py-3 text-gray-800 font-medium">
                                            {data.product.description}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Color
                                        </th>
                                        <td className="px-4 py-3 text-gray-800 font-medium">
                                            <div className="flex flex-wrap gap-3">
                                                {data.details.map((detail) => (
                                                    <div
                                                        key={detail.id}
                                                        className="flex items-center gap-2"
                                                    >
                                                        {/* Indicador de color */}
                                                        <span
                                                            className="w-5 h-5 rounded-full border border-gray-300"
                                                            style={{
                                                                backgroundColor:
                                                                    detail.color
                                                                        .color,
                                                            }}
                                                        ></span>

                                                        {/* Nombre del color */}
                                                        <span>
                                                            {
                                                                detail.color
                                                                    .description
                                                            }
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Promoción
                                        </th>

                                        <td className="px-4 py-3 text-gray-800 font-medium">
                                            {
                                                data.details[0].promotion
                                                    .promotion
                                            }

                                            {data.details[0].promotion
                                                .promotion ===
                                                "moreforless" && (
                                                <div className="flex gap-2 text-blue-600 font-semibold">
                                                    <span>
                                                        {
                                                            data.details[0]
                                                                .promotion
                                                                .quantity
                                                        }
                                                    </span>
                                                    <span>x</span>
                                                    <span>
                                                        $
                                                        {
                                                            data.details[0]
                                                                .promotion.price
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Dirección
                                        </th>
                                        <td className="px-4 py-3 text-gray-800 text-xs">
                                            {data.city || "Sin ciudad"}{" "}
                                            {data.state || "Sin estado"}{" "}
                                            {data.zip || "Sin CP"}{" "}
                                            {data.address ||
                                                "Sin dirección"}{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Referencias
                                        </th>
                                        <td className="px-4 py-3 text-gray-800 text-xs">
                                            {data.address2 ||
                                                "Sin dirección"}{" "}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="px-4 py-3 bg-gray-50 text-left font-semibold text-gray-600">
                                            Total
                                        </th>
                                        <td className="px-4 py-3 text-lg font-bold text-green-600">
                                            ${data.amount || "0.00"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-red-500">
                            No se encontraron datos.
                        </p>
                    )}
                </div>

                {/* Pie con Botones de Acción */}
                <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row gap-2 justify-center border-t border-gray-100">
                    <SecondaryButton
                     onClick={() => setOpenModalAddInfo(true)}>
                        Despachar
                    </SecondaryButton>
                    <SecondaryButton onClick={onCancelar}>
                        Cancelar
                    </SecondaryButton>
                    <SecondaryButton onClick={onEliminar}>
                        Imprimir
                    </SecondaryButton>
                </div>
            </div>
            {openModalAddInfo && (
                <ModalAddInfo
                orderId={data.id}
                isOpen={openModalAddInfo}
                onClose={() => setOpenModalAddInfo(false)} />
            )}
        </div>
    );
}
