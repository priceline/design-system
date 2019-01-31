import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal, SmallModalHeader, ModalHeader } from '../src/index'
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
          <div style={{ height: '1000px' }}>Content with 1000px height</div>
        </StyledModal>
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('Raw', () => (
    <ModalStory width={['100px', '200px', '500px']} disableCloseButton />
  ))
  .add('With SmallModalHeader', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['80vw', '400px', '500px']}
    />
  ))
  .add('With ModalHeader', () => (
    <ModalStory
      header={<ModalHeader title="Modal title" />}
      height={['90vh', '460px', '560px']}
      width={['80vw', '400px', '500px']}
    />
  ))
  .add('With Overflow', () => (
    <ModalStory width={['80vw', '400px', '500px']} enableOverflow />
  ))
  .add('With imagemode and colorful', () => (
    <ModalStory
      bg="orange"
      header={<SmallModalHeader />}
      width={['100px', '200px', '500px']}
      imgMode
      disableCloseButton
    />
  ))
