import { useEffect, useState, useRef } from "react";

export default function LowStockCounter({ stock }) {
    const [value, setValue] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    const targetValue = stock;
    const startValue = 0;

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1,
            );

            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(
                easeOut * (targetValue - startValue) + startValue,
            );

            setValue(currentValue);

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [hasStarted]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 },
        );

        if (counterRef.current) observer.observe(counterRef.current);

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 150);
        }, 3000);

        return () => clearInterval(interval);
    }, [hasStarted]);

    const formatNumber = (num) => new Intl.NumberFormat("es-ES").format(num);

    return (
        <div ref={counterRef} className="flex justify-center py-12 px-4">
            <div className="bg-white px-10 py-8 text-center max-w-sm w-full">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    pedidos disponibles
                </p>

                <div className="overflow-hidden h-20 flex items-center justify-center">
                    <span
                        className={`text-6xl font-semibold text-gray-900 transition-transform duration-200 ${
                            animate ? "scale-105" : "scale-100"
                        }`}
                    >
                        {formatNumber(value)}
                    </span>
                </div>

                {value <= 50 && value > 0 && (
                    <p className="text-sm text-red-500 mt-3 font-medium">
                        ⚠️ Stock limitado
                    </p>
                )}

                {value === 0 && (
                    <p className="text-sm text-red-500 mt-3 font-semibold">
                        Agotado
                    </p>
                )}

                <div className="mt-5 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gray-900 transition-all duration-500"
                        style={{
                            width: `${(value / targetValue) * 100}%`,
                        }}
                    />
                </div>

                <p className="text-xs text-gray-400 mt-3">
                    Actualizado en tiempo real
                </p>
            </div>
        </div>
    );
}
