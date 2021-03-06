import {
  Absolute,
  Avatar,
  BackgroundImage,
  Badge,
  Banner,
  BlockLink,
  borders,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  CloseButton,
  color,
  Container,
  createTheme,
  deprecatedPropType,
  Divider,
  Flag,
  Flex,
  FormField,
  getContrastRatio,
  getPaletteColor,
  getTextColorOn,
  hasPaletteColor,
  Heading,
  Hide,
  Hug,
  Icon,
  IconButton,
  IconField,
  Image,
  Input,
  InputGroup,
  Label,
  Link,
  PlaceholderImage,
  Radio,
  RatingBadge,
  Select,
  SrOnly,
  Stamp,
  Stepper,
  Text,
  TextArea,
  theme as ThemeType,
  ThemeProvider,
  ToggleBadge,
  Tooltip,
  Truncate,
} from 'pcln-types'
import { theme } from 'pcln-design-system'
import React from 'react'

//
// Design System Utility Functions
// =============================================================================================

getContrastRatio('a', 'b') // $ExpectType number

deprecatedPropType('myProp') // $ExpectType Error | undefined

// $ExpectType object
borders({
  theme,
})

hasPaletteColor({ theme }) // $ExpectType boolean

color({ theme, bg: 'primary', color: 'secondary' }) // $ExpectType string | string[]

getPaletteColor('primary', 'light') // $ExpectType (props: ThemeArgs) => any

getTextColorOn('bla') // $ExpectType (props: ThemeArgs) => any

createTheme(theme, {}) // $ExpectType CreateThemeResult

const myTheme: ThemeType = theme

//
// Design System Core Components
// =============================================================================================

// $ExpectType Element
const myThemeProvider = (
  <ThemeProvider theme={theme} customBreakpoints={['100px', '500px']} />
)
const customTheme = {
  palette: {
    primary: '#000',
  },
}

// $ExpectType Element
const customThemeProvider = (
  <ThemeProvider theme={customTheme} customBreakpoints={['100px', '500px']} />
)

const styleBox = <Box style={{ background: 'red' }} /> // $ExpectType Element

const myBox = <Box width='1' bg='primary' boxShadowSize={'sm'} /> // $ExpectType Element
// $ExpectType Element
const myCard = (
  <Card width='1' bg='primary' borderRadius='md' boxShadowSize={'md'} />
)
const myText = <Text regular align={'center'} textAlign={'center'} /> // $ExpectType Element
const mySpan = <Text.span regular /> // $ExpectType Element
const myAbsolute = <Absolute bottom={1} top={1} left={1} right={1} /> // $ExpectType Element
const myFlex = <Flex flexDirection={['row', null, 'column']} m={3} /> // $ExpectType Element
const myHide = <Hide xs sm md lg xl xxl m={3} /> // $ExpectType Element
const myCheckbox = <Checkbox id='test' size={1} onChange={() => 'I changed!'} /> // $ExpectType Element
// $ExpectType Element
const myFormField = (
  <FormField>
    <Label width='1' fontWeight='bold' color='text'>
      Label
    </Label>
    <Input id='myInput' fontSize={1} color='primary' />
  </FormField>
)
// $ExpectType Element
const myLabel = (
  <Label width='1' fontWeight='bold' color='text'>
    Label
  </Label>
)
const myRadio = <Radio size={1} color='primary' /> // $ExpectType Element
const mySelect = <Select fontSize={1} color='text' /> // $ExpectType Element
const myTextArea = <TextArea id='test' style={{ borderColor: 'red' }} /> // $ExpectType Element
const myInput = <Input id='test' /> // $ExpectType Element
// $ExpectType Element
const myInputGroup = (
  <InputGroup borderColor='secondary'>
    <Input id='myInput' fontSize={1} color='primary' />
    <Input id='myInput' fontSize={1} color='primary' />
  </InputGroup>
)

