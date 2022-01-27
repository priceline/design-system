import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

const maxWidth = (props) =>
  props.maxWidth ? { maxWidth: `${props.maxWidth}px` } : { maxWidth: props.theme.maxContainerWidth }

const propTypes = {
  maxWidth: PropTypes.number,
}

const Container: React.FC<InferProps<typeof propTypes>> = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${maxWidth};
`

Container.propTypes = propTypes

Container.displayName = 'Container'

export default Container
