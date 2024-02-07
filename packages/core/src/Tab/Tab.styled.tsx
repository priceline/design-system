import * as Tab from '@radix-ui/react-tabs'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'
import { themeGet } from '@styled-system/theme-get'

export const TabTriggerButton = styled(Tab.Trigger)`
  cursor: pointer;
  ${(props) =>
    props?.buttonBorder ? `border: 1px solid ${getPaletteColor('border.light')(props)};` : 'border: none;'}
  border-radius: 12px 12px 0 0;
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
      margin-left: 12px;
      margin-right: 12px;
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
  flex-direction: ${(props) =>
    props?.orientation === 'horizontal' ? 'row' : props?.orientation === 'vertical' && 'column'};
`
