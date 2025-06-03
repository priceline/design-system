import React from 'react'
import { render } from '../__test__/testing-library'
import { Stepper } from './Stepper'

const children = (
  <React.Fragment>
    <Stepper.Step completed>First Step</Stepper.Step>
    <Stepper.Step active>Second Step</Stepper.Step>
    <Stepper.Step>Third Step</Stepper.Step>
  </React.Fragment>
)

describe('Stepper', () => {
  test('renders without crashing', () => {
    const { asFragment } = render(<Stepper />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with children', () => {
    const { asFragment } = render(<Stepper>{children}</Stepper>)
    expect(asFragment()).toMatchSnapshot()
  })
})
