import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'assets/salim-icon.svg'],
      manifest: {
        name: 'Salim Technology',
        short_name: 'SalimTech',
        description: 'AI, software, and cloud infrastructure — engineered to move your business forward.',
        theme_color: '#0C5233',
        background_color: '#F5F5F2',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,ttf}']
      }
    })
  ],
  build: { outDir: 'dist' }
})
