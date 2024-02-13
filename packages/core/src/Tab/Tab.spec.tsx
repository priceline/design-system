import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { userEvent } from '@storybook/testing-library'
import { Tab } from './Tab'
import { Departure } from 'pcln-icons'

describe('Tab', () => {
  const tabsData = [
    { id: 'tab1', text: 'Tab 1', children: <div>Tab 1 Content</div>, onTabSelect: () => {} },
    { id: 'tab2', text: 'Tab 2', children: <div>Tab 2 Content</div>, onTabSelect: () => {} },
  ]
  const tabsDataWithIcon = [
    { id: 'tab1', text: 'Tab 1', icon: Departure, children: <div>Tab 1 Content</div>, onTabSelect: () => {} },
    { id: 'tab2', text: 'Tab 2', children: <div>Tab 2 Content</div>, onTabSelect: () => {} },
  ]

  it('renders tabs with correct text', () => {
    render(<Tab type='button' tabsData={tabsData} />)

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
  })

  it('renders tab content based on active tab', async () => {
    render(<Tab type='button' tabsData={tabsData} />)

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })
  it('renders tab content based on active tab with icon', async () => {
    render(<Tab type='button' tabsData={tabsDataWithIcon} />)

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on active tab in Chip Variation', async () => {
    render(<Tab type='chip' tabsData={tabsData} />)

    expect(screen.getByRole('radio', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByRole('radio', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on active tab in Radio Variation', async () => {
    render(<Tab type='radio' tabsData={tabsData} />)

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })

  it('renders tab content based on orientation', async () => {
    render(<Tab type='button' orientation='vertical' tabsData={tabsData} />)
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    await userEvent.click(screen.getByText('Tab 1'))
    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Tab 2 Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Tab 2'))
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument()
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument()
  })
})
