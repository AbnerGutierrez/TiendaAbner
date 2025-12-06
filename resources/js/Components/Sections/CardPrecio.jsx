export default function ({ titulo, descripcion, precio, items, onClick }) {
    const CheckIcon = () => (
        <svg
            className="flex-shrink-0 w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );

    const XIcon = () => (
        <svg
            className="flex-shrink-0 w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-indigo-1000 rounded-lg shadow bg-indigo-100">
            <h3 className="mb-4 text-2xl font-semibold ">{titulo}</h3>
            <p className="font-light  sm:text-lg ">{descripcion}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-4xl font-extrabold text-indigo-600">
                    {precio} MXN
                </span>
                <span className="">/mensuales</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        {item.disponible ? <CheckIcon /> : <XIcon />}
                        <span>{item.texto}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={onClick}
                className=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Saber más
            </button>
        </div>
    );
}
