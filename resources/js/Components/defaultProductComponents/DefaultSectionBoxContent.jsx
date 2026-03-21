export default function DefaultSectionBoxContent({ boxContent }) {

    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Titulo */}
                <h2 className="text-3xl font-bold text-center mb-16">
                    ¿Qué hay en la caja?
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {boxContent.map((item) => {
                        const image = "storage/" + item.image;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                                    <img
                                        src={image}
                                        alt={item.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>

                                <p className="text-sm font-medium text-gray-700">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
