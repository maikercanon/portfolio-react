import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
const repoName = 'portfolio-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: `/${repoName}`,
})
