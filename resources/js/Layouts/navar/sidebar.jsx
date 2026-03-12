import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { faChartLine, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SidebarM({ children }) {
    const [open, setOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const { url } = usePage(); // ruta actual
    function SidebarLink({ href, label, active, collapsed, icon }) {
        return (
            <li>
                <Link
                    href={href}
                    className={`
                    flex items-center p-2 rounded transition
                    ${
                        active
                            ? "bg-blue-100 text-blue-600 font-medium"
                            : "hover:bg-gray-100"
                    }
                    `}
                >
                    {/* icon placeholder */}
                    <FontAwesomeIcon icon={icon} />

                    {!collapsed && label}
                </Link>
            </li>
        );
    }
    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setOpen(!open)}
                className="sm:hidden ms-3 mt-3 p-2"
            >
                ☰
            </button>

            {/* Sidebar */}
            <aside
                className={`
                fixed top-0 left-0 z-40 h-screen bg-white border-r transition-all
                ${collapsed ? "w-16" : "w-64"}
                ${open ? "translate-x-0" : "-translate-x-full"}
                sm:translate-x-0
                `}
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    {/* collapse button */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="mb-4 p-2 hover:bg-gray-100 rounded"
                    >
                        {collapsed ? "➡" : "⬅"}
                    </button>

                    <ul className="space-y-2">
                        <SidebarLink
                            href="/dashboard"
                            label="Dashboard"
                            active={url.startsWith("/dashboard")}
                            collapsed={collapsed}
                            icon={faChartLine}
                        />
                        <SidebarLink
                            href="/admin/products/products"
                            label="productos"
                            active={url.startsWith("/admin/products/products")}
                            collapsed={collapsed}
                            icon={faBoxOpen}
                        />
                        <SidebarLink
                            href="/otro"
                            label="otro"
                            active={url.startsWith("/otro")}
                            collapsed={collapsed}
                        />
                    </ul>
                </div>
            </aside>

            {/* content */}
            <div
                className={`p-4 transition-all ${
                    collapsed ? "sm:ml-16" : "sm:ml-64"
                }`}
            >
                {children}
            </div>
        </>
    );
}
