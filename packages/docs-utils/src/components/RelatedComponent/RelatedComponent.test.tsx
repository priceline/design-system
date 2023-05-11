// import { linkTo } from '@storybook/addon-links'
import React from 'react'
import { RelatedComponent, RelatedComponentContainer } from '..'
import { fireEvent, render, screen } from '../../__test__/testing-library'

describe('RelatedComponent', () => {
  const name = 'Component Name'
  const desc = 'Component description'
  const linkToStory = 'path/to/story'

  it('renders component name and description', () => {
    render(
      <RelatedComponent name={name} desc={desc} linkTo={linkToStory}>
        Test
      </RelatedComponent>
    )
    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(desc)).toBeInTheDocument()
  })

  it('calls linkToStory function on click', () => {
    render(<RelatedComponent name={name}>Test</RelatedComponent>)
    const componentBox = screen.getByText(name).parentElement
    fireEvent.click(componentBox)
    expect(componentBox).toBeInTheDocument()
  })
})

describe('RelatedComponentContainer', () => {
  it('renders child components', () => {
    render(
      <RelatedComponentContainer>
        <RelatedComponent name='Component 1'>Test</RelatedComponent>
        <RelatedComponent name='Component 2'>Test</RelatedComponent>
        <RelatedComponent name='Component 3'>Test</RelatedComponent>
      </RelatedComponentContainer>
    )
    expect(screen.getByText('Component 1')).toBeInTheDocument()
    expect(screen.getByText('Component 2')).toBeInTheDocument()
    expect(screen.getByText('Component 3')).toBeInTheDocument()
  })
})
