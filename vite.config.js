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
//         host: "0.0.0.0", // Esto permite que Vite escuche conexiones externas
//         hmr: {
//             host: "192.168.74.68", // REEMPLAZA ESTO CON TU IP LOCAL
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
