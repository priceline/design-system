import { describe, expect, it } from 'vitest'
import RangeSlider, { Slider } from '.'
import { render } from './__test__/testing-library'

describe('pcln-slider', () => {
  it('RangeSlider', () => {
    const { asFragment } = render(<RangeSlider />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-ktJbId cdSokr"
        >
          <div
            class="rc-slider sc-kbousE wXneo rc-slider-horizontal"
          >
            <div
              class="rc-slider-rail"
            />
            <div
              class="rc-slider-track rc-slider-track-1"
              style="left: 0%; width: 0%;"
            />
            <div
              class="rc-slider-step"
            />
            <div
              aria-disabled="false"
              aria-orientation="horizontal"
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="0"
              class="rc-slider-handle rc-slider-handle-1"
              role="slider"
              style="left: 0%; transform: translateX(-50%);"
              tabindex="0"
            />
            <div
              aria-disabled="false"
              aria-orientation="horizontal"
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="0"
              class="rc-slider-handle rc-slider-handle-2"
              role="slider"
              style="left: 0%; transform: translateX(-50%);"
              tabindex="0"
            />
          </div>
        </div>
      </DocumentFragment>
    `)
  })

  it('Slider', () => {
    const { asFragment } = render(<Slider />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-ktJbId cdSokr"
        >
          <div
            class="rc-slider sc-gfoqjT gaJTxo rc-slider-horizontal"
          >
            <div
              class="rc-slider-rail"
            />
            <div
              class="rc-slider-track"
              style="left: 0%; width: 0%;"
            />
            <div
              class="rc-slider-step"
            />
            <div
              aria-disabled="false"
              aria-orientation="horizontal"
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="0"
              class="rc-slider-handle"
              role="slider"
              style="left: 0%; transform: translateX(-50%);"
              tabindex="0"
            />
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
