import React from 'react'
import { Breadcrumbs } from '../src'
import {
  Flights as FlightsIcon,
  Home as HomeIcon,
  Seat as SeatIcon
} from 'pcln-icons'

describe('Breadcrumbs', () => {
  test('renders basic', () => {
    const json = rendererCreateWithTheme(
      <Breadcrumbs>
        <Breadcrumbs.Link href="https://www.priceline.com" label="Home" />
        <Breadcrumbs.Link
          href="https://www.priceline.com/flights/"
          label="Flights"
        />
        <Breadcrumbs.Link
          href="https://www.priceline.com/flights/"
          label="Seat Selection"
        />
      </Breadcrumbs>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with icons', () => {
    const json = rendererCreateWithTheme(
      <Breadcrumbs>
        <Breadcrumbs.Link
          href="https://www.priceline.com"
          label="Home"
          icon={<HomeIcon color="text.light" size={16} mr={2} />}
        />
        <Breadcrumbs.Link
          href="https://www.priceline.com/flights/"
          label="Flights"
          icon={<FlightsIcon color="text.light" size={16} mr={2} />}
        />
        <Breadcrumbs.Link
          href="https://www.priceline.com/flights/"
          label="Seat Selection"
          icon={<SeatIcon color="text.dark" size={16} mr={2} />}
        />
      </Breadcrumbs>
    )
    expect(json).toMatchSnapshot()
  })
})
