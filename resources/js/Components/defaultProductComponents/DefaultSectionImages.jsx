export default function DefaultSectionImages({ imagen, producto, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex-shrink-0 overflow-hidden hover:scale-105 transition rounded-lg"
        >
            <img
                src={imagen}
                alt={producto}
                className="w-24 h-24 object-cover"
            />
        </button>
    );
}
