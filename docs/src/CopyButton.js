import React from 'react'
// import select from 'select'

class CopyButton extends React.Component {
  constructor() {
    super()

    this.handleClick = e => {
      select(this.ghost)
      document.execCommand('copy')
    }
  }

  render() {
    const child = React.Children.only(this.props.children)
    const clone = React.cloneElement(child, {
      onClick: this.handleClick
    })

    return [
      clone,
      <div
        ref={ref => (this.ghost = ref)}
        children={this.props.text}
        style={{
          position: 'absolute',
          zIndex: -1,
          opacity: 0
        }}
      />
    ]
  }
}

export default CopyButton
