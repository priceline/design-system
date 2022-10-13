import React from 'react'
import { ScaledText } from '..'

describe('ScaledText', () => {
  test('renders svg text nodes in parent container', () => {
    const json = rendererCreateWithTheme(
      <div>
        <ScaledText
          values={[{ value: 'Hello', props: { fontWeight: 'bold' } }, { value: 'World' }]}
          color='red'
        />
      </div>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
