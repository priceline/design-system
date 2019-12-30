import { theme, colors } from '../src'

const aliases = ['sm', 'md', 'lg', 'xl', 'xxl']

describe('theme', () => {
  console.warn = jest.fn()

  test('exports an object', () => {
    expect(typeof theme).toBe('object')
  })

  test('snapshot', () => {
    expect(theme).toMatchSnapshot()
  })

  test('exports colors', () => {
    expect(typeof colors).toBe('object')
  })

  test('breakpoints have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.breakpoints[alias]).toEqual(theme.breakpoints[i])
    )
  })

  test('media queries have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.mediaQueries[alias]).toEqual(theme.mediaQueries[i])
    )
  })
})
