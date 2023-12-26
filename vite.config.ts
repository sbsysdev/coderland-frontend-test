/// <reference types="vitest"/>

// node
import { fileURLToPath, URL } from 'node:url';
// vite
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    base: '/coderland-frontend-test',
    plugins: [react()],
    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        /* rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                404: fileURLToPath(new URL('./404.html', import.meta.url)),
            },
        }, */
        outDir: 'docs',
    },
    test: {
        environment: 'jsdom',
        globals: true,
    },
});
