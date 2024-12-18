import * as Accordion from '@radix-ui/react-accordion'
import { themeGet } from '@styled-system/theme-get'
import { ChevronDown } from 'pcln-icons'
import styled, { keyframes } from 'styled-components'
import { space } from 'styled-system'
import { Box } from '../Box/Box'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
import { getPaletteColor } from '../utils/utils'
import { AccordionProps } from './Accordion'

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

export const StyledAccordionRoot = styled(Accordion.Root)<AccordionProps>`
  ${(props) =>
    props.variation === 'ladder'
      ? `
      overflow: hidden;
      box-shadow: ${themeGet('shadows.sm')(props)};
      border-radius: ${themeGet('borderRadii.lg')(props)};
    `
      : ''}
`

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  ${space}
  background-color: ${(props) =>
    props.variation === 'default'
      ? getPaletteColor(props.contentBg || 'background.light')(props)
      : getPaletteColor(props.contentBg || 'background.lightest')(props)};
  &[data-state='open'] {
    animation: ${slideDown} ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
  }
  &[data-state='closed'] {
    animation: ${slideUp} ${themeGet('duration.normal')} ${themeGet('timingFunctions.easeInOut')};
  }
`

export const StyledTrigger = styled(Accordion.Trigger).attrs(borderRadiusAttrs)`
  .moreText,
  .lessText {
    padding-left: 8px;
  }
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => (props.variation === 'hug' ? getPaletteColor('text.lightest')(props) : '')};
  &[data-state='open'] .chevron {
    transform: rotate(180deg);
  }
  &[data-state='closed'] {
    .lessText {
      display: none;
    }

    .moreText {
      display: inline;
    }
    ${(props) =>
      props.variation === 'flatCard' ? `background-color: ${getPaletteColor('background.light')(props)}` : ''}
  }
  &[data-state='open'] {
    .lessText {
      display: inline;
    }

    .moreText {
      display: none;
    }
  }
  ${(props) =>
    props.variation === 'ladder'
      ? ''
      : `
    border-top-left-radius: ${themeGet('borderRadii.lg')};
    border-top-right-radius: ${themeGet('borderRadii.lg')};
  `}
  ${space}
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
          : getPaletteColor(props.hoverBg || 'background.base')(props)
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

export interface IStyledItem {
  variation: string
  headerBg?: string
  headerDividerColor?: string
}

export const StyledItem = styled(Box)<IStyledItem>`
  ${(props) => (['card', 'flatCard'].includes(props.variation) ? 'border: solid 1px transparent;' : '')}
  ${(props) =>
    props.variation === 'default'
      ? `background-color: ${getPaletteColor(props.headerBg || 'background.light')(props)};`
      : ''}
  ${(props) =>
    props.variation === 'hug'
      ? `background-color: ${getPaletteColor('primary.base')(props)};
      border: 1px solid ${getPaletteColor('primary.base')(props)};`
      : ''}
  ${(props) =>
    props.variation === 'ladder'
      ? `background-color: ${getPaletteColor(props.headerBg || 'background.light')(props)};
        ${
          props.headerDividerColor
            ? `border-top: solid ${getPaletteColor(props.headerDividerColor)(props)} 1px;`
            : ''
        }
        border-radius: 0px; margin-bottom: 0px;
        `
      : ''}

  &[data-state='open'],
  &:hover {
    ${(props) =>
      ['card', 'flatCard'].includes(props.variation)
        ? `
        border-color: ${getPaletteColor('border.base')(props)};
        box-shadow: none;
        `
        : ''}
  }

  &[data-state='closed'] {
    ${(props) =>
      props.variation === 'underline'
        ? `
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;`
        : ''}
    ${(props) =>
      ['card'].includes(props.variation)
        ? `
          box-shadow: ${themeGet('shadows.sm')(props)}; 
          border-color: transparent;
        `
        : ''}
    
    &:hover {
      ${(props) =>
        ['card', 'flatCard'].includes(props.variation)
          ? `
            box-shadow: ${themeGet('shadows.xl')(props)};
            border-color: transparent;
          `
          : ''}
    }
  }
`
