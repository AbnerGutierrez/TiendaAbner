import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function GuestBuyNavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-red-600 text-white text-center shadow p-2  w-full z-20 mb-2">
            Aprovecha hasta 50% de descuento en productos seleccionados.
        </nav>
    );
}
