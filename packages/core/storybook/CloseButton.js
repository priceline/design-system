import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, CloseButton } from '../src'

storiesOf('CloseButton', module)
  .add('with click handler', () => (
    <CloseButton color="background.darkest" onClick={action('clicked')} />
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
            <CloseButton
              color="background.darkest"
              onClick={action('clicked')}
              dsRef={this.dsRef}
            />
            <br />
            <Button onClick={() => this.dsRef.current.focus()} mt={4}>
              Click to focus button via ref
            </Button>
          </div>
        )
      }
    }

    return <ForwardRefDemo />
  })
