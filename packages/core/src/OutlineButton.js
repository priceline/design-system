import styled from 'styled-components'
import Button from './Button'

const OutlineButton = styled(Button).attrs({
  color: 'primary',
  variation: 'outline'
})``

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
