import React from 'react'
import PropTypes from 'prop-types'
import select from 'select'

export default class CopyButton extends React.Component {
  constructor() {
    super()

    this.handleClick = () => {
      select(this.ghost)
      document.execCommand('copy')
    }
  }

  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
  }

  render() {
    const { children, text } = this.props

    const child = React.Children.only(children)
    const clone = React.cloneElement(child, {
      onClick: this.handleClick,
    })

    return (
      <>
        {clone}
        <div
          ref={(ref) => (this.ghost = ref)}
          style={{
            position: 'absolute',
            zIndex: -1,
            opacity: 0,
          }}
        >
          {text}
        </div>
      </>
    )
  }
}
