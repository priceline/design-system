import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
// import dts from 'vite-plugin-dts'

import * as packageJson from './package.json'

export default defineConfig({
  plugins: [
    react(),
    // we should do this eventually but there are many TS issues to resolve first
    // dts()
  ],
  optimizeDeps: {
    include: ['pcln-icons'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pcln-design-system',
      // the proper extensions will be added
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})
