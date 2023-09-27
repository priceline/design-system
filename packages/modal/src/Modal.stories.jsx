import { action } from '@storybook/addon-actions'
import { Box, Button, Accordion, Text } from 'pcln-design-system'
import { Menu, MenuItem } from 'pcln-menu'
import React, { useState, useRef } from 'react'
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
function ModalStory(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen)
  const scrollLock = useRef(new ScrollLock())
  function onClose() {
    setIsOpen(false)
    if (props.lock) {
      scrollLock.current.off()
    }
  }
  return (
    <div style={{ height: '1500px' }}>
      <Button
        onClick={() => {
          if (props.lock) {
            scrollLock.current.on()
          }
          setIsOpen(true)
        }}
      >
        Open
      </Button>
      <StyledModal ariaLabel='Storybook modal.' isOpen={isOpen} onClose={onClose} {...props}>
        <div style={{ height: '1000px' }}>Content with 1000px height</div>
      </StyledModal>
    </div>
  )
}

export default {
  title: 'pcln-modal/Modal',
  component: Modal,
}

export const Raw = () => <ModalStory width={['100px', '200px', '500px']} disableCloseButton />

export const WithSmallModalHeader = () => (
  <ModalStory header={<SmallModalHeader />} width={['80vw', '400px', '500px']} />
)

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

const accordionItems = [
  {
    headerLabel: (
      <>
        <Text>Header Label First Item</Text>
      </>
    ),
    content: (
      <>
        <Text>I am some content</Text>
        <Text>I am some content</Text>
        <Text>I am some content</Text>
      </>
    ),
    value: 'item-1',
  },
]
export const WithOverflowForElementsRenderedInsideTheModal = () => (
  <StyledModal ariaLabel='Storybook modal.' isOpen={true} height='100px' enableOverflow>
    <Accordion items={accordionItems} />
  </StyledModal>
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

export const WithCustomAnimation = () => (
  <ModalStory
    header={<SmallModalHeader />}
    width={['100px', '200px', '500px']}
    dialogAnimation={CUSTOM_ANIMATION}
    verticalAlignment='top'
  />
)

export const ZeroTimeout = () => (
  <ModalStory disableCloseButton width={['100px', '200px', '500px']} timeout={0} />
)
