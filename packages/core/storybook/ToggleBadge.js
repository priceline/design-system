import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Checkbox, ToggleBadge } from '../src'

storiesOf('ToggleBadge', module)
  .add(
    'ToggleBadge component',
    withInfo({
      inline: true,
      text:
        'Use the <ToggleBadge /> component to render a primitive ToggleBadge.'
    })(() => <ToggleBadge>ToggleBadge</ToggleBadge>)
  )
  .add('Selected', () => <ToggleBadge selected>Selected - Badge</ToggleBadge>)
  .add('Unselected', () => <ToggleBadge>Un - Selected - Badge</ToggleBadge>)
  .add('Unselected with different background color', () => (
    <ToggleBadge unSelectedBg="yellow">Un - Selected - Badge</ToggleBadge>
  ))
  .add('A group', () => (
    <div>
      <ToggleBadge selected>Flight + Hotel</ToggleBadge>
      <ToggleBadge>Flight + Hotel + Car</ToggleBadge>
      <ToggleBadge>Flight + Car</ToggleBadge>
    </div>
  ))
  .add('Forward refs', () => {
    class ForwardRefDemo extends React.Component {
      constructor(props) {
        super(props)
        this.dsRef = React.createRef()
      }

      render() {
        return (
          <div>
            {/*
              // This example is for SC3
              <Button dsRef={e => this.btnRef = e}>Click me</Button>
            */}
            <div>
              <ToggleBadge selected>Flight + Hotel</ToggleBadge>
              <ToggleBadge dsRef={this.dsRef}>Flight + Hotel + Car</ToggleBadge>
              <ToggleBadge>Flight + Car</ToggleBadge>
            </div>
            <Button onClick={() => this.dsRef.current.focus()} mt={4}>
              Click to focus second badge via ref
            </Button>
          </div>
        )
      }
    }

    return <ForwardRefDemo />
  })
