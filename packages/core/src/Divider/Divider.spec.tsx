import { Divider } from '..'
import { render } from '../__test__/testing-library'

describe('Divider', () => {
  test('renders', () => {
    const { asFragment } = render(<Divider />)
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

      .c1 {
        border: 0;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-color: #c0cad5;
        background-color: #c0cad5;
        margin-left: 0px;
        margin-right: 0px;
      }

      <div
          class="c0"
        >
          <hr
            class="c1"
            color="border"
          />
        </div>
      </DocumentFragment>
    `)
  })
})
