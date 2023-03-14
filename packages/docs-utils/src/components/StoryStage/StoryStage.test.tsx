import React from 'react'
import { StoryStage } from '..'
import { render, screen } from '../../__test__/testing-library'

const content = 'This is some content'

describe('StoryStage component', () => {
  it('should render children with margin', () => {
    const dataTestId = 'stage-item'
    render(
      <StoryStage>
        <div data-testid={dataTestId}>{content}</div>
      </StoryStage>
    )
    const stageItem = screen.getByTestId(dataTestId)
    expect(stageItem).toHaveTextContent(content)
    expect(stageItem).toHaveStyle('margin: 16px')
  })

  it('should pass additional props to the Box component', () => {
    const dataTestId = 'stage'
    render(<StoryStage data-testid={dataTestId}>{content}</StoryStage>)
    const stage = screen.getByTestId(dataTestId)
    expect(stage).toBeInTheDocument()
  })
})
