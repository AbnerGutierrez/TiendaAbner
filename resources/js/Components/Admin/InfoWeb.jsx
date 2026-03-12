import DefaultCard from "../Cards/DefaultCard";

export default function InfoWeb({totalOrders,totalSales}) {
    return (
        <>
            <div>
                {/* FILTRADOS  */}
                {/* INFORMACION DE SESIONES, VENTAS Y PEDIDOS (GRAFICA) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-4 mx-4">
                    <DefaultCard title="Sesiones" description="342" />
                    <DefaultCard title="Ventas totales" description={'$ '+ totalSales} />
                    <DefaultCard title="Pedidos" description={totalOrders} />
                </div>
                {/* */}
                {/* */}
            </div>
        </>
    );
}
