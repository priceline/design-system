import { Box } from '..'

describe('Box', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Box />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
