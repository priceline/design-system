import { describe, expect, it } from 'vitest'
import { Flag } from '../Flag'
import { Text } from '../Text'
import { render } from '../__test__/testing-library'

import { Absolute } from '.'

describe('Absolute', () => {
  it('renders with top, left and zIndex props', () => {
    const { container } = render(<Absolute top={10} left={0} zIndex={2} />)

    expect(container.firstChild?.firstChild).toHaveStyle('position: absolute')
    expect(container.firstChild?.firstChild).toHaveStyle('top: 10px')
    expect(container.firstChild?.firstChild).toHaveStyle('left: 0px')
    expect(container.firstChild?.firstChild).toHaveStyle('z-index: 2')
  })

  it('renders with Flag and children', () => {
    const { container } = render(
      <Absolute top={10} left={0}>
        <Flag color='primary'>
          <Text>EXCLUSIVE</Text>
        </Flag>
      </Absolute>
    )

    expect(container.firstChild?.firstChild).toHaveStyle('position: absolute')
    expect(container.firstChild?.firstChild).toHaveStyle('top: 10px')
    expect(container.firstChild?.firstChild).toHaveStyle('left: 0px')
  })
})
