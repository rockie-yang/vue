import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: { port: 3037, cors: false, proxy: { "/api": "http://localhost:3036" } },
    build: {},
    plugins: [
        vue({
            template: {
                compilerOptions: { allowJs: true },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src"),
        },
    },
});
