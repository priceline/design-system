module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/plugins/**/*.js',
    '!<rootDir>**/*.stories.js',
  ],
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  silent: true,
}
