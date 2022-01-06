import { transform } from '@babel/core'
import replaceSvgPlugin from '../plugins/svg-replace-plugin'

const testPlugin = (code, options) => {
  const result = transform(code, {
    plugins: ['@babel/plugin-syntax-jsx', [replaceSvgPlugin, options]],
    configFile: false,
  })

  return result.code
}

describe('replace svg plugin', () => {
  it(`should return element AS IS when 'svg' element tags are not present`, () => {
    expect(testPlugin('<html></html>')).toBe('<html></html>;')
  })

  it('replace svg with Svg', () => {
    expect(testPlugin('<svg></svg>')).toBe('<Svg></Svg>;')
  })

  it('replace svg with Svg when no closing element is provided', () => {
    expect(testPlugin('<svg />')).toBe('<Svg />;')
  })
})
