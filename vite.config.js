import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [react(), visualizer({ filename: 'dist/stats.html', gzipSize: true })],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('@tsparticles') || id.includes('tsparticles')) return 'vendor-tsparticles'
            if (id.includes('react-icons')) return 'vendor-react-icons'
            if (id.includes('react-type-animation')) return 'vendor-type-animation'
            return 'vendor'
          }
        }
      }
    }
  }
})
