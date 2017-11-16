import styled from 'styled-components'
import { theme } from 'styled-system'
import { Box } from 'pcln-design-system'

const StickyBar = styled(Box)`
  height: 100vh;
  max-height: ${props => (props.open ? '100vh' : '64px')};
  overflow-y: ${props => (props.open ? 'auto' : 'hidden')};
  -webkit-overflow-scrolling: touch;
  transition-property: max-height;
  transition-timing-function: ease-out;
  transition-duration: 0.0625s;

  ${theme('mediaQueries.sm')} {
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow-y: auto;
    flex: none;
    border-left-width: 8px;
    border-left-style: solid;
    border-left-color: ${theme('colors.blue')};
  }
`

export default StickyBar
