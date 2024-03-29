import { Flights as FlightsIcon, Home as HomeIcon, Seat as SeatIcon } from 'pcln-icons'
import React from 'react'
import { Button } from '../Button/Button'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { Breadcrumbs } from './Breadcrumbs'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export const Basic = () => (
  <Breadcrumbs>
    <Breadcrumbs.Link href='https://www.priceline.com' label='Home' />
    <Breadcrumbs.Link href='https://www.priceline.com/flights/' label='Flights' />
    <Breadcrumbs.Link href='https://www.priceline.com/flights/' label='Seat Selection' />
  </Breadcrumbs>
)

export const Icons = () => (
  <Breadcrumbs>
    <Breadcrumbs.Link
      href='https://www.priceline.com'
      label='Home'
      icon={<HomeIcon color='text.light' size={16} mr={2} />}
    />
    <Breadcrumbs.Link
      href='https://www.priceline.com/flights/'
      label='Flights'
      icon={<FlightsIcon color='text.light' size={16} mr={2} />}
    />
    <Breadcrumbs.Link
      href='https://www.priceline.com/flights/'
      label='Seat Selection'
      icon={<SeatIcon color='text.dark' size={16} mr={2} />}
    />
  </Breadcrumbs>
)

export const ForwardRefsToLinks = () => {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.innerHTML = "What's the frequency, Kenneth?")
    }
    return (
      <>
        <Breadcrumbs>
          <Breadcrumbs.Link
            href='https://www.priceline.com'
            label='Home'
            ref={dsRef}
            icon={<HomeIcon color='text.light' size={16} mr={2} />}
          />
          <Breadcrumbs.Link
            href='https://www.priceline.com/flights/'
            label='Flights'
            icon={<FlightsIcon color='text.light' size={16} mr={2} />}
          />
        </Breadcrumbs>
        <Button mt={4} onClick={onClick}>
          Click to change the first link via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefsToLinks.story = {
  name: 'Forward refs to links',
}
