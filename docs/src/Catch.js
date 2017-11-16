import React from 'react'

class Catch extends React.Component {
  constructor() {
    super()
    this.state = {
      err: null
    }
  }
  componentDidCatch(err, info) {
    this.setState({ err })
  }
  render() {
    const { err } = this.state
    if (err) return <pre>{err}</pre>
    return this.props.children
  }
}

export default Catch
