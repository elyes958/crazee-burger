import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // pour que l'appli se lance dans le port 3000 et plus 5173(comme tu veux supprime la ligne pour revenir au port de base)
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
})
