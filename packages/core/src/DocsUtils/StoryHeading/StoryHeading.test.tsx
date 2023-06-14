import React from 'react'
import { StoryHeading } from '..'
import { render, screen } from '../../__test__/testing-library'

describe('StoryHeading component', () => {
  it('should render with the correct text and id', () => {
    const storyName = 'Introduction'
    const storyTitle = 'Getting started'
    render(<StoryHeading storyName={storyName} storyTitle={storyTitle} />)
    const heading = screen.getByText(storyName)
    expect(heading).toHaveAttribute('id', 'story--getting-started--introduction')
  })
})
