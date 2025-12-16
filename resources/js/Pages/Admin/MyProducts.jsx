import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faPenSquare,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "@/Components/ButtonIcon";

export default function ({ productos }) {
    return (
        <>
            <AuthenticatedAdminLayout>
                <div className="w-full max-w-5xl mx-auto p-4">
                    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default  ">
                        <table className="w-full text-sm text-left rtl:text-right text-body">
                            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Nombre del producto
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Descripción
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        precio
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Stock
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((producto) => (
                                    <tr
                                        key={producto.id}
                                        className="bg-neutral-primary border-b border-default"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            {producto.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {producto.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {producto.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {producto.stock}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <ButtonIcon
                                                metodo={"get"}
                                                title="Ver"
                                                color="blue"
                                                ruta={route(
                                                    "admin.products.show",
                                                    producto.id
                                                )}
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </ButtonIcon>
                                            <ButtonIcon
                                                metodo={"get"}
                                                title="Editar"
                                                color="yellow"
                                                ruta={route(
                                                    "admin.products.edit",
                                                    producto.id
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPenSquare}
                                                />
                                            </ButtonIcon>
                                            <ButtonIcon
                                                metodo={"delete"}
                                                title={"Eliminar"}
                                                color="red"
                                                ruta={route(
                                                    "admin.products.delete",
                                                    producto.id
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashCan}
                                                />
                                            </ButtonIcon>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AuthenticatedAdminLayout>
        </>
    );
}
