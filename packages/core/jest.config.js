module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/**/*.stories.*'],
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
}
