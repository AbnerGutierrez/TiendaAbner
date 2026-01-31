export default function SuccessView({ details, product }) {
    return (
        <div className="max-w-2xl mx-auto py-20 px-4 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">¡Gracias por tu compra!</h1>
            <p className="text-gray-600 mb-8">
                Hemos enviado los detalles del pedido a tu correo electrónico.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 text-left border mb-8">
                <p className="text-sm text-gray-500 mb-4 font-mono uppercase">
                    Resumen de transacción
                </p>
                <div className="flex justify-between mb-2">
                    <span>ID de Pago:</span>
                    <span className="font-medium">details</span>
                </div>
                <div className="flex justify-between">
                    <span>Producto:</span>
                    <span className="font-medium">{product.title}</span>
                </div>
            </div>

            <a
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium"
            >
                Volver a la tienda
            </a>
        </div>
    );
}
