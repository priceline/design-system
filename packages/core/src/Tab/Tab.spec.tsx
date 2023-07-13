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

    expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment>
    .c2 {
    margin-left: 8px;
    margin-right: 8px;
  }

  .c5 {
    margin: 8px;
  }

  .c4 {
    font-weight: 700;
    font-size: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 20px;
  }

  .c6 {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
  }

  .c7 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    -webkit-letter-spacing: -0.003rem;
    -moz-letter-spacing: -0.003rem;
    -ms-letter-spacing: -0.003rem;
    letter-spacing: -0.003rem;
  }`)
  })
})
