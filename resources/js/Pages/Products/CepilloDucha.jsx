import DefaultComprarAqui from "@/Components/defaultProductComponents/DefaultComprarAqui";
import DiscountBanner from "@/Components/defaultProductComponents/DefaultDiscountBar";
import DefaultHero from "@/Components/defaultProductComponents/DefaultHero";
import DefaultSectionBoxContent from "@/Components/defaultProductComponents/DefaultSectionBoxContent";
import DefaultSectionColors from "@/Components/defaultProductComponents/DefaultSectionColors";
import DefaultSectionCompra from "@/Components/defaultProductComponents/DefaultSectionCompra";
import DefaultSectionFeatures from "@/Components/defaultProductComponents/DefaultSectionFeatures";
import DefaultSectionPromotions from "@/Components/defaultProductComponents/DefaultSectionPromotions";
import GuestBuyLayout from "@/Layouts/GuestBuyLayout";

export default function CepilloDucha({ producto }) {
    const handleColorSelect = (color) => {
        console.log("Color seleccionado:", color);
    };
    const handlePromotionSelect = (promotion) => {
        console.log("promocion seleccionada:", promotion);
    };
    return (
        <>
            <GuestBuyLayout>
                <DefaultHero producto={producto} />
                <DefaultSectionColors
                    colors={producto.colors}
                    onSelect={handleColorSelect}
                />
                <DefaultSectionPromotions
                    promotions={producto.promotions}
                    onSelect={handlePromotionSelect}
                />
                <DiscountBanner />
                <DefaultSectionCompra producto={producto} />
                <DefaultSectionFeatures features={producto.features} />
                <DefaultSectionBoxContent boxContent={producto.box_content} />
                <DefaultComprarAqui />
            </GuestBuyLayout>
        </>
    );
}
