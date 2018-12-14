import React from 'react'
import { storiesOf } from '@storybook/react'
import LargeModal from '../src/LargeModal'
import Button from '../../core/src/Button'

class ModalStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ isOpen: true })
          }}
        >
          Open
        </Button>
        <LargeModal
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
          }}
          {...this.props}
        >
          <div style={{ height: '1000px' }}>lalala</div>
        </LargeModal>
      </div>
    )
  }
}

storiesOf('LargeModal', module).add('Raw', () => (
  <ModalStory
    title="Modal title"
    headerBg="green"
    width={['100px', '200px', '500px']}
    disableCloseButton
  />
))
