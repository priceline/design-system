import getSCMigrationRef from '.'

jest.mock('styled-components', () => ({
  div: () => ({}),
}))

describe('getSCMigrationRef', function () {
  it('should return innerRef if SC4', function () {
    expect(getSCMigrationRef()).toEqual('ref')
  })
})
