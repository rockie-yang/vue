import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        server: { port: 3037, cors: false, proxy: { "/auth/github/": "http://localhost:3036/auth/github" } },
    },
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
