import React from "react";
import "@google/model-viewer";

export default function Modelo3D() {
    return (
        <div style={{ width: "600px", margin: "auto" }}>
            <model-viewer
                src="/models/transparent_glasses_with_baked_textures.glb"
                alt="Modelo 3D"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                exposure="1"
                environment-image="neutral"
                style={{ width: "100%", height: "500px" }}
            />
        </div>
    );
}
