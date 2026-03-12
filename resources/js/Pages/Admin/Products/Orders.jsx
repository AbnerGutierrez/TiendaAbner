import InfoWeb from "@/Components/Admin/InfoWeb";
import OrdersTable from "@/Components/Admin/OrdersTable";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";

export default function Orders({ orders, totalOrders, totalSales }) {
    return (
        <AuthenticatedAdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Orders admin
                </h2>
            }
        >
            <InfoWeb totalOrders={totalOrders} totalSales={totalSales} />
            <OrdersTable orders={orders} />
        </AuthenticatedAdminLayout>
    );
}
