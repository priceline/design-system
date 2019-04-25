import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')(
  {
    flex: 'none'
  },
  space,
  color
)

Svg.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

export default Svg
