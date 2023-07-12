import { render, screen } from '@testing-library/react'
import React from 'react'
import { Dialog } from '..'

const triggerText = 'Open Dialog'
const contentText = 'Dialog Content'

describe('Dialog', () => {
  it('renders the trigger node', () => {
    render(
      <Dialog triggerNode={<button>{triggerText}</button>} ariaDescription='Description' ariaTitle='Title'>
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    expect(triggerNode).toBeInTheDocument()
  })

  it('renders the dialog content when trigger is clicked', () => {
    render(
      <Dialog triggerNode={<button>{triggerText}</button>} ariaDescription='Description' ariaTitle='Title'>
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    const contentNode = screen.getByText(contentText)
    expect(contentNode).toBeInTheDocument()
  })

  it('calls onOpenChange when trigger is clicked', () => {
    const onOpenChange = jest.fn()
    render(
      <Dialog
        triggerNode={<button>{triggerText}</button>}
        ariaDescription='Description'
        ariaTitle='Title'
        onOpenChange={onOpenChange}
      >
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('handles controlled state when open', () => {
    render(
      <Dialog
        triggerNode={<button>{triggerText}</button>}
        ariaDescription='Description'
        ariaTitle='Title'
        open={false}
      >
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    const contentNode = screen.queryByText(contentText)
    expect(contentNode).not.toBeVisible()
  })
})
