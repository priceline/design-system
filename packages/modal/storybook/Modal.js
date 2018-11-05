import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from '../src'
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
        <Modal
          isOpen={this.state.isOpen}
          bg="white"
          {...this.props}
          onClose={() => {
            this.setState({ isOpen: false })
          }}
          title="Modal title"
        >
          <div style={{ height: '100px' }}>lalala</div>
        </Modal>
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('Basic', () => <ModalStory size="sm" />)
  .add('Large', () => <ModalStory size="lg" />)
  .add('Medium', () => <ModalStory size="md" />)
