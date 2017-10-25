import React from 'react'
import Box from './Box'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import BannerRow from './BannerRow'
import PropTypes from 'prop-types'

const bannerColors = {
  green: {
    backgroundColor: 'green',
    color: 'white',
    icon: 'success'
  },
  lightGreen: {
    backgroundColor: 'lightGreen',
    color: 'text',
    icon: 'success'
  },
  red: {
    backgroundColor: 'red',
    color: 'white',
    icon: 'warning'
  },
  lightRed: {
    backgroundColor: 'lightRed',
    color: 'text',
    icon: 'warning'
  },
  orange: {
    backgroundColor: 'orange',
    color: 'white',
    icon: 'attention'
  },
  lightOrange: {
    backgroundColor: 'lightOrange',
    color: 'text',
    icon: 'attention'
  },
  blue: {
    backgroundColor: 'blue',
    color: 'white',
    icon: 'information'
  },
  lightBlue: {
    backgroundColor: 'lightBlue',
    color: 'text',
    icon: 'information'
  }
}

const Banner = props => {
  const bannerColor = bannerColors[props.bg] || {}
  const icon = props.iconName || bannerColor.icon
  const showIcon = !!icon && !!props.showIcon
  const text = <Text.span fontSize={1}>{props.text}</Text.span>
  const firstText = props.header ? (
    <Heading.h5>{props.header}</Heading.h5>
  ) : (
    text
  )

  return (
    <Box {...props} bg={bannerColor.backgroundColor} color={bannerColor.color}>
      <BannerRow
        showIcon={showIcon}
        showCloseButton={!!props.onClose}
        icon={<Icon name={icon} mr={3} size={28} />}
        text={firstText}
        closeButton={<CloseButton onClick={props.onClose} ml={3} size={14} />}
        textAlign={props.textAlign}
      />
      {!!props.header &&
        !!props.text && (
          <BannerRow
            showIcon={showIcon}
            showCloseButton={!!props.onClose}
            icon={<Box w={28} mr={3} />}
            text={text}
            closeButton={<Box w={14} ml={3} />}
            textAlign={props.textAlign}
          />
        )}
    </Box>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  header: PropTypes.string,
  iconName: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  bg: 'green',
  textAlign: 'left',
  showIcon: true
}

export default Banner
