import React from 'react'
import { Section, TableOfContents } from '..'
import { fireEvent, render, screen } from '../../__test__/testing-library'

const testLinks = ['Test 1', 'Test 2', 'Test 3']

describe('TableOfContents', () => {
  it('should render a list of links with correct text', () => {
    render(<TableOfContents links={testLinks} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(testLinks.length)
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(testLinks[index])
    })
  })

  it('should scroll items into view', () => {
    let scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    render(
      <>
        <TableOfContents links={[...testLinks, 'Dummy Link']} />
        {testLinks.map((link) => (
          <Section heading={link} key={link}>
            {link}
          </Section>
        ))}
      </>
    )

    const listItems = screen.getAllByRole('listitem')
    fireEvent.click(listItems[0])
    expect(scrollIntoViewMock).toBeCalledTimes(1)
    fireEvent.click(listItems[listItems.length - 1])
    expect(scrollIntoViewMock).toBeCalledTimes(1)
  })
})
