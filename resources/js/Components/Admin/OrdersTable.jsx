import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import ModalAtender from "./ModalAtender";

export default function OrdersTable({ orders }) {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGetData = async (order_id) => {
        setOpenModal(true);
        setLoading(true);
        setData(null);

        try {
            const response = await axios.get(route("admin.data", order_id));
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className="mb-10 mx-4 my-4 ">
            <div className=" relative overflow-x-auto bg-white shadow-xs rounded-lg border border-default">
                <table className="w-full text-sm text-center rtl:text-right ">
                    <thead className="text-sm  bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                ID
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Email
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Producto
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Estatus pago
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Estatus compra
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Acciones
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 text-center">
                        {orders.data.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    No hay órdenes registradas
                                </td>
                            </tr>
                        )}

                        {orders.data.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4">{order.id}</td>
                                <td className="px-6 py-4">{order.name}</td>
                                <td className="px-6 py-4">{order.email}</td>
                                <td className="px-6 py-4">
                                    {order.product_id}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 rounded text-xs
                                        ${
                                            order.status === "paid"
                                                ? "bg-green-100 text-green-800"
                                                : order.status === "pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td>pendiente</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center gap-2">
                                        <PrimaryButton
                                            onClick={() =>
                                                handleGetData(order.id)
                                            }
                                        >
                                            Atender
                                        </PrimaryButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}

            {openModal && (
                <ModalAtender
                    isOpen={openModal}
                    loading={loading}
                    data={data} // Los datos que traes de tu API
                    onClose={() => setOpenModal(false)}
                    onAtender={() => {
                        console.log("Atendiendo ticket...");
                        // Tu lógica aquí (ej: update en base de datos)
                    }}
                    onCancelar={() => console.log("Cancelando...")}
                    onContactar={() => console.log("Contactando...")}
                />
            )}

            {/* PAGINACIÓN */}
            <div className="mt-4 flex justify-center gap-1">
                {orders.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url ?? "#"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-3 py-1 rounded text-sm
                            ${
                                link.active
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border text-gray-700 hover:bg-gray-100"
                            }
                            ${!link.url && "opacity-50 cursor-not-allowed"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}
