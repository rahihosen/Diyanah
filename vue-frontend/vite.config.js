import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'production',
    base: '/',
    plugins: [vue()]
})