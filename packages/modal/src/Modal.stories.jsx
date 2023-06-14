import { action } from '@priceline/storybook-preset'
import { Box, Button, Text } from 'pcln-design-system'
import { Menu, MenuItem } from 'pcln-menu'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Modal, ModalHeader, ScrollLock, SmallModalHeader } from '../src'
import { currencies } from './mockData'

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

  static propTypes = {
    isOpen: PropTypes.bool,
    lock: PropTypes.bool,
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
          ariaLabel='Storybook modal.'
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

export default {
  title: 'pcln-modal/Modal',
  component: Modal,
}

export const Raw = () => <ModalStory width={['100px', '200px', '500px']} disableCloseButton />

export const WithSmallModalHeader = () => (
  <ModalStory header={<SmallModalHeader />} width={['80vw', '400px', '500px']} />
)

WithSmallModalHeader.story = {
  name: 'With SmallModalHeader',
}

export const WithModalHeader = () => {
  // Generate content to demonstrate a scrollable <body>
  const contentLines = [...Array(100).keys()]

  return (
    <div>
      <h1>Scroll down to open modal</h1>
      {contentLines.map((i, idx) => (
        <div key={idx}>Line {idx}</div>
      ))}
      <ModalStory
        header={<ModalHeader title='Modal title' onClose={action('Modal closed!')} />}
        height={['90vh', '460px', '560px']}
        width={['80vw', '400px', '500px']}
      />
    </div>
  )
}

export const WithSmallModalHeaderAndWhiteBackgroundModalHeaderWithSetTextStyle = () => {
  return (
    <ModalStory
      header={
        <>
          <SmallModalHeader bg={null} color='primary.base' />
          <ModalHeader
            bg={null}
            color='background.lightest'
            onClose={action('Modal closed!')}
            pt={2}
            textStyle='heading4'
            title='Modal title'
          />
        </>
      }
      height={['90vh', '460px', '560px']}
      width={['80vw', '400px', '500px']}
    />
  )
}

export const WithOverflow = () => (
  <ModalStory header={<SmallModalHeader />} width={['80vw', '400px', '500px']} enableOverflow />
)

export const WithOverflowAndDropdown = () => (
  <StyledModal ariaLabel='Storybook modal.' isOpen={true} header={<SmallModalHeader />} height='100px'>
    <Menu idx='currency-selector' buttonNode={<div>open</div>} size='twoColumns'>
      {currencies.map((currency, index) => {
        const selected = 'USD' === currency.code
        return (
          <MenuItem key={index} selected={selected}>
            <Text regular width={32} textAlign='center' mr={3}>
              {currency.symbol}
            </Text>
            <Text regular>{currency.label}</Text>
          </MenuItem>
        )
      })}
    </Menu>
  </StyledModal>
)

export const WithOverflowAndTallContent = () => (
  <StyledModal
    ariaLabel='Storybook modal.'
    isOpen={true}
    header={<ModalHeader onClose={action('Modal closed!')} />}
    height='100px'
    enableOverflow
    disableCloseButton
  >
    <Box color='primary' height='500px'>
      Priceline
    </Box>
  </StyledModal>
)

export const WithImagemodeAndColorful = () => (
  <ModalStory
    bg='orange'
    header={<SmallModalHeader />}
    width={['100px', '200px', '500px']}
    imgMode
    disableCloseButton
  />
)

export const RoundedModalWithHeader = () => (
  <ModalStory
    bg='orange'
    header={<ModalHeader title='Priceline' />}
    width={['100px', '200px', '500px']}
    imgMode
    disableCloseButton
  />
)

WithImagemodeAndColorful.story = {
  name: 'With imagemode and colorful',
}

export const WithCustomAnimation = () => (
  <ModalStory
    header={<SmallModalHeader />}
    width={['100px', '200px', '500px']}
    dialogAnimation={CUSTOM_ANIMATION}
    verticalAlignment='top'
  />
)

WithCustomAnimation.story = {
  name: 'With custom animation',
}

export const ZeroTimeout = () => (
  <ModalStory disableCloseButton width={['100px', '200px', '500px']} timeout={0} />
)
