import React from 'react'
import PropTypes from 'prop-types'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Flex, Card, Container, Image, Text, Box, BackgroundImage, Relative, Badge } from 'pcln-design-system'
import Popover from 'pcln-popover'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { Carousel } from './Carousel'
import { ArrowButton } from './ArrowButton'

const SLIDE_COUNT = 6

const ToutCard = styled(Card)`
  overflow: hidden;
`

const StyledMockBox = styled(Box)`
  border: 1px solid black;
`

export default {
  title: 'pcln-carousel / Carousel',
  component: Carousel,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8STFTihIpLXjgaBq0GBCqs/Design-System--Storybook--Guidelines?type=design&node-id=776-41100&t=dxLycOfsXz0EUXtO-0',
    },
  },

  argTypes: {
    visibleSlides: {
      control: { type: 'number' },
      min: 1,
      max: SLIDE_COUNT,
    },
    buttonSize: {
      control: 'text',
    },
    showArrowsOnHover: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    naturalSlideHeight: {
      control: { type: 'number' },
      min: 1,
    },
    showDots: {
      control: { type: 'boolean' },
    },
    showForwardBackBtns: {
      control: { type: 'boolean' },
    },
    children: {
      table: { disable: true },
    },
    infinite: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'radio' },
      defaultValue: 'horizontal',
    },
    isIntrinsicHeight: {
      defaultValue: true,
    },
    onSlideChange: {
      action: 'Current slide changed',
    },
    onSlideClick: {
      action: 'Current slide click',
    },
    onSlideKeyDown: {
      action: 'Current slide key',
    },
  },
}

function renderCards() {
  return Array.from(Array(SLIDE_COUNT)).map((_, idx) => (
    <ToutCard
      height={idx === 1 ? '300px' : '320px'}
      borderRadius={20}
      boxShadowSize='md'
      borderWidth={0}
      key={idx}
    >
      <BackgroundImage height='190px' width='100%' image='https://cdn2.thecatapi.com/images/dnn.jpg' />
      <Flex color='background.lightest' p={[1, 1, 2, 2, 2, 3]}>
        <Box>
          <Text fontSize={[0, null, 1, 1, 2]} fontWeight='bold' mb={2}>
            City {idx}, AB
          </Text>
          <Text fontSize={[0, null, null, null, 1]}>Hotel for 2 nights</Text>
          <Text fontSize={[0, null, null, null, 1]}>+ Round-trip flight</Text>
        </Box>
        <Text textAlign='right' ml='auto'>
          <Text.s fontSize={[0, null, null, null, 1]} fontWeight='bold'>
            $554
          </Text.s>
          <Text fontSize={[0, null, 1, 1, 3]} fontWeight='bold' color='secondary.base' mx={1}>
            $365
          </Text>
          <Text fontSize={[0, null, null, null, 1]} color='text.light'>
            per person
          </Text>
        </Text>
      </Flex>
    </ToutCard>
  ))
}

const BasicTemplate = (args) => <Carousel {...args}>{renderCards()}</Carousel>

export const Basic = BasicTemplate.bind({})
Basic.args = {
  visibleSlides: 3,
  mobileVisibleSlides: [1.1, 2.1, 2.1],
  showDots: false,
  showForwardBackBtns: true,
  onSlideChange: action('Slide Change'),
  buttonSize: '60px',
  sideButtonMargin: '-30px',
}
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  expect(canvas.queryByTestId('slide-box')).not.toBeInTheDocument()
}

const SimpleTextContent = () => (
  <Text textAlign='center' py={5}>
    Popover!
  </Text>
)

const CardWithPopover = () => {
  return (
    <Card borderRadius={20} boxShadowSize='lg' borderWidth={0} p={4} height='200px' bg='background.lightest'>
      <Popover
        renderContent={SimpleTextContent}
        ariaLabel='Test Popover'
        idx={1}
        width={150}
        isOpen={false}
        openOnHover
        placement='top'
      >
        <Box>Hover for Popover</Box>
      </Popover>
    </Card>
  )
}
//Overflow Template
function renderOverflowCards() {
  return Array.from(Array(SLIDE_COUNT)).map((_, idx) => <CardWithPopover key={idx} />)
}

