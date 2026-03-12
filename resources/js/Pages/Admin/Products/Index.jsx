import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import ProductCard from "@/Components/ProductCard";
import AppLayout from "@/Layouts/AppLayout";
import SidebarM from "@/Layouts/navar/sidebar";

export default function Index({ products }) {
    return (
        <AuthenticatedAdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Productos
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Productos</h1>

                {products.length === 0 ? (
                    <p>No hay productos registrados.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedAdminLayout>
    );
}
