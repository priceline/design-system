import Text from './Text'
import theme from './theme'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 'bold',
  lineHeight: 'display',
  m: 0,
  theme
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

export default Heading
