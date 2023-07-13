import React from 'react'
import { render } from 'testing-library'

import { Tab } from '.'

describe('Tabs', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tab tabsContent={[]} tabsData={[]} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
