import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// IMPORTANT: Update the base path below to match your GitHub repository name
// If your repo is named "madhavpatel249", keep it as is
// If your repo has a different name, change "madhavpatel249" to your repo name
// If your repo is "username.github.io", change base to '/'
// Custom domain configuration - use root path for madhavpatel.net
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for custom domain
  build: {
    outDir: 'dist',
  },
})


