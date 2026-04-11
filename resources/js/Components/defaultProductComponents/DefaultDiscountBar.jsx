// export default function DefaultDiscountBar() {
//     return (
//         <div className="bg-red-600 mt-16 overflow-hidden">
//             <div className="whitespace-nowrap animate-marquee text-white py-3 text-sm font-semibold">
//                 🎉 10% de descuento para nuevos usuarios — Usa el código:
//                 NUEVO10 — 🎉 10% de descuento para nuevos usuarios — Usa el animate-pulse
//                 código: NUEVO10 —
//             </div>
//         </div>
//     );
// }

export default function DiscountBanner() {
    return (
        <div className="bg-black text-sm text-white py-3 text-center font-medium   ">
            <span className="animate-pulse">🚨</span> Regalos + 30% de descuento
            por tiempo limitado <span className="animate-pulse">🚨</span>
        </div>
    );
}
