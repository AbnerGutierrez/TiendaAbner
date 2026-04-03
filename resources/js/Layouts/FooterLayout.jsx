export default function () {
    return (
        <>
            <footer className="flex-1 container mx-auto border-t border-gray-200 bg-white text-black py-4 ">
                {/* Línea inferior */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} La plaza web ;).{" "}
                    <a
                        className="font-medium text-fg-brand  hover:underline"
                        href=""
                    >
                        Política de privacidad
                    </a>{" "}
                    |{" "}
                    <a
                        className="font-medium text-fg-brand  hover:underline"
                        href=""
                    >
                        Ventas y reembolsos
                    </a>{" "}
                    |{" "}
                    <a
                        className="font-medium text-fg-brand  hover:underline"
                        href=""
                    >
                        Aviso legal{" "}
                    </a>
                </div>
            </footer>
        </>
    );
}
