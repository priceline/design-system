import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import ShadowOverlay from './ShadowOverlay'
import { Input } from '../Input'
import { getPaletteColor } from '../utils'

const LightestBackgroundInput = styled(Input)`
  background-color: ${getPaletteColor('background.lightest')};
`

export default {
  title: 'ShadowOverlay',
  component: ShadowOverlay,
}

export const Overlay = () => (
  <ShadowOverlay>
    <LightestBackgroundInput onClick={action('Clicked')} />
  </ShadowOverlay>
)

export const MultipleInputsWithOverlays = () => (
  <>
    <ShadowOverlay shouldCloseOnBlur shouldOpenOnFocus>
      <LightestBackgroundInput onClick={action('Clicked 1')} mb={3} />
    </ShadowOverlay>
    <ShadowOverlay shouldCloseOnBlur shouldOpenOnFocus>
      <LightestBackgroundInput onClick={action('Clicked 2')} />
    </ShadowOverlay>
  </>
)
