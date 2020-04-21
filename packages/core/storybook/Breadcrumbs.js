import React from 'react'
import { storiesOf } from '@storybook/react'
import { BlockLink, Breadcrumbs, Button } from '../src'
import {
  Flights as FlightsIcon,
  Home as HomeIcon,
  Seat as SeatIcon
} from 'pcln-icons'

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
  .add('Forward refs to links', () => {
    class ForwardRefs extends React.Component {
      constructor(props) {
        super(props)
        this.linkRef = React.createRef()
      }

      render() {
        return (
          <div>
            <Breadcrumbs>
              <Breadcrumbs.Link
                href="https://www.priceline.com"
                label="Home"
                dsRef={this.linkRef}
                icon={<HomeIcon color="text.light" size={16} mr={2} />}
              />
              <Breadcrumbs.Link
                href="https://www.priceline.com/flights/"
                label="Flights"
                icon={<FlightsIcon color="text.light" size={16} mr={2} />}
              />
            </Breadcrumbs>
            <button onClick={() => this.linkRef.current.click()}>
              Click to activate the first link via ref
            </button>
          </div>
        )
      }
    }

    return <ForwardRefs />
  })
