import React from 'react'
import Card from './Card'
import HugBanner from './HugBanner'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled(Card)`
  border-radius: ${props => props.theme.radius}
`

const Hug = (props) => (
  <StyledCard {...props} borderColor={props.bg}>
    <HugBanner iconName={props.iconName} text={props.text} />
    {props.children}
  </StyledCard>
)

Hug.defaultProps = {
  bg: 'green',
  borderWidth: 1,
  color: 'white'
}

Hug.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default Hug
