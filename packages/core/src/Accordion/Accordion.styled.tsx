import * as Accordion from '@radix-ui/react-accordion'
import { themeGet } from '@styled-system/theme-get'
import styled, { keyframes } from 'styled-components'
import { ChevronDown } from 'pcln-icons'
import { Box } from '../Box'
import { getPaletteColor, borderRadiusAttrs } from '../utils'

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  padding: 12px;
  background-color: ${(props) =>
    props.variation === 'default' ? getPaletteColor('background.light')(props) : '#fff'};
  &[data-state='open'] {
    animation: ${slideDown} ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
  }
  &[data-state='closed'] {
    animation: ${slideUp} ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
  }
`

export const StyledTrigger = styled(Accordion.Trigger).attrs(borderRadiusAttrs)`
  all: unset;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => (props.variation === 'hug' ? getPaletteColor('text.lightest')(props) : '')};
  &[data-state='open'] .chevron {
    transform: rotate(180deg);
  }
  &[data-state='closed'] {
    ${(props) =>
      props.variation === 'flatCard' ? `background-color: ${getPaletteColor('background.light')(props)}` : ''}
  }
  border-top-left-radius: ${themeGet('borderRadii.lg')};
  border-top-right-radius: ${themeGet('borderRadii.lg')};
  padding: 12px;
  ${(props) =>
    `border-bottom: 1px solid ${
      props.variation === 'underline' ? getPaletteColor('border.base')(props) : 'transparent'
    };`}
  &:hover {
    cursor: pointer;
    ${(props) =>
      `background-color: ${
        props.variation === 'hug'
          ? getPaletteColor('primary.dark')(props)
          : getPaletteColor('background.base')(props)
      };`}
  }
  &:focus-visible {
    outline: 2px solid ${getPaletteColor('primary.dark')};
    outline-offset: -2px;
  }
`
export const StyledChevron = styled(ChevronDown)`
  margin: auto 8px;
  transition: transform ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
  border-radius: ${themeGet('borderRadii.full')};
  color: ${(props) =>
    props.variation === 'hug'
      ? getPaletteColor('text.lightest')(props)
      : getPaletteColor('primary.base')(props)};
`
export const IconContainer = styled(Box)`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    transition: transform ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
    transform: scale(0);
    width: 25px;
    height: 25px;
    left: 8px;
    top: 0;
    border-radius: ${themeGet('borderRadii.full')};
  }
  &:hover {
    &:after {
      background-color: rgba(0, 0, 0, 0.12);
      transform: scale(1.2);
    }
  }
`

export const StyledItem = styled(Box)`
  box-shadow: ${(props) => (props.variation === 'card' ? themeGet('shadows.sm') : '')};
  ${(props) =>
    props.variation === 'default' ? `background-color: ${getPaletteColor('background.light')(props)};` : ''}
  ${(props) =>
    props.variation === 'hug'
      ? `background-color: ${getPaletteColor('primary.base')(props)};
      border: 1px solid ${getPaletteColor('primary.base')(props)};`
      : ''}
  &[data-state='open'],
  &:hover {
    box-shadow: ${(props) =>
      props.variation === 'card' || props.variation === 'flatCard' ? themeGet('shadows.xl') : ''};
  }
  &[data-state='closed'] {
    ${(props) =>
      props.variation === 'underline'
        ? `border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;`
        : ''}
  }
`
