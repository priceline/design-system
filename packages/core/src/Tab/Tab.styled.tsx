import * as Tab from '@radix-ui/react-tabs'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'
import { themeGet } from '@styled-system/theme-get'
export const TabContainer = styled(Tab.Root)``

export const TabTriggerChip = styled(Tab.Trigger)`
  border-width: 1px;
  cursor: pointer;
  ${(props) => `
    border-style: solid;
    border-radius: ${themeGet('borderRadii.full')(props)};
    background-color: ${getPaletteColor('background.lightest')(props)};
    border-color: ${getPaletteColor('border.base')(props)};
    color: ${getPaletteColor('primary.base')(props)};
    `}
  ${(props) =>
    props?.hover &&
    `
    &:hover > div > svg {
      fill: ${getPaletteColor('primary.dark')(props)};
    }
    &:hover {
        color: ${getPaletteColor('primary.dark')(props)};
        border-color: ${getPaletteColor('primary.dark')(props)};
        background-color: ${getPaletteColor('background.lightest')(props)};
    }`}
  &[data-state='active'] {
    ${(props) =>
      props?.hover &&
      `
        &:hover {
          color: ${getPaletteColor('primary.dark')(props)};
          border-color: ${getPaletteColor('primary.dark')(props)};
          background-color: ${getPaletteColor('primary.light')(props)};
        }
      `}
    ${(props) => `
    border-color: ${getPaletteColor('primary.base')(props)};
    background-color: ${getPaletteColor('primary.light')(props)};
  `}
  }
`

export const TabTriggerButton = styled(Tab.Trigger)`
  cursor: pointer;
  border: 0;
  border-radius: 12px;
  ${(props) =>
    props?.hover &&
    `
    &:hover {
      color: ${getPaletteColor('primary.dark')(props)};
      background-color: ${getPaletteColor('background.base')(props)};
    }`}
  ${(props) =>
    `
    background-color: ${getPaletteColor('text.lightest')(props)};
    color: ${getPaletteColor('primary.base')(props)};
    `}
  &[data-state='active'] {
    ${(props) =>
      props?.hover &&
      `
        &:hover {
          background-color: ${getPaletteColor('primary.light')(props)};
          color: ${getPaletteColor('primary.dark')(props)};
        }
      `}
    &::after {
      ${(props) => `
      margin-top: -4px;
      margin-left: 16px;
      margin-right: 16px;
      content: '';
      display: block;
      height: 4px;
      background-color: ${getPaletteColor(props?.isHover && props?.hover ? 'primary.dark' : 'primary.base')(
        props
      )};
      border-radius: 12px 12px 0 0;
      `}
  }
`

export const TabTriggerRadio = styled(Tab.Trigger)`
  cursor: pointer;
 }
`
export const TabList = styled(Tab.List)`
  display: flex;
  flex-direction: ${(props) => (props?.orientation === 'horizontal' ? 'row' : 'column')};
`
