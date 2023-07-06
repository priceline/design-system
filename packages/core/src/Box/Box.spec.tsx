import { describe, it, expect } from 'vitest'
import { render } from '../__test__/testing-library'

import { Box } from '.'

describe('Box', () => {
  it('renders', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="cETxcT"
          />
        </div>
      </DocumentFragment>
    `)
  })

  it('width and height props set width/height', () => {
    const { asFragment } = render(<Box width={1 / 2} height='50%' />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="gTAEUK"
            height="50%"
            width="0.5"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('height', '50%')
    // expect(json).toHaveStyleRule('width', '50%')
  })

  it('m prop sets margin', () => {
    const { asFragment } = render(<Box m={2} />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="bAeKOk"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('margin', theme.space[2])
  })

  it('maxHeight, maxWidth, minHeight, minWidth', () => {
    const { asFragment } = render(<Box maxHeight={250} maxWidth={250} minHeight={55} minWidth={55} />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="gXVrDr"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('max-height', '250px')
    // expect(json).toHaveStyleRule('max-width', '250px')
    // expect(json).toHaveStyleRule('min-height', '55px')
    // expect(json).toHaveStyleRule('min-width', '55px')
  })

  it('p prop sets padding', () => {
    const { asFragment } = render(<Box p={2} />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="hgdKtj"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('padding', theme.space[2])
  })

  it('color prop sets color', () => {
    const { asFragment } = render(<Box color='blue' />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="inmfTJ"
            color="blue"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  it('boxShadowSize prop sets box-shadow', () => {
    const { asFragment } = render(<Box boxShadowSize='sm' />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cMczSr"
        >
          <div
            class="liWhWl"
          />
        </div>
      </DocumentFragment>
    `)
    // expect(json).toHaveStyleRule('box-shadow', theme.shadows.sm)
  })
})
