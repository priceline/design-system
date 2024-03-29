import React from 'react'
import { render } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Box } from './Box'

describe('Box', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Box />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width and height props set width/height', () => {
    const json = rendererCreateWithTheme(<Box width={1 / 2} height='50%' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '50%')
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = rendererCreateWithTheme(<Box m={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2])
  })

  test('maxHeight, maxWidth, minHeight, minWidth', () => {
    const json = rendererCreateWithTheme(
      <Box maxHeight={250} maxWidth={250} minHeight={55} minWidth={55} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('max-height', '250px')
    expect(json).toHaveStyleRule('max-width', '250px')
    expect(json).toHaveStyleRule('min-height', '55px')
    expect(json).toHaveStyleRule('min-width', '55px')
  })

  test('p prop sets padding', () => {
    const json = rendererCreateWithTheme(<Box p={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[2])
  })

  test('color prop sets color', () => {
    const json = rendererCreateWithTheme(<Box color='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('boxShadowSize prop sets box-shadow', () => {
    const json = rendererCreateWithTheme(<Box boxShadowSize='sm' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.sm)
  })

  test('overflow prop sets overflow', () => {
    const { asFragment, getByTestId } = render(<Box overflow='scroll' data-testid='Box' />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('Box')).toHaveStyleRule('overflow', 'scroll')
  })
})
