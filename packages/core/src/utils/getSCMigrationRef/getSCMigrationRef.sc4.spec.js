jest.mock('styled-components', () => ({
  __esModule: true,
}))

beforeEach(() => {
  jest.resetModules()
})

describe('getSCMigrationRef', function () {
  it('should return innerRef if SC4', function () {
    const getSCMigrationRef = require('./getSCMigrationRef.js')
      .getSCMigrationRef
    expect(getSCMigrationRef()).toEqual('ref')
  })
})
