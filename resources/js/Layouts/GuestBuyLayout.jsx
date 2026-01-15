import FooterLayout from "./FooterLayout";
import GuestBuyNavBar from "./GuestBuyNavBar";

export default function GuestBuyLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <GuestBuyNavBar/>
            <main className="flex-1 container mx-auto ">{children}</main>
            <FooterLayout/>
        </div>
    );
}
