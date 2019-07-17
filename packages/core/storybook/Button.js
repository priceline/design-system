import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text:
        'Use the <Button /> component to render a primitive button. Use the `variant` prop to change the look of the button.'
    })(() => <Button size="large">Button</Button>)
  )
  .add('variants', () => (
    <div>
      <Button mr={2}>Primary Button</Button>
      <Button variant="secondary" mr={2}>
        Secondary Button
      </Button>
      <Button variant="outline" mr={2}>
        Outline Button
      </Button>
      <Button variant="disabled" mr={2}>
        Disabled Button
      </Button>
      <Button variant="negative" mr={2}>
        Negative Button
      </Button>
    </div>
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
