import getSCMigrationRef from '.'

jest.mock('styled-components', () => ({
  div: () => ({ extend: true }),
}))

describe('getSCMigrationRef', function () {
  it('should return innerRef if SC3', function () {
    expect(getSCMigrationRef()).toEqual('innerRef')
  })
})
