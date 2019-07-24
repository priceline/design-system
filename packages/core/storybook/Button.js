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
      <Button mr={2}>Button</Button>
      <Button variant="outline" mr={2}>
        Outline Button
      </Button>
      <Button variant="disabled" mr={2}>
        Disabled Button
      </Button>
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
        <Button color="warning" mr={2}>
          Button
        </Button>
        <Button color="orange" mr={2}>
          Button
        </Button>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Button variant="outline" color="secondary" mr={2}>
          Outline Button
        </Button>
        <Button variant="outline" color="error" mr={2}>
          Outline Button
        </Button>
        <Button variant="outline" color="warning" mr={2}>
          Outline Button
        </Button>
        <Button variant="outline" color="orange" mr={2}>
          Outline Button
        </Button>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Button variant="disabled" color="secondary" mr={2}>
          Disabled Button
        </Button>
        <Button variant="disabled" color="error" mr={2}>
          Disabled Button
        </Button>
        <Button variant="disabled" color="warning" mr={2}>
          Disabled Button
        </Button>
        <Button variant="disabled" color="orange" mr={2}>
          Disabled Button
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
