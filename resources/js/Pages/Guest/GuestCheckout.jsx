import GuestBuyLayout from "@/Layouts/GuestBuyLayout";

export default function GuestCheckout({ product }) {
    return (
        <GuestBuyLayout>
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <h3>Check out</h3>
                {/* Imágenes */}
                <div>
                    <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full rounded-xl shadow"
                    />
                </div>

                {/* Info checkout */}
                <div>
                    <h1 className="text-3xl font-semibold mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="text-2xl font-bold mb-6">
                        ${product.price}
                    </div>

                    <div className="mb-6">
                        <span className="text-sm text-gray-500">
                            Stock disponible:
                        </span>
                        <span className="ml-2 font-medium">
                            {product.stock}
                        </span>
                    </div>

                    <button className="w-full bg-black text-white py-4 rounded-lg uppercase tracking-widest hover:bg-gray-900 transition">
                        Confirmar compra
                    </button>
                </div>
            </div>
        </GuestBuyLayout>
    );
}
