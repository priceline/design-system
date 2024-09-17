import { Card, getPaletteColor } from '../..'
import styled from 'styled-components'

const BannerWrapper = styled(Card)`
  position: relative;

  ${(props) => `
    background-color: ${getPaletteColor(props.bgColor)(props)};
    ${props.outline ? `border-color: ${getPaletteColor(props.outline)(props)}` : 'border-width: 0px'};
    ${
      props.borderHugLeft &&
      `border-left-width: 4px; border-left-color: ${getPaletteColor(props.borderHugLeft)(props)};`
    }
    ${
      props.borderHugTop &&
      `border-top-width: 4px; border-top-color: ${getPaletteColor(props.borderHugTop)(props)};`
    };

    ${
      props.hoverBoxShadowSize &&
      `transition: box-shadow ${props.theme.timingFunctions.easeInOut} ${props.theme.duration.normal};
      &:hover { box-shadow: ${props.theme.shadows.xl}; }`
    }
  `};
`

BannerWrapper.defaultProps = {
  bgColor: 'background.lightest',
  outline: '',
  borderHugTop: '',
  borderHugLeft: '',
}

export default BannerWrapper
