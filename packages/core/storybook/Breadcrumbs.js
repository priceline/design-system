import React from 'react'
import { storiesOf } from '@storybook/react'
import { Breadcrumbs, Button } from '../src'
import {
  Flights as FlightsIcon,
  Home as HomeIcon,
  Seat as SeatIcon
} from 'pcln-icons'
import ForwardRefDemo from './utils/ForwardRefsDemo'

storiesOf('Breadcrumbs', module)
  .add('Basic', () => (
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
  ))
  .add('Icons', () => (
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
  ))
  .add('Forward refs to links', () => (
    <ForwardRefDemo
      refChild={dsRef => (
        <>
          <Breadcrumbs>
            <Breadcrumbs.Link
              href="https://www.priceline.com"
              label="Home"
              dsRef={dsRef}
              icon={<HomeIcon color="text.light" size={16} mr={2} />}
            />
            <Breadcrumbs.Link
              href="https://www.priceline.com/flights/"
              label="Flights"
              icon={<FlightsIcon color="text.light" size={16} mr={2} />}
            />
          </Breadcrumbs>
          <Button
            mt={4}
            onClick={() =>
              (dsRef.current.innerHTML = "What's the frequency, Kenneth?")
            }
          >
            Click to change the first link via ref
          </Button>
        </>
      )}
    />
  ))
