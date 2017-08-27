import Text from './Text'
import { fontSizes } from './theme'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = {
  fontSize: fontSizes[4]
}

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = {
  fontSize: fontSizes[6]
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  fontSize: fontSizes[5]
}

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  fontSize: fontSizes[4]
}

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  fontSize: fontSizes[3]
}

Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = {
  fontSize: fontSizes[2]
}

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  fontSize: fontSizes[1]
}

export default Heading
