import { render } from '../__test__/testing-library'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  test('renders', () => {
    const { asFragment } = render(<Tooltip>A Tooltip</Tooltip>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('positioning variations', () => {
    const { rerender, asFragment } = render(
      <Tooltip color='primary' top left>
        left tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()

    rerender(
      <Tooltip color='primary' top center>
        centered tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()

    rerender(
      <Tooltip color='error' top right>
        right tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()

    rerender(
      <Tooltip bottom left>
        left tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()

    rerender(
      <Tooltip bottom center>
        centered tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()

    rerender(
      <Tooltip bottom right>
        right tooltip
      </Tooltip>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
