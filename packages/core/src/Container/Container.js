import styled from 'styled-components'
import PropTypes from 'prop-types'

const maxWidth = (props) =>
  props.maxWidth ? { maxWidth: `${props.maxWidth}px` } : { maxWidth: props.theme.maxContainerWidth }

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${maxWidth};
`

Container.propTypes = {
  maxWidth: PropTypes.number,
}

Container.displayName = 'Container'

export default Container
