import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from '../src'
import Button from '../../core/src/Button'
import styled from 'styled-components'

const StyledModal = styled(Modal)`
  height: ${props => props.height};
`

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
        <StyledModal
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
          }}
          {...this.props}
        >
          <div style={{ height: '1000px' }}>lalala</div>
        </StyledModal>
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('Raw', () => (
    <ModalStory
      title="Modal title"
      headerBg="green"
      width={['100px', '200px', '500px']}
      disableCloseButton
    />
  ))
  .add('With header1', () => (
    <ModalStory
      title="Modal title"
      header={1}
      headerBg="green"
      width={['100px', '200px', '500px']}
    />
  ))
  .add('With header2 and custom height', () => (
    <ModalStory
      title="Modal title"
      header={2}
      height="80vh"
      headerBg="green"
      width={['100px', '200px', '500px']}
    />
  ))
  .add('With Overflow', () => (
    <ModalStory
      title="Modal title"
      header={1}
      headerBg="green"
      width={['100px', '200px', '500px']}
      enableOverflow
    />
  ))
  .add('With imagemode and colorful', () => (
    <ModalStory
      title="Modal title"
      bg="orange"
      headerBg="blue"
      header={1}
      width={['100px', '200px', '500px']}
      imgMode
      disableCloseButton
    />
  ))
