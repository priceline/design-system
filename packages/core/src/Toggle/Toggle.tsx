import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { Box, Absolute, Input, getPaletteColor } from '..'

const alphaColor = (color: string, props) => `${getPaletteColor(color)(props)}4C`

const AbsoluteInput = styled(Input)`
  position: absolute;
  z-index: 5;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
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
  pointer-events: none;
  transition: left 0.3s;
`

const WrapperBox = styled(Box)`
  position: relative;
  height: ${(props) => props.height}px;
  transition: background-color 0.3s;
  min-width: ${(props) => props.width}px;

  ${AbsoluteInput}:focus + ${OutlineAbsolute} {
    opacity: 1;
  }
`

const propTypes = {
  isOn: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.node,
  name: PropTypes.string,
}

const Toggle: React.FC<InferProps<typeof propTypes>> = ({
  isOn,
  label,
  onToggle,
  disabled,
  height,
  icon,
  name,
}) => {
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
    >
      <AbsoluteInput
        aria-checked={isOn}
        aria-label={label}
        checked={isOn}
        disabled={disabled}
        onClick={disabled ? null : onToggle}
        onChange={() => {}}
        p={0}
        role='switch'
        tabIndex='0'
        type='checkbox'
        name={name}
      />

      <OutlineAbsolute borderRadius='full' isOn={isOn} left={-4} top={-4} width='calc(100% + 8px)' />

      <CircleAbsolute
        borderRadius='full'
        color='background.lightest'
        left={isOn ? leftToggleOnPosition : 2}
        top={2}
        width={`${circleAbsoluteSize}px`}
      >
        {icon}
      </CircleAbsolute>
    </WrapperBox>
  )
}

Toggle.displayName = 'Toggle'

Toggle.propTypes = propTypes

Toggle.defaultProps = {
  isOn: false,
  height: 24,
}

export default Toggle
