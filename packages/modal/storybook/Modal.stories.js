import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import { Modal, SmallModalHeader, ModalHeader, ScrollLock } from '../src'
import { Button } from 'pcln-design-system'

const StyledModal = styled(Modal)`
  height: ${(props) => props.height};
`
const CUSTOM_ANIMATION = (transitionState) => `
  transform: translateY(-122%);
  transition: transform 0.3s linear;
  ${transitionState === 'entered' ? `transform: translateY(0%);` : ''}
`

class ModalStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
    }
    this.scrollLock = new ScrollLock()
  }

  render() {
    return (
      <div style={{ height: '1500px' }}>
        <Button
          onClick={() => {
            if (this.props.lock) {
              this.scrollLock.on()
            }
            this.setState({ isOpen: true })
          }}
        >
          Open
        </Button>
        <StyledModal
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
            if (this.props.lock) {
              this.scrollLock.off()
            }
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
  .addDecorator(withKnobs)
  .add('Raw', () => (
    <ModalStory width={['100px', '200px', '500px']} disableCloseButton />
  ))
  .add('With SmallModalHeader', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['80vw', '400px', '500px']}
    />
  ))
  .add('With ModalHeader (and ScrollLock!)', () => {
    // Generate content to demonstrate a scrollable <body>
    const contentLines = [...Array(100).keys()]

    return (
      <div>
        <h1>Scroll down to open modal</h1>
        {contentLines.map((i, idx) => (
          <div key={idx}>Line {idx}</div>
        ))}
        <ModalStory
          header={
            <ModalHeader
              title='Modal title'
              onClose={action('Modal closed!')}
            />
          }
          height={['90vh', '460px', '560px']}
          width={['80vw', '400px', '500px']}
          lock={true}
          fullScreen={boolean('fullScreen', false)}
        />
      </div>
    )
  })
  .add('With Overflow', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['80vw', '400px', '500px']}
      enableOverflow
    />
  ))
  .add('With imagemode and colorful', () => (
    <ModalStory
      bg='orange'
      header={<SmallModalHeader />}
      width={['100px', '200px', '500px']}
      imgMode
      disableCloseButton
    />
  ))
  .add('With custom animation', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['100px', '200px', '500px']}
      dialogAnimation={CUSTOM_ANIMATION}
      verticalAlignment='top'
    />
  ))
  .add('Zero Timeout', () => (
    <ModalStory
      disableCloseButton
      width={['100px', '200px', '500px']}
      timeout={0}
    />
  ))
