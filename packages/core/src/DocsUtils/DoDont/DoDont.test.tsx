import React from 'react'
import { DoDont } from '..'
import { render, screen } from '../../__test__/testing-library'

describe('DoDont component', () => {
  it('renders the DO and DONT example components and text', () => {
    const doExample = <div>Do Example</div>
    const doText = 'this'
    const dontExample = <div>Dont Example</div>
    const dontText = 'that'

    render(<DoDont doExample={doExample} dontExample={dontExample} doText={doText} dontText={dontText} />)

    const doButton = screen.getByText('Do Example')
    const doCaps = screen.getByText('DO')
    const doDescription = screen.getByText('this')
    const dontButton = screen.getByText('Dont Example')
    const dontCaps = screen.getByText("DON'T")
    const dontDescription = screen.getByText('that')

    expect(doButton).toBeInTheDocument()
    expect(doDescription).toBeInTheDocument()
    expect(doCaps).toBeInTheDocument()
    expect(dontButton).toBeInTheDocument()
    expect(dontDescription).toBeInTheDocument()
    expect(dontCaps).toBeInTheDocument()
  })
})
