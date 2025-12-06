import useInView from "@/hooks/useInView";
export default function HeroSection() {
        const [ref, visible] = useInView({ threshold: 0.2 });
    return (
        <section ref={ref} className={`bg-white reveal ${visible ? "show" : ""}`}>
            <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                <div className="flex-1 text-center lg:text-start">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                        {" "}
                        <span className="text-indigo-600">
                            Facilitamos tu trabajo
                        </span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                        Desarrollo de aplicaciones web que facilitan tus tareas
                        y optimizan la administración de tu negocio.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <a
                            href="#"
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                        >
                            Saber mas
                        </a>

                        <a
                            href="#"
                            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                        >
                            Costos y planes
                        </a>
                    </div>
                </div>

                <div className="flex-1 mt-12 lg:mt-0 hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                        alt="Hero image"
                        className="w-full rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
