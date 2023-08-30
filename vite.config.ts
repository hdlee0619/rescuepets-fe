import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@router', replacement: '/src/router' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@_types', replacement: '/src/types' },
    ],
  },
})
