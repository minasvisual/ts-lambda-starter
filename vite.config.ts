import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    singleThread: true,
    // silent: true,
    globals: true,
    setupFiles: [ path.resolve(__dirname, './tests/mocks/envVars.ts') ], 
    exclude:[ ...configDefaults.exclude ],
    coverage: {
      all: true,
      provider: 'v8',
      statements: 100,
      branches: 70,
      functions: 70,
      lines: 70,
      exclude:[
        ...configDefaults.exclude,
        'tests/**/ts',
        'src/local.ts',
        'src/invoke.ts',
        '**/contracts/**',
        '**/types/**',
        '**/factories/**'
      ]
    }
  },
  resolve: {
    alias: {
      '@/tests': path.resolve(__dirname, './tests'),
      '@': path.resolve(__dirname, './src')
    }
  },

})