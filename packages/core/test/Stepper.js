import React from 'react'
import { Stepper } from '../src'

const children = (
  <React.Fragment>
    <Stepper.Step isCompleted>First Breadcrumb</Stepper.Step>
    <Stepper.Step isCurrent>Second Breadcrumb</Stepper.Step>
    <Stepper.Step>Third Breadcrumb</Stepper.Step>
  </React.Fragment>
)

const items = [
  {
    label: 'First Breadcrumb'
  },
  {
    label: 'Second Breadcrumb'
  },
  {
    label: 'Third Breadcrumb'
  }
]

describe('Breadcrumbs', () => {
  test('renders without crashing', () => {
    const json = rendererCreateWithTheme(<Stepper />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with children', () => {
    const json = rendererCreateWithTheme(<Stepper>{children}</Stepper>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with items - current index = 0', () => {
    const json = rendererCreateWithTheme(
      <Stepper currentIndex={0} items={items} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with items - current index = 1', () => {
    const json = rendererCreateWithTheme(
      <Stepper currentIndex={1} items={items} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
