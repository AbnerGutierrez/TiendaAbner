export default function Preview({ data, preview }) {
    return (
        <>
            {/* IZQUIERDA - preview */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4"> {data.title}</h2>

                <img
                    src={preview}
                    alt={data.title}
                    className="w-64 h-64 object-cover rounded mb-4"
                />

                <p className="text-gray-600 text-center mt-2">
                    {data.description}
                </p>

                <p className="mt-4 font-semibold text-green-600">
                    ${data.price}
                </p>

                <span className="text-sm text-gray-500 mt-1">
                    Stock: {data.stock}
                </span>
            </div>
        </>
    );
}
