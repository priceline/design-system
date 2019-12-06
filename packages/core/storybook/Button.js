import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { Box, Button, Text } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text:
        'Use the <Button /> component to render a primitive button. Use the `variation` prop to change the look of the button.'
    })(() => <Button size="large">Button</Button>)
  )
  .add('variations', () => (
    <div>
      <div>
        <Button mr={2}>Button</Button>
        <Button variation="outline" mr={2}>
          Outline Button
        </Button>
        <Button variation="link" mr={2} onClick={action('clicked')}>
          Link Button
        </Button>
      </div>
      <Box py={2}>
        <Text fontSize={1}>
          Button with variation link can be used as a{' '}
          <Button variation="link" onClick={action('modal opened')}>
            disclaimer
          </Button>{' '}
          to pop a modal.
        </Text>
      </Box>
    </div>
  ))
  .add('colors', () => (
    <React.Fragment>
      <div>
        <Button color="secondary" mr={2}>
          Button
        </Button>
        <Button color="error" mr={2}>
          Button
        </Button>
        <Button color="caution" mr={2}>
          Button
        </Button>
        <Button color="alert" mr={2}>
          Button
        </Button>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Button variation="outline" color="secondary" mr={2}>
          Outline Button
        </Button>
        <Button variation="outline" color="error" mr={2}>
          Outline Button
        </Button>
        <Button variation="outline" color="caution" mr={2}>
          Outline Button
        </Button>
        <Button variation="outline" color="alert" mr={2}>
          Outline Button
        </Button>
      </div>
    </React.Fragment>
  ))
  .add('sizes', () => (
    <div>
      <Button size="large" mr={2}>
        Large
      </Button>
      <Button size="medium" mr={2}>
        Medium
      </Button>
      <Button size="small" mr={2}>
        Small
      </Button>
    </div>
  ))
  .add('width', () => <Button width={1}>Full Width</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>)
