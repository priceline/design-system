import styled from 'styled-components'
import { Slider } from 'pure-react-carousel'

const StyledSlider = styled(Slider)`
  overflow: scroll !important;
  ${(props) => props.theme.mediaQueries.md} {
    overflow: hidden !important;
  }
`

export { StyledSlider as Slider }
