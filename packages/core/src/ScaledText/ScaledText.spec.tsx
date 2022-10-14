import React from 'react'
import { ScaledText } from '..'

describe('ScaledText', () => {
  test('renders svg text nodes in parent container', () => {
    const json = rendererCreateWithTheme(
      <div>
        <ScaledText
          lines={[{ text: 'Hello', props: { fontWeight: 'bold' } }, { text: 'World' }]}
          color='red'
        />
      </div>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
