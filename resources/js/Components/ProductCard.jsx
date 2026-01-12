import { Link } from "@inertiajs/react";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            {/* IMAGEN */}
            <div className="h-48 bg-gray-100">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                        Sin imagen
                    </div>
                )}
            </div>

            {/* INFO */}
            <div className="p-4">
                <h2 className="font-semibold text-lg truncate">
                    {product.title}
                </h2>

                <p className="text-green-600 font-bold mt-1">
                    ${product.price}
                </p>

                <p className="text-sm text-gray-500">Stock: {product.stock}</p>

                <Link
                    href={route("products.showProduct", product.uuid)}
                    className="block mt-4 text-center bg-black text-white py-2 rounded"
                >
                    Ver producto
                </Link>
            </div>
        </div>
    );
}
