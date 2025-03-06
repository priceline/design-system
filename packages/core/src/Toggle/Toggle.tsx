import React from 'react'
import styled from 'styled-components'
import { Absolute } from '../Absolute/Absolute'
import { Box, type BoxProps } from '../Box/Box'
import { getPaletteColor } from '../utils/utils'

const alphaColor = (color: string, props) => `${getPaletteColor(color)(props)}4C`

const AbsoluteInput = styled.input`
  position: absolute;
  z-index: 1;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const OutlineAbsolute = styled(Absolute)`
  height: calc(100% + 8px);
  opacity: 0;
  background-color: ${(props) => alphaColor(props.isOn ? 'primary.base' : 'background.dark', props)};
`

const CircleAbsolute = styled(Absolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.width};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  z-index: 2;
  transition: left 0.3s;
`

const WrapperBox = styled(Box)`
  position: relative;
  height: ${(props) => props.height}px;
  transition: background-color 0.15s ease 0s;
  min-width: ${(props) => props.width}px;

  ${AbsoluteInput}:focus-visible + ${OutlineAbsolute} {
    opacity: 1;
  }

  &:hover:not([disabled]) {
    background-color: ${(props) =>
      `${getPaletteColor(props.isOn ? 'primary.dark' : 'background.tone')(props)}`};
  }

  &:hover:not([disabled]) > #circle-handle {
    box-shadow: ${(props) => props.theme.shadows.xl};
  }
`

/**
 * @public
 */
export type ToggleProps = {
  isOn?: boolean
  label?: string
  onToggle?: BoxProps['onClick']
  disabled?: boolean
  width?: string
  height?: number
  icon?: React.ReactNode
  name?: string
}

/**
 * Toggle component
 *
 * @public
 */
export function Toggle({
  isOn = false,
  label,
  onToggle,
  disabled,
  height = 24,
  icon,
  name,
}: ToggleProps): React.ReactElement {
  const width = height * 1.875
  const circleAbsoluteSize = height - 4
  const leftToggleOnPosition = width - circleAbsoluteSize - 2

  return (
    <WrapperBox
      borderRadius='full'
      color={disabled ? 'background.light' : isOn ? 'primary.base' : 'background.dark'}
      height={height}
      isOn={isOn}
      width={width}
      disabled={disabled}
      onClick={disabled ? null : onToggle}
    >
      <AbsoluteInput
        aria-checked={isOn}
        aria-label={label}
        checked={isOn}
        disabled={disabled}
        onChange={() => {}}
        p={0}
        role='switch'
        tabIndex='0'
        type='checkbox'
        name={name}
      />

      <OutlineAbsolute borderRadius='full' isOn={isOn} left='-4px' top='-4px' width='calc(100% + 8px)' />

      <CircleAbsolute
        borderRadius='full'
        color='background.lightest'
        left={isOn ? leftToggleOnPosition : '2px'}
        top='2px'
        id='circle-handle' // added for testing purpose
        width={`${circleAbsoluteSize}px`}
        boxShadowSize='sm'
        disabled={disabled}
        data-testid='handle-div'
      >
        {icon}
      </CircleAbsolute>
    </WrapperBox>
  )
}

Toggle.displayName = 'Toggle'
