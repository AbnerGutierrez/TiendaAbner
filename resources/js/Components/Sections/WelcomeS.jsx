import { motion } from "framer-motion";

export default function WelcomeS() {
  const services = [
    {
      title: "Envíos Rápidos",
      desc: "Recibe tus productos en tiempo récord con paqueterías confiables.",
      icon: "🚀",
    },
    {
      title: "Precios Accesibles",
      desc: "Ofrecemos las mejores ofertas y descuentos en toda la tienda.",
      icon: "💸",
    },
    {
      title: "Compras Seguras",
      desc: "Tu información y pagos están protegidos con tecnología de última generación.",
      icon: "🔒",
    },
    {
      title: "Reembolsos Fáciles",
      desc: "Si algo no te convence, realizamos devoluciones rápidas y sin complicaciones.",
      icon: "🔁",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4">
      <div className="max-w-5xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          Servicios que Mejoran tu Experiencia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          En nuestra tienda online queremos ofrecerte la mejor experiencia posible: segura, rápida y accesible.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-all border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
