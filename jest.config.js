module.exports = {
  setupFilesAfterEnv: ['./test-setup.js'],
  coverageReporters: ['lcov', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'slider/src/rc-slider'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  testMatch: ['<rootDir>/packages/**/test/**/*.js']
}
