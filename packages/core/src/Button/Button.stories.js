import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, optionsKnob } from '@storybook/addon-knobs'
import { Cartesian, Catch, LiveEditor, Markdown, XRay } from '@compositor/kit'

import { Box, Button } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  padding: 100px;
`
const variations = {
  outline: 'outline',
  fill: 'fill',
  link: 'link',
  subtle: 'subtle',
  plain: 'plain',
  lightFill: 'lightFill',
}
const sizes = { small: 'small', medium: 'medium', large: 'large' }
const colors = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  success: 'success',
  error: 'error',
  warning: 'warning',
  alert: 'alert',
  caution: 'caution',
  notify: 'notify',
  pricePrimary: 'pricePrimary',
  priceSecondary: 'priceSecondary',
  promoPrimary: 'promoPrimary',
  promoSecondary: 'promoSecondary',
  border: 'border',
  background: 'background',
}

export default {
  title: 'Button',

  decorators: [
    (story) => (
      <Box>
        <Markdown>
          {`
  Use the <code>&lt;Button /&gt;</code> component to render a primitive button. Use the *variation* prop to change the appearance of the button.
          `}
        </Markdown>
        {story()}
      </Box>
    ),
    withKnobs,
  ],

  parameters: {
    component: Button,
  },
}

export const _Button = () => {
  const variation = optionsKnob('Variation', variations, 'fill', {
    display: 'select',
  })
  const size = optionsKnob('Size', sizes, 'medium', {
    display: 'select',
  })
  const color = optionsKnob('Palette Color', colors, 'primary', {
    display: 'select',
  })
  const disabled = boolean('Disabled?', false)
  const fullWidth = boolean('Full Width?', false)

  return (
    <Catch>
      <LiveEditor
        code={`<Button
  variation='${variation}'
  size='${size}'
  color='${color}'
  disabled={${disabled}}
  width={${fullWidth ? 1 : null}}>
  BUTTON
</Button>`}
        scope={{
          Button,
        }}
      />
    </Catch>
  )
}

export const TryIt = () => {
  const variation = optionsKnob('Variation', variations, 'fill', {
    display: 'multi-select',
  })
  const size = optionsKnob('Size', sizes, 'medium', {
    display: 'multi-select',
  })
  const color = optionsKnob('Palette Color', colors, 'primary', {
    display: 'multi-select',
  })
  const disabled = boolean('Disabled?', false)
  const fullWidth = boolean('Full Width?', false)

  return (
    <Cartesian
      component={Button}
      m={3}
      variation={variation}
      size={size}
      color={color}
      disabled={disabled}
      width={fullWidth ? 1 : null}
      onClick={action('Clicked button in Try It!')}
    >
      Try This Button!
    </Cartesian>
  )
}

TryIt.story = {
  name: 'Try It!',
}

export const All = () => {
  return (
    <Cartesian
      component={Button}
      m={3}
      color={Object.keys(colors)}
      variation={Object.keys(variations)}
      disabled={[false, true]}
      size={Object.keys(sizes)}
      onClick={action('Clicked button in All')}
    >
      I am a Button
    </Cartesian>
  )
}

export const Geometry = () => (
  <XRay>
    <Cartesian
      component={Button}
      m={3}
      variation={Object.keys(variations)}
      size={Object.keys(sizes)}
    >
      Button Geometry
    </Cartesian>
  </XRay>
)

export const ForwardRefs = () => (
  <ForwardRefDemo
    refChild={(dsRef) => (
      <>
        <Button ref={dsRef} color='error' size='large'>
          PANIC
        </Button>
        <br />
        <Button mt={4} onClick={() => dsRef.current.focus()}>
          Click to focus PANIC button via ref
        </Button>
      </>
    )}
  />
)

ForwardRefs.story = {
  name: 'Forward refs',
}

export const StyledButtonShouldNotLoseItsStyling = () => {
  return (
    <Box>
      <StyledButton>BUTTON</StyledButton>
    </Box>
  )
}

StyledButtonShouldNotLoseItsStyling.story = {
  name: 'Styled Button should not lose its styling',
}
