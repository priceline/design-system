export default {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!src/**/*.{stories,story}.*'],
  coverageThreshold: {
    global: {
      branches: 88,
      functions: 94,
      lines: 96,
      statements: 96,
    },
  },
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./src/__test__/jest.setup.tsx'],
  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist', '<rootDir>/lib-commonjs', '<rootDir>/lib-esm'],
}