// $ExpectType Element
const myLink = (
  <Link color='secondary' variation='outline' dsRef={{ current: 'bla' }} />
)
// $ExpectType Element
const myBadge = (
  <Badge color='primary' size='medium' m={1} p={2}>
    blue
  </Badge>
)
// $ExpectType Element
const myBlockLink = (
  <BlockLink color='secondary' variation='outline' dsRef={() => 'ima ref'} />
)
// $ExpectType Element
const myButton = (
  <Button
    variation='fill'
    size={'medium'}
    color='primary'
    disabled={false}
    onClick={() => 'i did something!'}
    width={1}
  >
    BUTTON
  </Button>
)
// $ExpectType Element
const myCloseButton = (
  <CloseButton
    color='background.darkest'
    onClick={() => 'ima function'}
    title='Title'
  />
)
// $ExpectType Element
const myIcon = (
  <Icon
    name='Email'
    size={48}
    color='primary'
    title='Email'
    titleId='Title ID'
    desc='Description'
    descId='Description ID'
  />
)
// $ExpectType Element
const myIconButton = (
  <IconButton
    dsRef={() => 'ima ref'}
    icon={<Icon name='Calendar' title='Choose date' />}
    size='small'
    onClick={() => 'ima function'}
  />
)
// $ExpectType Element
const myIconField = (
  <IconField flexWrap='wrap' flexDirection={['row', null, 'column']} m={3}>
    <Icon color='blue' />
    <Input placeholder='Choose Date' />
  </IconField>
)

const myHeading = <Heading color='secondary' /> // $ExpectType Element
const myH1 = <Heading.h1 caps /> // $ExpectType Element
const myH2 = <Heading.h2 fontSize='300px' /> // $ExpectType Element
const myH3 = <Heading.h3 m={4} /> // $ExpectType Element
const myH4 = <Heading.h4 p={[2, 2, 4]} /> // $ExpectType Element
const myH5 = <Heading.h5 lineHeight='12px' /> // $ExpectType Element
const myH6 = <Heading.h6 /> // $ExpectType Element

// $ExpectType Element
const myBreadcrumbs = (
  <Breadcrumbs>
    <Breadcrumbs.Link dsRef={() => 'ref1'} />
    <Breadcrumbs.Link
      dsRef={{ current: 'ref2' }}
      href={'priceline.com'}
      isLastChild={false}
      label='Label me!'
      onClick={() => 'bla'}
    />
  </Breadcrumbs>
)
// $ExpectType Element
const myRatingBadge = (
  <RatingBadge fontWeight='lighter' px={2} color='secondary' borderRadius={1}>
    9.0
  </RatingBadge>
)
// $ExpectType Element
const myStepper = (
  <Stepper className={'my-class'}>
    <Stepper.Step
      className={'step'}
      onClick={() => 'clicked!'}
      active
      completed={false}
    />
    <Stepper.Step />
  </Stepper>
)
// $ExpectType Element
const myToggleBadge = (
  <ToggleBadge
    color='primary'
    fontSize={0}
    m={1}
    p={2}
    selected={false}
    unSelectedBg='transparent'
  >
    ToggleBadge
  </ToggleBadge>
)

const myTruncate = <Truncate color='primary' /> // $ExpectType Element
const mySrOnly = <SrOnly className='test-class-stuff' /> // $ExpectType Element
// $ExpectType Element
const myImage = (
  <Image height={'50px'} width={[1, 1 / 2]} alt={'image'} src={'cat.jpg'} />
)
// $ExpectType Element
const myBackgroundImage = (
  <BackgroundImage
    height={'50px'}
    width={[1, 1 / 2]}
    variation={'static'}
    image={'cat.jpg'}
  />
)
// $ExpectType Element
const myPlaceholderImage = (
  <PlaceholderImage
    alt={'Alt text'}
    height={'50px'}
    width={'25px'}
    chooseSrc={'1'}
    ariaHidden={false}
    blur
  />
)
// $ExpectType Element
const myAvatar = (
  <Avatar
    className='className'
    title='Title'
    subtitle='Subtitle'
    src='opossum.jpg'
    initials='TS'
    size={100}
  />
)
// $ExpectType Element
const myBanner = (
  <Banner
    header='Header text'
    icon={<Icon name='Calendar' title='Choose date' />}
    onClose={() => {}}
    showIcon
    text='Text'
  />
)
const myContainer = <Container maxWidth={100} /> // $ExpectType Element
const myDivider = <Divider color='primary' borderColor='secondary' /> // $ExpectType Element
const myFlag = <Flag color='primary' width={100} /> // $ExpectType Element
// $ExpectType Element
const myHug = (
  <Hug
    icon={<Icon name='Calendar' title='Choose date' />}
    iconDisplay='none'
    text='Text'
  />
)
const myStamp = <Stamp variation='outline' size='small' /> // $ExpectType Element
// $ExpectType Element
const myToolip = <Tooltip zIndex={1} bottom top center={false} left right />
