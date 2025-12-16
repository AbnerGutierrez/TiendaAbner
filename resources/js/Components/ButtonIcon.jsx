import { Link } from "@inertiajs/react";

const COLORS = {
    yellow: "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
    red: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    blue: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    green: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    slate: "border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white",
};

export default function ButtonIcon({
    children,
    btnId,
    title,
    color = "slate",
    ruta,
    metodo,
}) {
    return (
        <Link
            method={metodo}
            as="button"
            href={ruta}
            id={btnId}
            title={title}
            className={`
                inline-flex items-center justify-center
                rounded size-8 text-lg
                transition
                ${COLORS[color]}
            `}
        >
            {children}
        </Link>
    );
}
