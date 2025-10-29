import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// IMPORTANT: Update the base path below to match your GitHub repository name
// If your repo is named "madhavpatel249", keep it as is
// If your repo has a different name, change "madhavpatel249" to your repo name
// If your repo is "username.github.io", change base to '/'
const REPO_NAME = 'madhavpatel249' // ⬅️ CHANGE THIS TO YOUR REPO NAME

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
  },
})


