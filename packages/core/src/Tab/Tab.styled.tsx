import * as Tab from '@radix-ui/react-tabs'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'
import themeGet from '@styled-system/theme-get'

export const TabContainer = styled(Tab.Root)``

export const TabTriggerChip = styled(Tab.Trigger)`
  cursor: pointer;
  ${(props) =>
    props?.hover &&
    `
    &:hover {
        color: ${getPaletteColor('primary.dark')(props)};
        border-color: ${getPaletteColor('primary.dark')(props)};
        background-color: ${getPaletteColor('background.lightest')(props)};
    }`}
  ${(props) => `
    border-style: solid;
    border-radius: ${themeGet('borderRadii.full')};
    background-color: ${getPaletteColor('background.lightest')(props)};
    border-color: ${getPaletteColor('border.base')(props)};
    color: ${getPaletteColor('primary.base')(props)};
    `}
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
      margin-top: -4px;
      margin-left: 25px;
      margin-right: 25px;
      content: '';
      display: block;
      height: 4px;
      background-color: #0068ef;
      border-radius: 12px 12px 0 0;
    }
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
