import React from 'react'
import PropTypes from 'prop-types'
import Success from 'pcln-icons/lib/Success'
import Warning from 'pcln-icons/lib/Warning'
import Attention from 'pcln-icons/lib/Attention'
import Information from 'pcln-icons/lib/Information'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import CloseButton from './CloseButton'
import Heading from './Heading'

const rootColors = {
  green: {
    bg: 'green',
    color: 'white'
  },
  lightGreen: {
    bg: 'lightGreen',
    color: 'darkGreen'
  },
  red: {
    bg: 'red',
    color: 'white'
  },
  lightRed: {
    bg: 'lightRed',
    color: 'darkRed'
  },
  orange: {
    bg: 'orange',
    color: 'white'
  },
  blue: {
    bg: 'blue',
    color: 'white'
  },
  lightBlue: {
    bg: 'lightBlue',
    color: 'darkBlue'
  }
}

const icons = {
  green: <Success />,
  lightGreen: <Success />,
  red: <Warning />,
  lightRed: <Warning />,
  orange: <Attention />,
  blue: <Information />,
  lightBlue: <Information />
}

const Banner = ({ icon, onClose, textAlign, header, text, ...props }) => {
  const rootProps = rootColors[props.bg] || {}
  icon = icon || icons[props.bg]

  return (
    <Box {...props} {...rootProps}>
      <Flex justifyContent="space-between" alignItems="flex-start">
        {!!icon &&
          React.cloneElement(icon, {
            mr: 2,
            mt: '-2px'
          })}
        <Box width={1}>
          <Text textAlign={textAlign}>
            {header && <Heading.h5 fontSize={2}>{header}</Heading.h5>}
            {text && <Text.span fontSize={1}>{text}</Text.span>}
            {props.children}
          </Text>
        </Box>
        {!!onClose && (
          <CloseButton
            onClick={onClose}
            ml={2}
            size={24}
            title="close"
            mt="-2px"
          />
        )}
      </Flex>
    </Box>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  icon: PropTypes.node,
  onClose: PropTypes.func,
  header: PropTypes.string,
  text: PropTypes.string,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  bg: 'green'
}

export default Banner
