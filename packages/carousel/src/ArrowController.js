import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from 'pcln-design-system'

// const propTypes = {
//   className: PropTypes.string,
//   handleClick: PropTypes.func,
//   iconDirection: PropTypes.string
// }

const InvisibleWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: ${props =>
    props.iconDirection === 'chevronLeft' ? 'flex-start' : 'flex-end'};
  align-items: center;
  cursor: pointer;
`
const StyledController = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  color: ${props => props.theme.colors.white};
  padding: ${props =>
    props.iconDirection === 'chevronLeft'
      ? '8px 10px 2px 6px'
      : '8px 6px 2px 10px'};
  height: 40px;
  width: 40px;
`

const ArrowIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`

const ArrowController = ({ className, handleClick, iconDirection }) => {
  if (!iconDirection) return null
  const dataUnitId = `ARROW_CONTROLLER_${iconDirection}`
  return (
    <InvisibleWrapper
      className={className}
      onClick={handleClick}
      iconDirection={iconDirection}
    >
      <StyledController iconDirection={iconDirection}>
        <ArrowIcon data-unit-id={dataUnitId} name={iconDirection} />
      </StyledController>
    </InvisibleWrapper>
  )
}

// ArrowController.propTypes = propTypes

export default ArrowController
