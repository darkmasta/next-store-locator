import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.jsx'),
            name: 'NextStoreLocator',
            fileName: (format) => `next-store-locator.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
