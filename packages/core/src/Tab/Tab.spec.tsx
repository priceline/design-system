import React from 'react'
import { render } from '../__test__/testing-library'
import { Tab } from '.'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'

const tabsContent = [
  {
    id: 't1',
    children: <DefaultContent />,
  },
  {
    id: 't2',
    children: <DefaultContent2 />,
  },
  {
    id: 't3',
    children: <DefaultContent3 />,
  },
]

const tabsData = [
  {
    id: 't1',
    text: 'Tab 1',
  },
  {
    id: 't2',
    text: 'Tab 2',
  },
  {
    id: 't3',
    text: 'Tab 3',
  },
]

describe('Tabs', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tab tabsContent={tabsContent} tabsData={tabsData} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
