const preset = require('./index')

describe('preset', () => {
  it('should export a function that returns the preset config', () => {
    expect(preset).toBeInstanceOf(Function)

    expect(Object.keys(preset())).toEqual(['presets', 'plugins', 'env'])
  })
})
