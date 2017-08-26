import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const Heading = styled.h3`
  ${fontSize}
`

Heading.displayName = 'Heading'

Heading.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

export default Heading
