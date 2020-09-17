module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/*.stories.js'],
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
}
