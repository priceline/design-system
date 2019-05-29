import { transform } from '@babel/core'
import replaceSvgPlugin from '../plugins/svg-dynamic-title-plugin'

const testPlugin = (code, options) => {
  const result = transform(code, {
    plugins: ['@babel/plugin-syntax-jsx', [replaceSvgPlugin, options]],
    configFile: false
  })

  return result.code
}

describe('replace svg plugin', () => {
  it('replace svg with Svg', () => {
    expect(testPlugin('<svg></svg>')).toMatchSnapshot(`'<Svg></Svg>'`)
  })

  it('replace svg with Svg when no closing element is provided', () => {
    expect(testPlugin('<svg />')).toMatchSnapshot(`'<Svg />'`)
  })
})
