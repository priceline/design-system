import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

import * as packageJson from './package.json'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.jsx'),
      name: 'pcln-icons',
      fileName: 'pcln-icons',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
    sourcemap: true,
  },
})
