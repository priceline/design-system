import React from 'react'
import { render } from '../__test__/testing-library'
import { Drawer } from './Drawer'

describe('Drawer', () => {
  test('renders Drawer with no heading', () => {
    const { queryByText } = render(<Drawer isOpen={true} placement='right' onCollapse={jest.fn} />)
    expect(queryByText('Drawer Heading')).toBeFalsy()
  })
  test('renders collapsed Drawer', () => {
    const { queryByText } = render(
      <Drawer isOpen={true} isCollapsed={true} placement='right'>
        Drawer Content
      </Drawer>
    )
    expect(queryByText('Drawer Content')).toBeFalsy()
  })

  test('renders mobile Drawer', () => {
    const { queryByText } = render(
      <Drawer isOpen={true} isMobile={true} isCollapsed={true}>
        Drawer Content
      </Drawer>
    )
    expect(queryByText('Drawer Content')).toBeFalsy()
  })

  test('renders heading from string prop', () => {
    const { queryByText } = render(
      <Drawer isOpen={true} isMobile={true} isCollapsed={true} heading='Default Heading'>
        Drawer Content
      </Drawer>
    )
    expect(queryByText('Default Heading')).toBeTruthy()
  })

  test('renders Drawer with custom heading element', () => {
    const { getByText } = render(
      <Drawer
        isOpen={true}
        placement='right'
        onClose={jest.fn}
        onCollapse={jest.fn}
        heading={<div>Custom Heading</div>}
      >
        Content
      </Drawer>
    )
    expect(getByText('Custom Heading')).toBeTruthy()
  })
})
