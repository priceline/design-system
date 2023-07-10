/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Box,
  Divider,
  Flex,
  Input,
  ShadowEffect,
  ShadowOverlay,
  Text,
  createTheme,
  getPaletteColor,
} from '..'

const LightBackgroundInput = styled(Input)`
  background-color: ${getPaletteColor('background.lightest')};
`

const theme = createTheme()

export default {
  title: 'Design / z-indices',
}

export const _ZIndices = () => {
  return (
    <Box>
      <Text textStyle='heading4'>Priceline z-index map</Text>
      <Text textStyle='paragraph' my={3}>
        All Design System components will now use these z-index values where appropriate.
      </Text>
      <Text textStyle='paragraph' my={3}>
        Components also accept the mapped keys to their zIndex prop now. See the input example to see how.
      </Text>
      <Flex justifyContent='space-between' width={200}>
        <Text.span>Key</Text.span>
        <Text.span>Value</Text.span>
      </Flex>
      <Divider />
      {Object.keys(theme.zIndices)?.map((key) => {
        return (
          <Flex key={key} justifyContent='space-between' width={200} mb={2}>
            <Text.span>{key}</Text.span>
            <Text.span>{theme.zIndices[key]}</Text.span>
          </Flex>
        )
      })}
    </Box>
  )
}

export const InputWithShadowOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleHideOverlay = () => setShowOverlay(false)
  const handleShowOverlay = () => setShowOverlay(true)

  return (
    <>
      {showOverlay && <ShadowOverlay />}
      <LightBackgroundInput
        placeholder='z-index Overlay Example'
        zIndex={showOverlay ? 'onOverlay' : 'auto'}
        onBlur={handleHideOverlay}
        onFocus={handleShowOverlay}
      />
    </>
  )
}

export const InputWithShadowEffect = () => (
  <ShadowEffect>
    <LightBackgroundInput placeholder='z-index Overlay Example' />
  </ShadowEffect>
)
