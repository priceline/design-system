import { boxShadows } from '../theme'
import { boxShadow } from '.'

const theme = {
  boxShadows: [
    '0 0 1px 0 rgba(0,0,0,1)',
    '0 0 2px 0 rgba(0,0,0,1)',
    '0 0 3px 0 rgba(0,0,0,1)',
    '0 0 4px 0 rgba(0,0,0,1)',
  ],
}

describe('boxShadow', () => {
  test('should get sm value from theme', () => {
    expect(
      boxShadow({
        theme,
        boxShadowSize: 'sm',
      })
    ).toEqual({ 'box-shadow': '0 0 1px 0 rgba(0,0,0,1)' })
  })

  test('should get md value from theme', () => {
    expect(
      boxShadow({
        theme,
        boxShadowSize: 'md',
      })
    ).toEqual({ 'box-shadow': '0 0 2px 0 rgba(0,0,0,1)' })
  })

  test('should get lg value from theme', () => {
    expect(
      boxShadow({
        theme,
        boxShadowSize: 'lg',
      })
    ).toEqual({ 'box-shadow': '0 0 3px 0 rgba(0,0,0,1)' })
  })

  test('should get xl value from theme', () => {
    expect(
      boxShadow({
        theme,
        boxShadowSize: 'xl',
      })
    ).toEqual({ 'box-shadow': '0 0 4px 0 rgba(0,0,0,1)' })
  })

  test('should get default sm value for missing boxShadows in theme', () => {
    expect(
      boxShadow({
        theme: {},
        boxShadowSize: 'sm',
      })
    ).toEqual({ 'box-shadow': boxShadows[0] })
  })

  test('should get default md value for missing boxShadows in theme', () => {
    expect(
      boxShadow({
        theme: {},
        boxShadowSize: 'md',
      })
    ).toEqual({ 'box-shadow': boxShadows[1] })
  })

  test('should get default lg value for missing boxShadows in theme', () => {
    expect(
      boxShadow({
        theme: {},
        boxShadowSize: 'lg',
      })
    ).toEqual({ 'box-shadow': boxShadows[2] })
  })

  test('should get default xl value for missing boxShadows in theme', () => {
    expect(
      boxShadow({
        theme: {},
        boxShadowSize: 'xl',
      })
    ).toEqual({ 'box-shadow': boxShadows[3] })
  })
})
