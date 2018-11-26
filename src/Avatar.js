import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BackgroundImage from './BackgroundImage'

const AvatarImage = styled(BackgroundImage)`
  border-radius: 50%;
  cursor: pointer;
`

export default class Avatar extends React.Component {
  render() {
    return (
      <AvatarImage
        image={this.props.imageUrl}
        height={`${this.props.size}px`}
        width={`${this.props.size}px`}
      />
    )
  }
}

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  imageUrl: `https://images.globest.com/contrib/content/uploads/sites/409/2018/10/Amol-Sarva.jpg`,
  size: 48
}

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.number
}
