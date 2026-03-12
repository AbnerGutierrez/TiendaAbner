export default function DefaultCard({ title, description }) {
    return (
        <div className="w-full p-6 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>

            <h3 className="text-3xl font-bold text-gray-900">{description}</h3>
        </div>
    );
}
