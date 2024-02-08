import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { userEvent } from '@storybook/testing-library'
import { Tab } from './Tab'

describe('Tab', () => {
  const tabsContent = [
    { id: 'tab1', children: <div>Tab 1 Content</div> },
    { id: 'tab2', children: <div>Tab 2 Content</div> },
  ]

  const tabsData = [
    { id: 'tab1', text: 'Tab 1' },
    { id: 'tab2', text: 'Tab 2' },
  ]

  it('renders tabs with correct text', () => {
    render(<Tab type='button' tabsContent={tabsContent} tabsData={tabsData} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
  })

  it('renders tab content based on active tab', async () => {
    render(<Tab type='button' tabsContent={tabsContent} tabsData={tabsData} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).toBeNull()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.queryByText('Tab 1 Content')).toBeNull()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on active tab in Chip Variation', async () => {
    render(<Tab type='chip' tabsContent={tabsContent} tabsData={tabsData} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).toBeNull()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.queryByText('Tab 1 Content')).toBeNull()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on active tab in Radio Variation', async () => {
    render(<Tab type='radio' tabsContent={tabsContent} tabsData={tabsData} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).toBeNull()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.queryByText('Tab 1 Content')).toBeNull()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on orientation', async () => {
    render(<Tab type='button' orientation='vertical' tabsContent={tabsContent} tabsData={tabsData} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).toBeNull()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.queryByText('Tab 1 Content')).toBeNull()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })
})
