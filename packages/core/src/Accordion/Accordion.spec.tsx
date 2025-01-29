import React from 'react'
import { render, fireEvent, screen } from '../__test__/testing-library'
import { Accordion, AccordionItemProps } from './Accordion'

const testItems: AccordionItemProps[] = [
  {
    content: <p>Content 1</p>,
    headerLabel: 'Header 1',
    headerActions: <p>Actions 1</p>,
    headerBg: 'red',
    value: 'item1',
    contentBg: 'blue',
  },
  {
    content: <p>Content 2</p>,
    headerLabel: 'Header 2',
    headerBg: 'green',
    value: 'item2',
    contentBg: 'yellow',
  },
]

describe('Accordion', () => {
  it('renders without crashing', () => {
    render(<Accordion items={testItems} />)
  })

  it('renders all items', () => {
    render(<Accordion items={testItems} />)
    expect(screen.getByText('Header 1')).toBeInTheDocument()
    expect(screen.getByText('Header 2')).toBeInTheDocument()
  })

  it('toggles items', () => {
    const onToggle = jest.fn()
    render(<Accordion items={testItems} onToggle={onToggle} />)
    const header1 = screen.getByText('Header 1')

    fireEvent.click(header1)

    expect(onToggle).toHaveBeenCalled()
  })

  it('toggles items with text toggle', () => {
    const onToggle = jest.fn()
    const items = testItems[0]
    render(<Accordion items={[items]} onToggle={onToggle} useTextToggle />)
    const header1 = screen.getByText('Header 1')
    const moreTextTriggers = screen.getByText(/more/i)
    const lessTextTriggers = screen.getByText(/less/i)

    expect(moreTextTriggers).toHaveStyle('display: none')
    expect(lessTextTriggers).toHaveStyle('display: inline')

    fireEvent.click(header1)

    expect(onToggle).toHaveBeenCalled()
    expect(moreTextTriggers).toHaveStyle('display: inline')
    expect(lessTextTriggers).toHaveStyle('display: none')
  })

  it('toggles items isExternallyControlled', () => {
    const onToggle = jest.fn()
    render(<Accordion items={testItems} onToggle={onToggle} isExternallyControlled />)
    const header1 = screen.getByText('Header 1')
    const actionText = screen.getByText('Actions 1')
    fireEvent.click(header1)
    fireEvent.click(actionText)
    expect(onToggle).toHaveBeenCalled()
  })

  it('when no items are passed', () => {
    const onToggle = jest.fn()
    render(<Accordion items={undefined} onToggle={onToggle} isExternallyControlled />)
    expect(screen.queryByText('Header 1')).not.toBeInTheDocument()
  })
})
