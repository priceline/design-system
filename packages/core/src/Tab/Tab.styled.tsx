import * as Tab from '@radix-ui/react-tabs'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'
import Chip from '../Chip'

export const TabContainer = styled(Tab.Root)``

export const TabTrigger = styled(Tab.Trigger as typeof Chip)`
  cursor: pointer;
  ${(props) =>
    props?.hover &&
    `
    &:hover {
      border-radius: 12px;
      background-color: ${getPaletteColor('border.tint')(props)};
      ${
        props?.type === 'button'
          ? `
        border-radius: 12px;
        `
          : props?.type === 'chip'
          ? `
        border-radius: 9999px;
        `
          : ''
      }
    }
  `}
  ${(props) =>
    props?.type === 'button'
      ? `
    background-color: ${getPaletteColor('primary.lightest')(props)};
    color: ${getPaletteColor('primary.base')(props)};
    `
      : props?.type === 'chip'
      ? `
    border-style: solid;
    border-radius: 9999px;
    border-color: ${getPaletteColor('primary.base')(props)};
    color: ${getPaletteColor('primary.base')(props)};
 `
      : ''}
  
  &[data-state='active'] {
    ${(props) =>
      props?.hover &&
      `
        &:hover {
          background-color: ${getPaletteColor('primary.tint')(props)};
        }
      `}
    ${(props) =>
      props?.type === 'button'
        ? `
    brder-radius: 12px;
    border-bottom: 4px solid;
    border-width: thick;
  `
        : props?.type === 'chip'
        ? `
  background-color: ${getPaletteColor('primary.light')(props)};
  `
        : ''}
  }
`
export const TabList = styled(Tab.List)`
  display: flex;
  ${(props) => (props?.orientation === 'horizontal' ? ` flex-direction: row;` : 'flex-direction: column;')}
`
export const SIZES = {
  sm: {
    textStyle: 'heading5',
  },
  md: {
    textStyle: 'heading5',
  },
  lg: {
    textStyle: 'heading3',
  },
  xl: {
    textStyle: 'heading3',
  },
  xxl: {
    textStyle: 'heading3',
  },
}
