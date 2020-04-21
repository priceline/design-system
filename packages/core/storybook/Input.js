import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Button, Input, Label } from '../src'

storiesOf('Input', module)
  .add(
    'Input component',
    withInfo({
      inline: true,
      text:
        'Simple styled input component that accepts a color and whether or not to show an error container.'
    })(() => <Input my={3} />)
  )
  .add('Colors', () => (
    <Box width={400}>
      <Input mb={3} id="input-colors-1" placeholder="No color" />
      <Input mb={3} id="input-colors-2" color="primary" placeholder="Primary" />
      <Input
        mb={3}
        id="input-colors-3"
        color="secondary"
        placeholder="Secondary"
      />
      <Input mb={3} id="input-colors-4" color="warning" placeholder="Warning" />
      <Input mb={3} id="input-colors-5" color="alert" placeholder="Alert" />
      <Input mb={3} id="input-colors-6" color="caution" placeholder="Caution" />
    </Box>
  ))
  .add('Forward refs', () => {
    class ForwardRefDemo extends React.Component {
      constructor(props) {
        super(props)
        this.btnRef = React.createRef()
      }

      componentDidMount() {
        // For SC3, omit current because SC3 uses innerRef
        this.btnRef.current.focus()
      }

      render() {
        return (
          <div>
            {/*
              // This example is for SC3
              <Button dsRef={e => this.btnRef = e}>Click me</Button>
            */}
            <Input dsRef={this.btnRef} value="Sad Panda :(" />
            <Button
              onClick={() => (this.btnRef.current.value = 'Happy Panda :D')}
              mt={4}
            >
              Click to change input value via ref
            </Button>
          </div>
        )
      }
    }

    return <ForwardRefDemo />
  })
  .add('With external label', () => (
    <Box width={400}>
      <Label fontSize={4} htmlFor="sample-input">
        Label!
      </Label>
      <Input id="sample-input" placeholder="Click the label" />
    </Box>
  ))
