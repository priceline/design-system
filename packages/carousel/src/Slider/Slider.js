import styled from 'styled-components'
import { Slider } from 'pure-react-carousel'
import { themeGet } from '@styled-system/theme-get'

const StyledSlider = styled(Slider)`
  overflow: scroll !important;
  ${themeGet('mediaQueries.md')} {
    overflow: hidden !important;
  }
`

export { StyledSlider as Slider }
