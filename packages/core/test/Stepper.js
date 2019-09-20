import React from 'react'
import { Stepper } from '../src'

const children = (
  <React.Fragment>
    <Stepper.Step completed>First Step</Stepper.Step>
    <Stepper.Step active>Second Step</Stepper.Step>
    <Stepper.Step>Third Step</Stepper.Step>
  </React.Fragment>
)

describe('Stepper', () => {
  test('renders without crashing', () => {
    const json = rendererCreateWithTheme(<Stepper />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with children', () => {
    const json = rendererCreateWithTheme(<Stepper>{children}</Stepper>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
