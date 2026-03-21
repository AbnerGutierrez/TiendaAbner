// export default function DefaultDiscountBar() {
//     return (
//         <div className="bg-red-600 mt-16 overflow-hidden">
//             <div className="whitespace-nowrap animate-marquee text-white py-3 text-sm font-semibold">
//                 🎉 10% de descuento para nuevos usuarios — Usa el código:
//                 NUEVO10 — 🎉 10% de descuento para nuevos usuarios — Usa el
//                 código: NUEVO10 —
//             </div>
//         </div>
//     );
// }


export default function DiscountBanner() {
    return (
        <div className="bg-red-600 mt-16 text-white py-3 text-center font-medium animate-pulse">
            🎉 10% de descuento para nuevos usuarios usando el código
            <span className="ml-2 font-bold bg-white text-red-600 px-2 py-1 rounded">
                NUEVO10
            </span>
        </div>
    );
}