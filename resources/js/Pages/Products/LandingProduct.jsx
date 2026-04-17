import DefaultComprarAqui from "@/Components/defaultProductComponents/DefaultComprarAqui";
import DiscountBanner from "@/Components/defaultProductComponents/DefaultDiscountBar";
import DefaultHero from "@/Components/defaultProductComponents/DefaultHero";
import DefaultRedComponent from "@/Components/defaultProductComponents/DefaultRedComponent";
import DefaultSectionBoxContent from "@/Components/defaultProductComponents/DefaultSectionBoxContent";
import DefaultSectionColors from "@/Components/defaultProductComponents/DefaultSectionColors";
import DefaultSectionCompra from "@/Components/defaultProductComponents/DefaultSectionCompra";
import DefaultSectionFeatures from "@/Components/defaultProductComponents/DefaultSectionFeatures";
import DefaultSectionPromotions from "@/Components/defaultProductComponents/DefaultSectionPromotions";
import LowStockCounter from "@/Components/defaultProductComponents/LowStockCounter";
import PreguntasF from "@/Components/defaultProductComponents/PreguntasF";
import ReviewsSectionAlf from "@/Components/defaultProductComponents/ReviewSectionAlf";
import ReviewsSection from "@/Components/defaultProductComponents/ReviewsSection";
import Sustentable from "@/Components/defaultProductComponents/Sustentable";
import Sustentable2 from "@/Components/defaultProductComponents/Sustentable2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";
import { usePage } from "@inertiajs/react";
import { div } from "framer-motion/client";
import { useState } from "react";

export default function LandingProduct({ producto }) {
    // console.log(producto);
    const { auth } = usePage().props;

    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPromotion, setSelectedPromotion] = useState("");
    // console.log(selectedColors);
    const Layout = auth.user ? AuthenticatedLayout : GuestBuyLayout;

    const handleColorSelect = (color) => {
        if (!selectedPromotion) return;

        const maxColors = selectedPromotion.value;

        setSelectedColors((prev) => {
            const exists = prev.find((c) => c.id === color.id);

            // quitar color si ya está seleccionado
            if (exists) {
                return prev.filter((c) => c.id !== color.id);
            }

            // limitar cantidad
            if (prev.length >= maxColors) {
                return prev;
            }
            // console.log(...prev, color);

            return [...prev, color];
        });
    };

    const handlePromotionSelect = (promotion) => {
        setSelectedPromotion(promotion);
        setSelectedColors([]);
        // console.log(promotion);
    };
    return (
        <>
            <Layout user={auth.user}>
                <DefaultHero producto={producto} />

                {producto.id === 1 ? <ReviewsSection /> : <ReviewsSectionAlf />}

                <DefaultSectionPromotions
                    promotions={producto.promotions}
                    selectedPromotion={selectedPromotion}
                    onSelect={handlePromotionSelect}
                />
                {producto.colorsv === 1 ? (
                    <DefaultSectionColors
                        colors={producto.colors}
                        selectedColors={selectedColors}
                        selectedPromotion={selectedPromotion}
                        onSelect={handleColorSelect}
                    />
                ) : (
                    <div className="py-11"></div>
                )}

                <DiscountBanner />
                <DefaultSectionBoxContent
                    boxContent={producto.box_content}
                    producto={producto}
                    selectedColors={selectedColors}
                    selectedPromotion={selectedPromotion}
                    user={auth.user}
                />
                <PreguntasF />

                <DefaultSectionFeatures features={producto.features} />
                <LowStockCounter stock={producto.stock} />

                <DefaultSectionCompra
                    producto={producto}
                    selectedColors={selectedColors}
                    selectedPromotion={selectedPromotion}
                    user={auth.user}
                />

                {producto.id === 1 ? <Sustentable /> : <Sustentable2 />}

                 
                
            </Layout>
        </>
    );
}
