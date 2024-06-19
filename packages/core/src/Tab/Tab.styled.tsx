import * as Tab from '@radix-ui/react-tabs'
import styled, { css } from 'styled-components'
import { getPaletteColor } from '../utils'
import { Text } from '../Text/Text'

const getSizeStyles = (size, icon) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 12px;
        padding: 12px;
      `
    case 'md':
      return css`
        font-size: 14px;
        padding: 16px;
        ${icon && `padding-left: 8px;`}
      `
  }
}
export const StyledText = styled(Text)`
  ${(props) => getSizeStyles(props.size, props.icon)}
  font-family: Montserrat;
`

export type TabTriggerButtonProps = {
  buttonBorder: string
  isTransparent?: boolean
  dynamicTabWidth?: boolean
}

export const TabTriggerButton = styled(Tab.Trigger)<TabTriggerButtonProps>`
  cursor: pointer;
  border: ${(props) => (props.buttonBorder ? `1px solid ${getPaletteColor('border.light')(props)}` : 'none')};
  width: ${(props) => (props.dynamicTabWidth ? '100%' : 'auto')};
  border-radius: 12px 12px 0 0;
  color: ${getPaletteColor('primary.base')};
  background-color: ${(props) =>
    !props.isTransparent ? getPaletteColor('text.lightest')(props) : 'transparent'};

  &:hover {
    color: ${getPaletteColor('primary.dark')};
    background-color: ${(props) =>
      !props.isTransparent ? getPaletteColor('background.base')(props) : 'transparent'};
  }

  &[data-state='active'] {
    &:hover {
      background-color: ${(props) =>
        !props.isTransparent ? getPaletteColor('primary.light')(props) : 'transparent'};
    }
    &::after {
      margin: -4px 12px 0;
      content: '';
      display: block;
      height: 4px;
      background-color: ${getPaletteColor('primary.base')};
      border-radius: 12px 12px 0 0;
    }
    &:hover {
      &::after {
        background-color: ${(props) => getPaletteColor('primary.dark')(props)};
      }
    }
  }
`

export const TabTriggerRadio = styled(Tab.Trigger)`
  cursor: pointer;
 }
`

export type TabListProps = {
  orientation?: 'horizontal' | 'vertical'
}
export const TabList = styled(Tab.List)<TabListProps>`
  flex-direction: ${(props) => (props?.orientation === 'horizontal' ? 'row' : 'column')};
`
