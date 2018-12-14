import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Modal from './Modal'

const pickProps = props => {
  const {
    isOpen,
    onClose,
    bg,
    zIndex,
    children,
    title,
    headerBg,
    imgMode
  } = props
  return {
    isOpen,
    onClose,
    bg,
    zIndex,
    children,
    title,
    headerBg,
    imgMode
  }
}

const StyledModal = styled(Modal)`
  max-width: 100vw;
  height: 100vh;
  ${props => `
    ${props.theme.mediaQueries['lg']}{
      height: calc(100vh - 48px);
      max-width: calc(100vw - 32px);
    }
  `}
`

const LargeModal = props => {
  const finalProps = pickProps(props)
  return (
    <StyledModal
      header={2}
      width={['100vw', '100vw', '100vw', '960px']}
      {...finalProps}
    />
  )
}

export default LargeModal
