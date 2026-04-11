export default function BannerPromotion() {
    const messages = [
        "🚚 Envío gratis a todo México 🚚",
        "🔥 Ofertas limitadas 🔥",
        "🎁 Regalos en tu compra 🎁",
        "⚡ 30% de descuento ⚡",
        "🏷️ Promoción solo el mes de abril 🏷️",
    ];

    return (
        <div className="bg-black text-white py-3 overflow-hidden">
            <div className="flex w-max animate-marquee">
                {/* contenido */}
                {[...messages, ...messages].map((msg, index) => (
                    <span
                        key={index}
                        className="mx-8 whitespace-nowrap text-sm font-medium"
                    >
                        {msg}
                    </span>
                ))}
            </div>
        </div>
    );
}
