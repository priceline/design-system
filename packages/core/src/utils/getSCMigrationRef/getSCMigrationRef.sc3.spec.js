jest.mock('styled-components', () => ({
  div: () => ({ extend: true }),
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
