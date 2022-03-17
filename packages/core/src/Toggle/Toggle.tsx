import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { getPaletteColor, Box, Absolute } from '..'

const AbsoluteInput = styled.input`
  position: absolute;
  z-index: 5;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: ${(props) => props.borderRadius}px;
`

const OutlineAbsolute = styled(Absolute)`
  height: calc(100% + 8px);
  opacity: 0;
  background-color: ${(props) => (props.isOn ? 'rgba(0, 122, 255, .3)' : 'rgba(79, 111, 143, .3)')};
  border-radius: ${(props) => props.borderRadius}px;
  border: 1px solid
    ${(props) =>
      props.isOn ? getPaletteColor('primary')(props) : getPaletteColor('background.light')(props)};
`

const CircleAbsolute = styled(Absolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius}px;
  pointer-events: none;
  transition: left 0.3s;
  box-shadow: ${(props) => props.theme.boxShadows[0]};
`

const WrapperBox = styled(Box)`
  position: relative;
  border-radius: ${(props) => props.borderRadius}px;
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
}

const Toggle: React.FC<InferProps<typeof propTypes>> = ({
  isOn,
  label,
  onToggle,
  disabled,
  height,
  icon,
}) => {
  const width = height * 1.875
  const borderRadius = `${height / 2}`
  const outlineAbsoluteBorderRadius = `${height + 4}`
  const circleAbsoluteSize = height - 4
  const circleAbsoluteWidth = `${circleAbsoluteSize}px`
  const circleAbsoluteBorderRadius = `${circleAbsoluteSize / 2}`
  const leftToggleOnPosition = width - circleAbsoluteSize - 2

  return (
    <WrapperBox
      borderRadius={borderRadius}
      color={disabled ? 'background.light' : isOn ? 'primary.base' : 'background.dark'}
      height={height}
      isOn={isOn}
      width={width}
    >
      <AbsoluteInput
        aria-checked={isOn}
        aria-label={label}
        borderRadius={borderRadius}
        checked={isOn}
        disabled={disabled}
        onClick={disabled ? null : onToggle}
        onChange={() => {}}
        role='switch'
        tabIndex='0'
        type='checkbox'
      />

      <OutlineAbsolute
        borderRadius={outlineAbsoluteBorderRadius}
        isOn={isOn}
        left={-4}
        top={-4}
        width='calc(100% + 8px)'
      />

      <CircleAbsolute
        borderRadius={circleAbsoluteBorderRadius}
        color='background.lightest'
        left={isOn ? leftToggleOnPosition : 2}
        top={2}
        width={circleAbsoluteWidth}
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
