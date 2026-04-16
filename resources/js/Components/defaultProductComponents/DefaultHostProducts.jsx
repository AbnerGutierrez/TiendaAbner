import dientes from "../../../../public/images/welcome/blanqueadorDientes.jpg";
import envoltorio from "../../../../public/images/welcome/envoltorio.jpg";
import spray from "../../../../public/images/welcome/spray.jpg";

export default function DefaultHostProducts() {
    const topProducts = [
        {
            id: 1,
            name: "Beeswax food wrap",
            price: 549,
            image: envoltorio,
            url: "/beeswax_food_wrap",
        },
        // {
        //     id: 2,
        //     name: "Blanqueador dental",
        //     price: 399,
        //     image: dientes,
        //     url: "/teeth_whitening",
        // },
        // {
        //     id: 3,
        //     name: "Spray depilatorio suave",
        //     price: 699,
        //     image: spray,
        //     url: "/gentle_removal",
        // },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
                Productos en tendencia 🔥
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topProducts.map((product) => {
                    const originalPrice = Math.round(product.price * 1.3);

                    return (
                        <div
                            key={product.id}
                            className="border rounded-2xl shadow-sm p-4 hover:shadow-md transition"
                        >
                            <div className="relative">
                                {/* Badge HOT */}
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                                    🔥 HOT
                                </span>

                                {/* Badge descuento */}
                                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                                    -30%
                                </span>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-xl mb-3"
                                />
                            </div>

                            <h3 className="text-lg font-semibold">
                                {product.name}
                            </h3>

                            <div className="flex items-center gap-2">
                                {/* Precio actual */}
                                <p className="text-lg font-bold text-black">
                                    ${product.price}
                                </p>

                                {/* Precio original tachado */}
                                <p className="text-sm text-gray-500 line-through">
                                    ${originalPrice}
                                </p>
                            </div>

                            <p className="text-xs text-gray-500">MXN</p>

                            <a
                                href={product.url}
                                className="inline-block text-center mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800"
                            >
                                Ver producto
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
