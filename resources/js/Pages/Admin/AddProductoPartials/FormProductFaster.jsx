import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useEffect, useState } from "react";
import AddColorComponent from "@/Components/defaultProductComponents/AddColorComponent";
import AddOfert from "@/Components/defaultProductComponents/AddOfert";
import AddFeature from "@/Components/defaultProductComponents/AddFeature";

export default function FormProductFaster({ data, setData, errors }) { 
    
    //Funcionalidades para el contenido de la caja
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
            {/* COLORES */}
            <div>
                <AddColorComponent data={data} setData={setData} />
            </div>
            {/* OFERTAS DISPONIBLES */}
            <div>
               <AddOfert data={data} setData={setData} />
            </div>

            {/* CARACTERISTICAS */}
            <div>
                <AddFeature data={data} setData={setData} />
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
