import React from 'react'
import { render } from '@priceline/react-jesting-library'

import { SkipMenu } from '.'

describe('SkipMenu', () => {
  it('should not render if not links array is empty', () => {
    const { queryByTestId } = render(<SkipMenu />)
    expect(queryByTestId('skip-menu')).toBeFalsy()
  })

  it('should render all links in skipLinks list', () => {
    const skipLinks = [
      { label: 'link 1', targetId: 'link1' },
      { label: 'link 2', targetId: 'link2' },
    ]
    const { getByText } = render(<SkipMenu skipLinks={skipLinks} />)
    const link1 = getByText('link 1')
    const link2 = getByText('link 2')
    expect(link1).toBeTruthy()
    expect(link1.getAttribute('href')).toBe('#link1')
    expect(link2).toBeTruthy()
    expect(link2.getAttribute('href')).toBe('#link2')
  })
})
