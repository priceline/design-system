import React from 'react'
import { Departure, Broom } from 'pcln-icons'
import ButtonChip from './ButtonChip'
import { Box } from '../../Box'
import { Text } from '../../Text'

const image = (
  <img src='https://www.priceline.com/sam/air/carrier_logos/airLogo_DL.png' alt='Delta' height='24' />
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
  value: ['sm', 'sm', 'sm', 'md'],
}

const getExamples = (exampleProps, sizes, width = '') => (
  <Box>
    {sizes.map((size) => (
      <Box m={3} key={size.title}>
        <Text>{size.title}</Text>
        <Box>
          {exampleProps.map((props, i) => (
            <ButtonChip
              key={`chip${size.title}${i}`}
              id={`chip${size.title}${i}`}
              width={width}
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
  { label: 'Active', expanded: true },
  { label: 'Active', expanded: true, showActionIcon: true },
  { label: 'Disabled', disabled: true },
  { label: 'Active and Disabled', expanded: true, disabled: true },
]
export const LabelOnly = () => getExamples(labelOnly, [small, medium, responsive])

//Label With Width
const labelWithWidth = [{ label: 'Enabled' }, { label: 'Active', expanded: true }]
export const LabelWithWidth = () => getExamples(labelWithWidth, [small, medium, responsive], '45%')

//With Icon
const withIcon = [
  { label: 'Enabled', Icon: Departure },
  { label: 'Active', expanded: true, Icon: Departure },
  { label: 'Active', expanded: true, showActionIcon: true, Icon: Departure },
  {
    label: 'Disabled',
    disabled: true,
    showActionIcon: true,
    Icon: Departure,
  },
  {
    label: 'Active and Disabled',
    expanded: true,
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
  },
]
export const WithIcon = () => getExamples(withIcon, [small, medium, responsive])

//With Facet
const withFacet = [
  { label: 'Enabled', facet: '(00)' },
  { label: 'Active', facet: '(00)', expanded: true },
  { label: 'Active', facet: '(00)', expanded: true, showActionIcon: true },
  {
    label: 'Disabled',
    facet: '(00)',
    showActionIcon: true,
    disabled: true,
  },
  {
    label: 'Active and Disabled',
    facet: '(00)',
    expanded: true,
    showActionIcon: true,
    disabled: true,
  },
]
export const WithFacet = () => getExamples(withFacet, [small, medium, responsive])

//With Facet And Icon
const withFacetAndIcon = [
  { label: 'Enabled', facet: '(00)', Icon: Departure },
  { label: 'Active', facet: '(00)', Icon: Departure, expanded: true },
  {
    label: 'Active',
    facet: '(00)',
    Icon: Departure,
    expanded: true,
    showActionIcon: true,
  },
  {
    label: 'Disabled',
    facet: '(00)',
    Icon: Departure,
    showActionIcon: true,
    disabled: true,
  },
  {
    label: 'Active and Disabled',
    facet: '(00)',
    Icon: Departure,
    expanded: true,
    showActionIcon: true,
    disabled: true,
  },
]
export const WithIconAndFacet = () => getExamples(withFacetAndIcon, [small, medium, responsive])

//Icon Only
const iconOnly = [
  { Icon: Departure, title: 'Departure' },
  { Icon: Departure, title: 'Departure' },
  { expanded: true, showActionIcon: true, Icon: Departure, title: 'Departure' },
  {
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
    title: 'Departure',
  },
  {
    expanded: true,
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
    title: 'Departure',
  },
]
export const IconOnly = () => getExamples(iconOnly, [small, medium, responsive])

//With Image
const withImage = [
  { label: 'Enabled', image: image },
  { label: 'Active', expanded: true, image: image },
  { label: 'Active', expanded: true, showActionIcon: true, image: image },
  {
    label: 'Disabled',
    showActionIcon: true,
    disabled: true,
    image: image,
  },
  {
    label: 'Active and Disabled',
    expanded: true,
    showActionIcon: true,
    disabled: true,
    image: image,
  },
]
export const WithImage = () => getExamples(withImage, [medium])

//With Image And Bridge Label
const withImageAndBridgeLabel = [
  { label: 'Enabled', image: image, bridgeLabel: 'Bridge' },
  { label: 'Active', expanded: true, image: image, bridgeLabel: 'Bridge' },
  {
    label: 'Active',
    expanded: true,
    showActionIcon: true,
    image: image,
    bridgeLabel: 'Bridge',
    BridgeIcon: Broom,
  },
  {
    label: 'Disabled',
    showActionIcon: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
  {
    label: 'Active and Disabled',
    expanded: true,
    showActionIcon: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
]
export const WithImageAndBridgeLabel = () => getExamples(withImageAndBridgeLabel, [medium])

//Image Only
const imageOnly = [
  { image: image },
  { expanded: true, image: image },
  { expanded: true, showActionIcon: true, image: image },
  { showActionIcon: true, disabled: true, image: image },
  { expanded: true, showActionIcon: true, disabled: true, image: image },
]
export const ImageOnly = () => getExamples(imageOnly, [medium])

//Custom Chip
export const CustomChip = () => (
  <Box m={2}>
    <ButtonChip id='customChip1' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Browse All
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          $161 avg. per night
        </Text>
      </Box>
    </ButtonChip>
    <ButtonChip id='customChip2' expanded m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Pricebreakers
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          Save up to 60%
        </Text>
      </Box>
    </ButtonChip>
    <ButtonChip id='customChip3' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </ButtonChip>
    <ButtonChip id='customChip3' m={1} disabled>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </ButtonChip>
    <ButtonChip id='customChip2' expanded disabled m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Pricebreakers
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          Save up to 60%
        </Text>
      </Box>
    </ButtonChip>
  </Box>
)

//Default
export default {
  title: 'core / Chip / ButtonChip',
  component: ButtonChip,
}
