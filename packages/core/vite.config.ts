import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import * as packageJson from './package.json'

export default defineConfig({
  plugins: [react(), dts()],
  optimizeDeps: {
    include: ['pcln-icons'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pcln-design-system',
      fileName: 'pcln-design-system',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
    sourcemap: true,
    commonjsOptions: {
      include: [/pcln-icons/, /node_modules/],
    },
  },
})
