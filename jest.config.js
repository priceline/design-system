module.exports = {
  setupFilesAfterEnv: ['./test/test-setup.js', './test/testing-library.js'],
  modulePaths: ['./test/'],
  coverageReporters: ['lcov', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'slider/src/rc-slider',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testMatch: ['<rootDir>/packages/**/src/**/*.spec.js'],
}
