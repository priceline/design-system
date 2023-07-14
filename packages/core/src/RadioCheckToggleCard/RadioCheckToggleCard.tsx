import { themeGet } from '@styled-system/theme-get'
import { BoxChecked, BoxEmpty, Check, RadioChecked, RadioEmpty } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text, Toggle } from '..'
import { getPaletteColor } from '../utils'

export const cardTypes = ['radio', 'checkbox', 'toggle'] as const
export const hPositions = ['left', 'right'] as const
export const vPositions = ['top', 'center'] as const

export type TCardTypes = (typeof cardTypes)[number]
export type THPositions = (typeof hPositions)[number]
export type TVPositions = (typeof vPositions)[number]

export interface IRadioCheckToggleCard {
  children?: React.ReactNode | string
  cardType?: TCardTypes
  hPosition?: THPositions
  vPosition?: TVPositions
  isHeightOccupied?: boolean
  title: string
  isTitleBold?: boolean
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSelected: boolean
}

const CombinedInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;

  &:hover + div {
    --border-color: ${getPaletteColor('primary.base')};
    --icon-color: ${getPaletteColor('primary.base')};
  }

  &:focus-visible + div {
    --icon-border-color: ${getPaletteColor('text.light')};
    --icon-border-shadow-color: ${getPaletteColor('background.light')};
  }

  &:active + div {
    --border-color: ${getPaletteColor('primary.dark')};
    --icon-color: ${getPaletteColor('primary.dark')};
  }

  &:checked + div {
    --background-color: ${getPaletteColor('primary.light')};
    --border-color: ${getPaletteColor('primary.base')};
    --icon-color: ${getPaletteColor('primary.base')};
  }

  &:checked:hover + div {
    --border-color: ${getPaletteColor('primary.dark')};
    --icon-color: ${getPaletteColor('primary.dark')};
  }

  &:checked:focus-visible + div {
    --icon-border-color: ${getPaletteColor('primary.dark')};
  }

  &:disabled + div {
    color: ${getPaletteColor('border.base')};
  }
`

const RCTCardContainer = styled(Flex)`
  --background-color: ${getPaletteColor('background.lightest')};
  --border-color: transparent;
  --default-card-margin: ${themeGet('space.3')};
  --icon-color: ${getPaletteColor('text.light')};
  --icon-border-color: transparent;
  --icon-border-shadow-color: transparent;

  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: ${themeGet('borderRadii.action-lg')};
  box-shadow: ${themeGet('shadows.sm')};
  cursor: pointer;
  padding: var(--default-card-margin);
`

const CardHeader = styled(Flex)`
  min-width: 0;
  width: 100%;

  & > svg {
    border: 1px solid var(--icon-border-color);
    border-radius: var(--icon-border-radius);
    color: var(--icon-color);
    padding: 2px;
    box-shadow: inset 0 0 0 5px var(--icon-border-shadow-color);
  }

  & + * {
    margin-top: ${themeGet('space.3')};
  }
`

const CardContent = styled(Box)`
  flex: 1;

  & > :first-child + * {
    margin-top: ${themeGet('space.3')};
  }
`

const RadioIcon = ({ checked, ...props }) => {
  return checked ? <RadioChecked {...props} /> : <RadioEmpty {...props} />
}

const CheckboxIcon = ({ checked, ...props }) => {
  return checked ? <BoxChecked {...props} /> : <BoxEmpty {...props} />
}

const ToggleIcon = ({ checked, onChange, ...props }) => {
  const checkIcon = <Check size='16' />
  return (
    <Box {...props}>
      <Toggle height={24} isOn={checked} icon={checkIcon} onToggle={onChange} />
    </Box>
  )
}

const buttonIcon = (cardType: TCardTypes) => {
  if (cardType === 'radio') {
    return RadioIcon
  } else if (cardType === 'checkbox') {
    return CheckboxIcon
  } else if (cardType === 'toggle') {
    return ToggleIcon
  }
}

const RadioCheckToggleCard = (props: IRadioCheckToggleCard) => {
  const {
    children,
    cardType,
    hPosition,
    vPosition,
    isHeightOccupied,
    title,
    isTitleBold,
    name,
    value,
    onChange,
    isSelected,
  } = props

  const id = `${name}_${value}`
  const DisplayButton = buttonIcon(cardType)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e)

  return (
    <label htmlFor={id} data-testId='rdt-card-label'>
      <CombinedInput
        id={id}
        name={name}
        value={value}
        type={cardType === 'radio' ? 'radio' : 'checkbox'}
        onChange={handleChange}
        checked={isSelected}
      />
      <RCTCardContainer flexDirection='column' data-testId='rdt-card-main'>
        <CardHeader
          alignItems={vPosition}
          flexDirection={hPosition === 'left' ? 'row-reverse' : 'row'}
          data-testId='rdt-card-header'
        >
          <CardContent>
            <Text
              bold={isTitleBold}
              fontSize={isTitleBold ? '16px' : '14px'}
              style={{ lineHeight: '24px' }}
              data-testId='rdt-card-title'
            >
              {title}
            </Text>
            {isHeightOccupied && children}
          </CardContent>
          <DisplayButton
            checked={isSelected}
            size='24'
            onChange={handleChange}
            style={{
              ['--icon-border-radius']: cardType === 'checkbox' ? '4px' : '9999px',
              borderWidth: '1px',
              margin:
                hPosition === 'left'
                  ? `0 var(--default-card-margin) 0 0`
                  : `0 0 0 var(--default-card-margin)`,
            }}
          />
        </CardHeader>
        {!isHeightOccupied && children}
      </RCTCardContainer>
    </label>
  )
}

RadioCheckToggleCard.displayName = 'RadioCheckToggleCard'

RadioCheckToggleCard.defaultProps = {
  cardType: 'radio',
  isTitleBold: false,
  hPosition: 'right',
  vPosition: 'top',
  isHeightOccupied: false,
} as IRadioCheckToggleCard

export default RadioCheckToggleCard
