jest.mock('styled-components', () => ({
  __esModule: true,
  injectGlobal: jest.fn(),
}))

beforeEach(() => {
  jest.resetModules()
})

describe('getSCMigrationRef', function () {
  it('should return innerRef if SC3', function () {
    const getSCMigrationRef = require('./getSCMigrationRef.js').default
    expect(getSCMigrationRef()).toEqual('innerRef')
  })
})
