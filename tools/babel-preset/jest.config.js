module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['bin/**/*.js', 'src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  testResultsProcessor: 'jest-bamboo-reporter',
  resetMocks: true,
}
