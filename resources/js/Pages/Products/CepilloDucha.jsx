import DefaultComprarAqui from "@/Components/defaultProductComponents/DefaultComprarAqui";
import DiscountBanner from "@/Components/defaultProductComponents/DefaultDiscountBar";
import DefaultHero from "@/Components/defaultProductComponents/DefaultHero";
import DefaultSectionBoxContent from "@/Components/defaultProductComponents/DefaultSectionBoxContent";
import DefaultSectionColors from "@/Components/defaultProductComponents/DefaultSectionColors";
import DefaultSectionCompra from "@/Components/defaultProductComponents/DefaultSectionCompra";
import DefaultSectionFeatures from "@/Components/defaultProductComponents/DefaultSectionFeatures";
import DefaultSectionPromotions from "@/Components/defaultProductComponents/DefaultSectionPromotions";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function CepilloDucha({ producto }) {
    const { auth } = usePage().props;

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPromotion, setSelectedPromotion] = useState(null);

    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        // console.log(color);
    };
    const handlePromotionSelect = (promotion) => {
        setSelectedPromotion(promotion);
        // console.log(promotion);
    };
    return (
        <>
            <Layout user={auth.user}>
                <DefaultHero producto={producto} />
                <DefaultSectionColors
                    colors={producto.colors}
                    selectedColor={selectedColor}
                    onSelect={handleColorSelect}
                />
                <DefaultSectionPromotions
                    promotions={producto.promotions}
                    selectedPromotion={selectedPromotion}
                    onSelect={handlePromotionSelect}
                />
                <DiscountBanner />
                <DefaultSectionCompra
                    producto={producto}
                    selectedColor={selectedColor}
                    selectedPromotion={selectedPromotion}
                    user={auth.user}
                />
                <DefaultSectionFeatures features={producto.features} />
                <DefaultSectionBoxContent
                    boxContent={producto.box_content}
                    producto={producto}
                    selectedColor={selectedColor}
                    selectedPromotion={selectedPromotion}
                    user={auth.user}
                />
                <DefaultComprarAqui />
            </Layout>
        </>
    );
}
