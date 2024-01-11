import { render, screen } from '@testing-library/react'
import React from 'react'
import { Flashcard } from '..'

const frontside = 'Front'
const backside = 'Back'
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Flashcard', () => {
  it('renders the front content', () => {
    render(<Flashcard backside={backside}>{frontside}</Flashcard>)
    const front = screen.getByText(frontside)
    const back = screen.queryByText(backside)
    expect(front).toBeInTheDocument()
    expect(back).not.toBeInTheDocument()
  })

  it('renders the back content when flipped', async () => {
    render(<Flashcard backside={backside}>{frontside}</Flashcard>)

    const front = screen.getByText(frontside)

    front.click()
    await wait(1000)

    const front2 = screen.queryByText(frontside)
    const back = screen.getByText(backside)
    expect(front2).not.toBeInTheDocument()
    expect(back).toBeInTheDocument()
  })

  it('renders the front content when dismissed', async () => {
    const handleChange = jest.fn()

    render(
      <>
        <span>outside</span>
        <Flashcard defaultOpen backside={backside} onOpenChange={handleChange}>
          {frontside}
        </Flashcard>
      </>
    )

    const outside = screen.getByText('outside')
    outside.click()
    await wait(1000)

    const front = screen.getByText(frontside)
    const back = screen.queryByText(backside)
    expect(front).toBeInTheDocument()
    expect(back).not.toBeInTheDocument()
    expect(handleChange).toHaveBeenCalled()
  })

  it('handles controlled state when open', async () => {
    render(
      <Flashcard backside={backside} open={false}>
        {frontside}
      </Flashcard>
    )

    const front = screen.getByText(frontside)
    front.click()
    await wait(1000)

    const back = screen.queryByText(backside)
    expect(back).not.toBeInTheDocument()
  })
})
