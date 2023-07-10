import React from 'react'
import { render } from '../__test__/testing-library'

import { Dialog } from '.'

describe('Dialog', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Dialog>Dialog</Dialog>)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        .c0 {
        font-family: 'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif;
        line-height: 1.4;
        font-weight: 500;
      }

      .c0 * {
        box-sizing: border-box;
      }

      <div
          class="c0"
        />
      </DocumentFragment>
    `)
  })
})
