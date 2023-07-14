import * as Tab from '@radix-ui/react-tabs'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'

export const TabContainer = styled(Tab.Root)``

export const TabTriggerChip = styled(Tab.Trigger)`
  cursor: pointer;
  ${(props) =>
    props?.hover &&
    `
    &:hover {
      background-color: ${getPaletteColor('border.tint')(props)};
      border-radius: 9999px;
    }`}
  ${(props) => `
    border-style: solid;
    border-radius: 9999px;
    background-color: ${getPaletteColor('text.lightest')(props)};
    border-color: ${getPaletteColor('primary.base')(props)};
    color: ${getPaletteColor('primary.base')(props)};
    `}
  &[data-state='active'] {
    ${(props) =>
      props?.hover &&
      `
        &:hover {
          background-color: ${getPaletteColor('primary.tint')(props)};
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
      background-color: ${getPaletteColor('border.tint')(props)};
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
          background-color: ${getPaletteColor('primary.tint')(props)};
        }
      `}
    &::after {
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
  ${(props) => (props?.orientation === 'horizontal' ? ` flex-direction: row;` : 'flex-direction: column;')}
`
