import React from 'react'
import Chip from './Chip'
import { Box } from '../Box'
import { Text } from '../Text'
import { Departure, Close, ChevronDown } from 'pcln-icons'

const image = (
  <img
    src='https://www.priceline.com/sam/air/carrier_logos/airLogo_DL.png'
    alt='Delta'
    height='20'
  />
)

const small = {
  title: 'Small',
  value: 'sm',
}

const medium = {
  title: 'Medium',
  value: 'md',
}

const responsive = {
  title: 'Responsive',
  value: ['sm', 'sm', 'md'],
}

const getExamples = (exampleProps, sizes) => (
  <Box>
    {sizes.map((size) => (
      <Box m={3}>
        <Text>{size.title}</Text>
        <Box>
          {exampleProps.map((props, i) => (
            <Chip
              id={`chip${size.title}${i}`}
              m={1}
              size={size.value}
              {...props}
            />
          ))}
        </Box>
      </Box>
    ))}
  </Box>
)

//Label Only
const labelOnly = [
  { label: 'Enabled' },
  { label: 'Active', selected: true },
  { label: 'Active', selected: true, ActionIcon: Close },
  { label: 'Active', selected: true, ActionIcon: Close, disabled: true },
]
export const LabelOnly = () =>
  getExamples(labelOnly, [small, medium, responsive])

//With Icon
const withIcon = [
  { label: 'Enabled', Icon: Departure },
  { label: 'Active', selected: true, Icon: Departure },
  { label: 'Active', selected: true, ActionIcon: Close, Icon: Departure },
  {
    label: 'Active',
    selected: true,
    ActionIcon: Close,
    disabled: true,
    Icon: Departure,
  },
]
export const WithIcon = () => getExamples(withIcon, [small, medium, responsive])

//With Facet
const withFacet = [
  { label: 'Enabled', facet: '(00)' },
  { label: 'Active', facet: '(00)', selected: true },
  { label: 'Active', facet: '(00)', selected: true, ActionIcon: Close },
  {
    label: 'Active',
    facet: '(00)',
    selected: true,
    ActionIcon: Close,
    disabled: true,
  },
]
export const WithFacet = () =>
  getExamples(withFacet, [small, medium, responsive])

//With Facet And Icon
const withFacetAndIcon = [
  { label: 'Enabled', facet: '(00)', Icon: Departure },
  { label: 'Active', facet: '(00)', Icon: Departure, selected: true },
  {
    label: 'Active',
    facet: '(00)',
    Icon: Departure,
    selected: true,
    ActionIcon: Close,
  },
  {
    label: 'Active',
    facet: '(00)',
    Icon: Departure,
    selected: true,
    ActionIcon: Close,
    disabled: true,
  },
]
export const WithIconAndFacet = () =>
  getExamples(withFacetAndIcon, [small, medium, responsive])

//Icon Only
const iconOnly = [
  { Icon: Departure },
  { Icon: Departure },
  { selected: true, ActionIcon: Close, Icon: Departure },
  { selected: true, ActionIcon: Close, disabled: true, Icon: Departure },
]
export const IconOnly = () => getExamples(iconOnly, [small, medium, responsive])

//With Image
const withImage = [
  { label: 'Enabled', image: image },
  { label: 'Active', selected: true, image: image },
  { label: 'Active', selected: true, ActionIcon: Close, image: image },
  {
    label: 'Active',
    selected: true,
    ActionIcon: Close,
    disabled: true,
    image: image,
  },
]
export const WithImage = () => getExamples(withImage, [medium])

//With Image And Bridge Label
const withImageAndBridgeLabel = [
  { label: 'Enabled', image: image, bridgeLabel: 'Bridge' },
  { label: 'Active', selected: true, image: image, bridgeLabel: 'Bridge' },
  {
    label: 'Active',
    selected: true,
    ActionIcon: ChevronDown,
    image: image,
    bridgeLabel: 'Bridge',
  },
  {
    label: 'Active',
    selected: true,
    ActionIcon: ChevronDown,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
]
export const WithImageAndBridgeLabel = () =>
  getExamples(withImageAndBridgeLabel, [medium])

//Image Only
const imageOnly = [
  { image: image },
  { selected: true, image: image },
  { selected: true, ActionIcon: Close, image: image },
  { selected: true, ActionIcon: Close, disabled: true, image: image },
]
export const ImageOnly = () => getExamples(imageOnly, [medium])

//Custom Chip
export const CustomChip = () => (
  <Box m={2}>
    <Chip id='customChip1' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Browse All
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          $161 avg. per night
        </Text>
      </Box>
    </Chip>
    <Chip id='customChip2' selected m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Pricebreakers
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          Save up to 60%
        </Text>
      </Box>
    </Chip>
    <Chip id='customChip3' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </Chip>
  </Box>
)

//Default
export default {
  title: 'Chip',
  component: Chip,
}
