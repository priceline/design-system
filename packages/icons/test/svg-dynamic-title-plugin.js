import { transform } from '@babel/core'
import dynamicTitlePlugin from '../plugins/svg-dynamic-title-plugin'

const testPlugin = (code, options) => {
  const result = transform(code, {
    plugins: ['@babel/plugin-syntax-jsx', [dynamicTitlePlugin, options]],
    configFile: false
  })

  return result.code
}

describe('Dynamic SVG title plugin', () => {
  it(`should return element AS IS when 'svg' element tags are not present`, () => {
    expect(testPlugin('<html></html>')).toEqual('<html></html>;')
  })

  it(`should add 'title' and 'desc' as children to the 'svg' element`, () => {
    expect(testPlugin('<Svg></Svg>')).toEqual(
      '<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>;'
    )
  })

  it(`should remove default 'title' element and add the 'title/desc JSX expression'`, () => {
    expect(testPlugin('<Svg><title>Hello</title></Svg>')).toEqual(
      '<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>;'
    )
  })

  it(`should remove default 'title & desc' elements and add the 'title and JSX expression'`, () => {
    expect(
      testPlugin('<Svg><title>Hello</title><desc>World</desc></Svg>')
    ).toEqual(
      '<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>;'
    )
  })

  it('should work if an attribute is already present', () => {
    expect(testPlugin('<svg><foo /></svg>')).toEqual(
      '<svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}<foo /></svg>;'
    )
  })
})
