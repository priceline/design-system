import getSCMigrationRef from '.'

jest.mock('styled-components', () => ({
  div: () => ({}),
}))

beforeEach(() => {
  jest.resetModules()
})

describe('getSCMigrationRef', function () {
  it('should return innerRef if SC4', function () {
    expect(getSCMigrationRef()).toEqual('ref')
  })
})
