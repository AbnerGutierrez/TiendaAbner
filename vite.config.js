import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});

//---------------------------------------------------------------------------//
// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     server: {
//         host: "0.0.0.0", 
//         hmr: {
//             host: "192.168.0.36", 
//         },
//     },
//     plugins: [
//         laravel({
//             input: "resources/js/app.jsx",
//             refresh: true,
//         }),
//         react(),
//     ],
// });