const OverflowTemplate = (args) => (
  <Box>
    <Relative
      width={1}
      bg='background.light'
      zIndex={2}
      height='80px'
      borderRadius='xl'
      mb={[3, 3, 3, 4]}
      mx={2}
    >
      Above
    </Relative>
    <Carousel {...args}>{renderOverflowCards()}</Carousel>
    <Relative
      width={1}
      bg='background.light'
      zIndex={3}
      height='80px'
      borderRadius='xl'
      mt={[3, 3, 3, 4]}
      mx={2}
    >
      Below
    </Relative>
  </Box>
)

export const OverflowAllowed = OverflowTemplate.bind({})
OverflowAllowed.args = {
  visibleSlides: 3,
  mobileVisibleSlides: [1.1, 2.1, 2.1],
  showDots: false,
  showForwardBackBtns: true,
  arrowPositions: 'bottom',
  onSlideChange: action('Slide Change'),
  buttonSize: '60px',
  sideButtonMargin: '-30px',
  overflowAllowancePxX: 46,
  overflowAllowancePxY: 20,
  overflowAllowancePxTop: 2,
  maxHeight: 220,
}

const OverflowTemplateBottomArrows = (args) => (
  <Box>
    <Relative
      width={1}
      bg='background.light'
      zIndex={2}
      height='80px'
      borderRadius='xl'
      mb={[3, 3, 3, 4]}
      mx={2}
    >
      Above
    </Relative>
    <Carousel {...args}>{renderOverflowCards()}</Carousel>
    <Relative
      width={1}
      bg='background.light'
      zIndex={3}
      height='80px'
      borderRadius='xl'
      mt={[5, 3, 3, 5]}
      mx={2}
    >
      Below
    </Relative>
  </Box>
)

export const OverflowArrowsBottomZIndex = OverflowTemplateBottomArrows.bind({ boxShadowSize: 'xl' })
OverflowArrowsBottomZIndex.args = {
  visibleSlides: 3,
  mobileVisibleSlides: [1.1, 2.1, 2.1],
  arrowsPosition: 'bottom',
  overflowAllowancePxX: 46,
  overflowAllowancePxY: 80,
  overflowAllowancePxTop: 2,
  maxHeight: 220,
  arrowButtonZIndex: 2,
}

//Overflow With backround
const OverflowBackgroundTemplate = (args) => (
  <Box>
    <Relative width={1} bg='background.light' zIndex={2} height='80px' borderRadius='xl'>
      Above
    </Relative>

    <Relative zIndex={2} bg='primary.light' px={2} py={2} borderRadius='xl' my={4}>
      <Carousel {...args}>{renderOverflowCards()}</Carousel>
    </Relative>

    <Relative width={1} bg='background.light' zIndex={3} height='80px' borderRadius='xl'>
      Below
    </Relative>
  </Box>
)

export const OverflowBackground = OverflowBackgroundTemplate.bind({})
OverflowBackground.args = {
  visibleSlides: 3.1,
  mobileVisibleSlides: [1.1, 2.1, 2.1],
  showDots: false,
  showForwardBackBtns: true,
  arrowPositions: 'bottom',
  onSlideChange: action('Slide Change'),
  buttonSize: '60px',
  sideButtonMargin: '-30px',
  overflowAllowancePxX: 8,
  overflowAllowancePxY: 20,
  overflowAllowancePxTop: 2,
  maxHeight: 220,
}

export const NodesByArrows = BasicTemplate.bind({})
NodesByArrows.args = {
  visibleSlides: 3,
  mobileVisibleSlides: [1.1, 2.1, 2.1],
  showDots: false,
  showForwardBackBtns: true,
  onSlideChange: action('Slide Change'),
  buttonSize: '60px',
  arrowsPosition: 'bottom',
  nodeBesideArrowsLeft: <Badge>Left Content</Badge>,
  nodeBesideArrowsRight: <Badge>Right Content</Badge>,
  arrowsAlignment: 'right',
}
NodesByArrows.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  expect(canvas.queryByTestId('slide-box')).not.toBeInTheDocument()
}

