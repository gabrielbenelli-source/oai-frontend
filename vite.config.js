import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Esto silenciará las advertencias de Bootstrap para que tu terminal esté limpia
        quietDeps: true,
        silenceDeprecations: ["color-functions", "import"],
      },
    },
  },
})