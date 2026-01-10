import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FormSection({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="mb-4 border rounded-lg overflow-hidden">
            {/* Header */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 text-left font-semibold hover:bg-gray-200 transition"
            >
                {title}
                <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Content */}
            <div
                className={`transition-all duration-300 ease-in-out ${
                    open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div className="p-4 bg-white">{children}</div>
            </div>
        </div>
    );
}
