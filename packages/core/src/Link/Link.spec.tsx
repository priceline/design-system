import React from 'react'
import { render } from 'testing-library'

import { Link } from '..'

describe('Link', () => {
  it('should render correctly with no props without throwing', () => {
    expect(() => {
      const { asFragment } = render(<Link>Dummy</Link>)

      expect(asFragment()).toMatchSnapshot()
    }).not.toThrow()
  })

  it('should add rel="noopener" when target="_blank"', () => {
    const { asFragment, getByText } = render(<Link target='_blank'>Dummy</Link>)

    expect(asFragment()).toMatchSnapshot()

    const link = getByText('Dummy')

    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener')
  })

  it('should not add rel="noopener" when target is not "_blank"', () => {
    const { asFragment, getByText } = render(<Link>Dummy</Link>)

    expect(asFragment()).toMatchSnapshot()

    const link = getByText('Dummy')

    expect(link).not.toHaveAttribute('target', '_blank')
    expect(link).not.toHaveAttribute('rel', 'noopener')
  })
})
