import React from 'react'
import { Popout } from '.'
import { fireEvent, render } from '../__test__/testing-library'

const trigger = <input data-testid='trigger' aria-label='trigger' />
const content = <div data-testId='content'>Content</div>
const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Popout', () => {
  it('Renders the trigger', () => {
    const { getByTestId } = render(<Popout trigger={trigger} />)
    expect(getByTestId('trigger')).toBeTruthy()
  })

  it('Handles opening and closing', async () => {
    const handler = jest.fn()
    const { getByTestId } = render(
      <Popout trigger={trigger} content={content} onOpen={handler} onClose={handler} />
    )
    const triggerElement = getByTestId('trigger')
    fireEvent.focusIn(triggerElement)
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(1)
    const contentElement = getByTestId('content')
    fireEvent.keyDown(contentElement, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    })
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('Handles losing focus', async () => {
    const handler = jest.fn()
    const { getByTestId } = render(
      <>
        <input data-testid='outside' aria-label='outside' />
        <Popout trigger={trigger} content={content} onOpen={handler} onClose={handler} />
      </>
    )
    const triggerElement = getByTestId('trigger')
    fireEvent.focusIn(triggerElement)
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(1)

    const outsideElement = getByTestId('outside')
    fireEvent.focusIn(outsideElement)
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('Closes when the trigger ref is clicked', async () => {
    const handler = jest.fn()
    const triggerRef = React.createRef<HTMLElement>()
    const _trigger = React.cloneElement(trigger, { ref: triggerRef })
    const { getByTestId } = render(
      <Popout
        trigger={_trigger}
        triggerRef={triggerRef}
        content={content}
        onOpen={handler}
        onClose={handler}
        closeOnTriggerRefClick
      />
    )
    const triggerElement = getByTestId('trigger')
    fireEvent.focusIn(triggerElement)
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(1)
    fireEvent.click(triggerRef.current)
    await delay(100)
    expect(handler).toHaveBeenCalledTimes(2)
  })
})
