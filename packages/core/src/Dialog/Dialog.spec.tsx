import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { Dialog } from './Dialog'

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

  it('renders the dialog content when trigger is clicked', async () => {
    render(
      <Dialog triggerNode={<button>{triggerText}</button>} ariaDescription='Description' ariaTitle='Title'>
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const contentNode = screen.getByText(contentText)
    expect(contentNode).toBeInTheDocument()
  })

  it('renders the dialog with footer content', async () => {
    render(
      <Dialog
        triggerNode={<button>{triggerText}</button>}
        ariaDescription='Description'
        ariaTitle='Title'
        footerContent={<div>Footer Content</div>}
      >
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    await waitFor(() => {
      expect(screen.getByText('Footer Content')).toBeInTheDocument()
    })
  })

  it('Add the tabIndex attribution to element as default', async () => {
    render(
      <Dialog triggerNode={<button>{triggerText}</button>} ariaDescription='Description' ariaTitle='Title'>
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    await waitFor(() => {
      const element = screen.getByRole('dialog', { name: 'Title' })
      expect(element).toBeInTheDocument()
      expect(element).toHaveAttribute('aria-describedby', 'Description')
      expect(element).toHaveAttribute('tabindex', '-1')
    })
  })

  it('Do not add the tabIndex attribution to element if shouldDisableTabIndex is true', async () => {
    render(
      <Dialog
        triggerNode={<button>{triggerText}</button>}
        ariaDescription='Description'
        ariaTitle='Title'
        shouldDisableTabIndex={true}
      >
        {contentText}
      </Dialog>
    )

    const triggerNode = screen.getByText(triggerText)
    triggerNode.click()

    await waitFor(() => {
      const element = screen.getByRole('dialog', { name: 'Title' })
      expect(element).toBeInTheDocument()
      expect(element).not.toHaveAttribute('tabindex')
    })
  })

  it.skip('calls onOpenChange when trigger is clicked', () => {
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

  it.skip('handles controlled state when open', () => {
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
