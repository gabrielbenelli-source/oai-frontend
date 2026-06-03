import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Define la ruta base con el nombre de tu repositorio para GitHub Pages
  base: '/oai-frontend/', 
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Mantiene tu terminal limpia silenciando las advertencias de Bootstrap
        quietDeps: true,
        silenceDeprecations: ["color-functions", "import"],
      },
    },
  },
})