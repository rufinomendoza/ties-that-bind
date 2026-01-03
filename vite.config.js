import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // This allows us to access VITE_BASE_PATH if set in .env files.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // FIX: Explicitly set base path. This ensures assets (images, CSS) load correctly
    // when deployed to a subdirectory (e.g. https://domain.com/alumni/).
    // This value is also exposed as import.meta.env.BASE_URL for the App router.
    base: env.VITE_BASE_PATH || '/',
    
    plugins: [
      react(),
      cssInjectedByJsPlugin(), 
    ],
    build: {
      cssCodeSplit: false, 
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
    },
  }
})