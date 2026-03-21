import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useEffect, useState } from "react";

export default function FormProductFaster({ data, setData, errors }) {
    //Funcionalidades para el VARIACIONES | OFERTAS
    const [color, setColor] = useState("#000000");
    const addColor = () => {
        if (!data.colors.includes(color)) {
            setData("colors", [...data.colors, color]);
        }
    };
    const removeColor = (index) => {
        const newColors = [...data.colors];
        newColors.splice(index, 1);
        setData("colors", newColors);
    };

    const [promoType, setPromoType] = useState("");
    const [promoValue, setPromoValue] = useState("");

    const addPromotion = () => {
        const newPromo = {
            type: promoType,
            value: promoType === "discount" ? promoValue : null,
        };

        setData("promotions", [...data.promotions, newPromo]);
    };

    const removePromotion = (index) => {
        const newPromos = [...data.promotions];
        newPromos.splice(index, 1);
        setData("promotions", newPromos);
    };
    //Funcionalidades para las caracteristicas
    const [featureText, setFeatureText] = useState("");
    const [featureImage, setFeatureImage] = useState(null);

    const addFeature = () => {
        if (!featureText || !featureImage) return;

        const newFeature = {
            text: featureText,
            image: featureImage,
        };

        setData("features", [...(data.features || []), newFeature]);

        // reset
        setFeatureText("");
        setFeatureImage(null);
    };

    const removeFeature = (index) => {
        const newFeatures = [...data.features];
        newFeatures.splice(index, 1);
        setData("features", newFeatures);
    };
    //Funcionalidades para las el contenido de la caja
    const [contentText, setContentText] = useState("");
    const [contentImage, setContentImage] = useState(null);

    const addContent = () => {
        if (!contentText || !contentText) return;

        const newContent = {
            text: contentText,
            image: contentImage,
        };

        setData("contents", [...(data.contents || []), newContent]);

        // reset
        setContentText("");
        setContentImage(null);
    };

    const removeContent = (index) => {
        const newContent = [...data.contents];
        newContent.splice(index, 1);
        setData("contents", newContent);
    };
    //Funcionalidad para las imagenes de hero
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        if (!data.images || data.images.length === 0) {
            setPreviews([]);
            return;
        }

        const urls = data.images.map((file) => URL.createObjectURL(file));

        setPreviews(urls);

        // Limpieza de memoria
        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [data.images]);

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setData("images", [...data.images, ...files]);
    };

    const removeImage = (index) => {
        const newImages = [...data.images];
        newImages.splice(index, 1);

        setData("images", newImages);
    };

    return (
        <div className="space-y-6">
            {/* TÍTULO */}
            <div>
                <InputLabel value="Título" />
                <TextInput
                    className="w-full"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <InputError message={errors.title} />
            </div>

            {/* DESCRIPCIÓN */}
            <div>
                <InputLabel value="Descripción" />
                <TextInput
                    className="w-full"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} />
            </div>

            {/* PRECIO | STOCK */}
            <div className="grid grid-cols-2 gap-4">
                <div className="grid ">
                    <InputLabel value="Precio" />
                    <TextInput
                        type="number"
                        className="w-full"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    <InputError message={errors.price} />
                </div>

                {/* STOCK */}
                <div>
                    <InputLabel value="Stock" />
                    <TextInput
                        type="number"
                        className="w-full"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                    />
                    <InputError message={errors.stock} />
                </div>
            </div>

            {/* VARIACIONES | OFERTAS */}
            <div>
                <InputLabel className="mb-1" value="Variaciones | Ofertas" />
                <div className="grid grid-cols-2 gap-4">
                    <div className=" text-center shadow-md border-2 rounded-md p-2">
                        <InputLabel value="Colores disponibles" />

                        <div className="flex gap-2 items-center justify-center">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={addColor}
                                className="px-3 py-1 bg-blue-600 text-white rounded"
                            >
                                Agregar
                            </button>
                        </div>

                        {/* Lista de colores */}
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {data.colors.map((c, index) => (
                                <div
                                    key={index}
                                    className="w-8 h-8 rounded-full border relative"
                                    style={{ backgroundColor: c }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => removeColor(index)}
                                        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" text-center shadow-md border-2 rounded-md p-2">
                        <InputLabel value="Promociones" />

                        <div className="flex gap-2 justify-center">
                            <select
                                onChange={(e) => setPromoType(e.target.value)}
                            >
                                <option value="">Selecciona</option>
                                <option value="2x1">2x1</option>
                                <option value="discount">Descuento</option>
                            </select>

                            {promoType === "discount" && (
                                <input
                                    type="number"
                                    placeholder="%"
                                    onChange={(e) =>
                                        setPromoValue(e.target.value)
                                    }
                                />
                            )}

                            <button
                                type="button"
                                onClick={addPromotion}
                                className="bg-green-600 text-white px-2"
                            >
                                Agregar
                            </button>
                        </div>

                        {/* Lista */}
                        <div className="mt-2">
                            {data.promotions.map((p, i) => (
                                <div key={i} className="flex justify-between">
                                    <span>
                                        {p.type === "2x1"
                                            ? "2x1"
                                            : `Descuento ${p.value}%`}
                                    </span>

                                    <button onClick={() => removePromotion(i)}>
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CARACTERISTICAS */}
            <div>
                <div>
                    <InputLabel value="Características (mínimo 4)" />

                    {/* Inputs */}
                    <div className="flex gap-2 items-center">
                        <TextInput
                            placeholder="Ej: Resistente al agua"
                            value={featureText}
                            onChange={(e) => setFeatureText(e.target.value)}
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFeatureImage(e.target.files[0])}
                        />

                        <button
                            type="button"
                            onClick={addFeature}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Agregar
                        </button>
                    </div>

                    {/* Lista */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {(data.features || []).map((f, index) => (
                            <div
                                key={index}
                                className="border p-2 rounded relative"
                            >
                                <img
                                    src={URL.createObjectURL(f.image)}
                                    alt=""
                                    className="w-full h-24 object-cover"
                                />

                                <p className="text-sm mt-1">{f.text}</p>

                                <button
                                    type="button"
                                    onClick={() => removeFeature(index)}
                                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* QUE HAY EN LA CAJA */}
            <div>
                <div>
                    <InputLabel value="Que hay en la caja" />

                    {/* Inputs */}
                    <div className="flex gap-2 items-center">
                        <TextInput
                            placeholder="Ej: Producto"
                            value={contentText}
                            onChange={(e) => setContentText(e.target.value)}
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setContentImage(e.target.files[0])}
                        />

                        <button
                            type="button"
                            onClick={addContent}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Agregar
                        </button>
                    </div>

                    {/* Lista */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {(data.contents || []).map((f, index) => (
                            <div
                                key={index}
                                className="border p-2 rounded relative"
                            >
                                <img
                                    src={URL.createObjectURL(f.image)}
                                    alt=""
                                    className="w-full h-24 object-cover"
                                />

                                <p className="text-sm mt-1">{f.text}</p>

                                <button
                                    type="button"
                                    onClick={() => removeContent(index)}
                                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* IMÁGENES */}
            <div>
                <InputLabel value="Imágenes del producto" />

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImagesChange}
                    className="mt-2"
                />

                <InputError message={errors.images} />
            </div>

            {/* PREVIEW DE IMÁGENES HERO */}
            {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previews.map((src, index) => (
                        <div
                            key={index}
                            className="relative border rounded overflow-hidden"
                        >
                            <img
                                src={src}
                                alt="Preview"
                                className="w-full h-32 object-cover"
                            />

                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
