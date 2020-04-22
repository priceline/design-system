import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Calendar } from 'pcln-icons'

import { Button, IconButton } from '../src'

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" />}
    />
  ))
  .add('with color', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" color="primary" />}
    />
  ))
  .add('with size', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" size={64} />}
    />
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
            <IconButton
              onClick={action('Clicked IconButton')}
              icon={<Calendar title="Choose date" size={64} />}
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