//Show Arrows On Hover
export const ShowArrowsOnHover = BasicTemplate.bind({})
ShowArrowsOnHover.args = {
  visibleSlides: 3.15,
  showArrowsOnHover: true,
}

const VerticalTemplate = (args) => (
  <Flex width='300px' height='500px'>
    <Carousel {...args}>
      {Array.from(Array(SLIDE_COUNT), (_, idx) => (
        <Flex justifyContent='center' alignItems='center' key={idx}>
          <Card color='primary.light' border='primary' height='200px' width='200px' p={3}>
            Slide {idx}
          </Card>
        </Flex>
      ))}
    </Carousel>
  </Flex>
)

export const Vertical = VerticalTemplate.bind({})
Vertical.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  orientation: 'vertical',
  isIntrinsicHeight: false,
  naturalSlideHeight: 100,
}

const LayoutTemplate = (args) => (
  <Carousel {...args}>
    {Array.from(Array(6), (_, idx) => (
      <Card color='primary.light' height='100px' key={idx}>
        Slide {idx}
      </Card>
    ))}
  </Carousel>
)

export const Layout = LayoutTemplate.bind({})
Layout.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  layout: '25-50-25',
}

const TextSlide = ({ text, bold }) => {
  return (
    <Card height='100%' mx={2}>
      <Flex justifyContent='center' alignItems='center' height='100%'>
        <Text bold={bold}>{text}</Text>
      </Flex>
    </Card>
  )
}
TextSlide.propTypes = {
  bold: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

const RichContentTemplate = (args) => (
  <Carousel {...args}>
    <Card>
      <Text textAlign='center' bold mt={2}>
        Welcome to Priceline!
      </Text>
      <Flex justifyContent='center'>
        <Image src='https://cdn2.thecatapi.com/images/dnn.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/70f.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/a18.png' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/fSJGVIdLBK.jpg' p={3} height='150px' />
      </Flex>
    </Card>
    <TextSlide text='Best' />
    <TextSlide text='travel' />
    <TextSlide text='deal' />
    <TextSlide text='makers' />
    <TextSlide text='in' />
    <TextSlide text='the' />
    <TextSlide text='world!' />
  </Carousel>
)

export const RichContent = RichContentTemplate.bind({})
RichContent.args = {
  showDots: false,
  showForwardBackBtns: true,
  layout: '75-25',
}

const ButtonColorsTemplate = (args) => <Carousel {...args}>{renderCards()}</Carousel>

const buttonStyles = {
  buttonBackground: 'primary.base',
  buttonColor: 'text.lightest',
  buttonHoverBackground: 'primary.dark',
  buttonHoverColor: 'text.lightest',
}

export const AlternateButtonColors = ButtonColorsTemplate.bind({})
AlternateButtonColors.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  sidePositionArrowButton: <ArrowButton {...buttonStyles} />,
}

export const CustomButtonPosition = BasicTemplate.bind({})
CustomButtonPosition.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  sideButtonMargin: '-50px',
  slideSpacing: 3,
  sidePositionArrowButton: <ArrowButton />,
}

const FixedVisibleSlidesTemplate = (args) => (
  <Container maxWidth={1280}>
    <Flex width={1} flexDirection={['column', null, null, 'row']}>
      <Box width={[1, null, null, 2 / 3]}>
        <Carousel {...args}>{renderCards()}</Carousel>
      </Box>
      <StyledMockBox width={[1, null, null, 1 / 3]} textAlign='center'>
        MOCK SUMMARY OF CHARGES
      </StyledMockBox>
    </Flex>
  </Container>
)
export const SetVisibleSlidesByViewport = FixedVisibleSlidesTemplate.bind({})

SetVisibleSlidesByViewport.args = {
  showDots: false,
  showForwardBackBtns: true,
  visibleSlides: [2.1, 1, 1],
  sideButtonMargin: '-23px',
  sidePositionArrowButton: <ArrowButton {...buttonStyles} buttonSize='48px' />,
}

export const SetCurrentSlide = () => (
  <Carousel layout='50-50' arrowsPosition='bottom' currentSlide={2}>
    <Flex>Slide 1</Flex>
    <Flex>Slide 2</Flex>
    <Flex>Slide 3</Flex>
  </Carousel>
)
