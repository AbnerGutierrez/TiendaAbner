import { usePage } from "@inertiajs/react";
import FooterLayout from "./FooterLayout";
import GuestBuyNavBar from "./GuestBuyNavBar";
import { useEffect } from "react";

export default function GuestBuyLayout({ children }) {
    const { url } = usePage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [url]);
    return (
        <div className="min-h-screen flex flex-col ">
            <GuestBuyNavBar />
            <main className="flex-1 container mx-auto ">{children}</main>
            <FooterLayout />
        </div>
    );
}
