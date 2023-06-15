import type { StoryFn, StoryObj } from '@storybook/react'

import React from 'react'

import { LiveDemo } from './LiveDemo'
import { act, fireEvent, render, screen, sleep } from '../../__test__/testing-library'

window.scrollTo = jest.fn()
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
})

const code = `<div>Hello World</div>`

const storyObj: StoryObj = {
  render: () => <div>Hello World</div>,
}

const storyFn: StoryFn = () => <div>Hello World</div>

describe('LiveDemo', () => {
  it('renders code string', async () => {
    await act(async () => {
      render(<LiveDemo code={code} />)
    })
    const content = screen.getByText('Hello World')
    expect(content).toBeInTheDocument()
  })

  it('renders story object', async () => {
    await act(async () => {
      render(<LiveDemo code={storyObj} />)
    })
    const content = screen.getByText('Hello World')
    expect(content).toBeInTheDocument()
  })

  it('renders story function', async () => {
    await act(async () => {
      render(<LiveDemo code={storyFn} />)
    })
    const content = screen.getByText('Hello World')
    expect(content).toBeInTheDocument()
  })

  it('shows, hides, and copies the code', async () => {
    const copyMock = jest.spyOn(navigator.clipboard, 'writeText')
    await act(async () => {
      render(<LiveDemo code={code} />)
    })
    const showHideToggle = screen.getByText('Show Code')
    expect(showHideToggle).toBeInTheDocument()
    await act(async () => {
      fireEvent.click(showHideToggle)
    })
    expect(showHideToggle).toHaveTextContent('Hide Code')
    const copyButton = screen.getAllByRole('button')[1]
    await act(async () => {
      fireEvent.click(copyButton)
      await sleep(1500)
    })
    expect(copyMock).toHaveBeenCalled()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
})
