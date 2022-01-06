import React from 'react'
import { render, screen } from 'testing-library'
import DotLoader from './DotLoader'

describe('DotLoader', () => {
  it('renders a dot loader', () => {
    render(<DotLoader data-testid='dot-loader' />)

    const container = screen.getByTestId('dot-loader')
    const children = container.children

    expect(children).toHaveLength(3)
    expect(children[0]).toHaveAttribute('color', 'primary')
    expect(children[0]).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite'))
    expect(children[0]).toHaveStyleRule('animation-delay', '0s')

    expect(children[1]).toHaveAttribute('color', 'primary')
    expect(children[1]).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite'))
    expect(children[1]).toHaveStyleRule('animation-delay', `${2 / 6}s`)

    expect(children[2]).toHaveStyleRule('animation-delay', `${4 / 6}s`)
  })

  it('renders a small and slow dot loader', () => {
    render(<DotLoader size='small' speed='slow' data-testid='dot-loader' />)

    const container = screen.getByTestId('dot-loader')
    const children = container.children

    expect(children[0]).toHaveStyleRule('animation', 'bqqVik 2.5s ease infinite')
    expect(children[1]).toHaveStyleRule('animation-delay', `${2.5 / 6}s`)
    expect(children[2]).toHaveStyleRule('animation-delay', `${5 / 6}s`)
  })

  it('renders a large and fast dot loader', () => {
    render(<DotLoader size='large' speed='fast' data-testid='dot-loader' />)

    const container = screen.getByTestId('dot-loader')
    const children = container.children

    expect(children[0]).toHaveStyleRule('animation', 'bqqVik 1s ease infinite')
    expect(children[1]).toHaveStyleRule('animation-delay', `${1 / 6}s`)
    expect(children[2]).toHaveStyleRule('animation-delay', `${2 / 6}s`)
  })
})
