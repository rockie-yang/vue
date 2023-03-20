import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    server: {port: 3037, cors: false, proxy: {"/api": "http://localhost:3036"}},
    build: {},
    plugins: [
        vue({
            template: {
                compilerOptions: {allowJs: true},
            },
        }),
    ],
});
