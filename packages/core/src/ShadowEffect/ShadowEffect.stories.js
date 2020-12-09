import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import ShadowEffect, { ShadowOverlay } from './ShadowEffect'
import { Input } from '../Input'
import { getPaletteColor } from '../utils'

const LightestBackgroundInput = styled(Input)`
  background-color: ${getPaletteColor('background.lightest')};
`

export default {
  title: 'ShadowEffect',
  component: ShadowEffect,
}

export const Effect = () => (
  <ShadowEffect>
    <LightestBackgroundInput onClick={action('Clicked')} />
  </ShadowEffect>
)

export const MultipleInputsWithOverlays = () => (
  <>
    <ShadowEffect shouldCloseOnBlur shouldOpenOnFocus>
      <LightestBackgroundInput onClick={action('Clicked 1')} mb={3} />
    </ShadowEffect>
    <ShadowEffect shouldCloseOnBlur shouldOpenOnFocus>
      <LightestBackgroundInput onClick={action('Clicked 2')} />
    </ShadowEffect>
  </>
)

export const Overlay = () => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {isOpen && <ShadowOverlay zIndex={-1} onClick={handleClose} />}
      <LightestBackgroundInput
        onBlur={handleClose}
        onClick={handleOpen}
        onFocus={handleOpen}
      />
    </>
  )
}
