export default function DefaultSectionImages({ imagen, producto, onClick }) {
    return (
        <button
            onClick={onClick}
            // Añadimos flex-shrink-0 aquí
            className="flex-shrink-0 borde overflow-hidden hover:scale-105 transition"
        >
            <img
                src={imagen}
                alt={producto}
                className="w-24 h-24 object-cover"
            />
        </button>
    );
}
