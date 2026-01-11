import { Box, Flex, Text, Truncate } from 'pcln-design-system'
import React from 'react'
import { expect, within } from 'storybook/test'
import * as icons from './index'
import Icon from './Icon'

const { Accessible, Cars, CarsBrand, Flights, FlightsBrand, Hotels, HotelsBrand, Priceline } = icons

const keys = Object.keys(icons).filter((icon) => icon !== 'Icon')

export default {
  title: 'pcln-icons / Icon',
  component: Icon,
}

export const Icons = {
  render: () => (
    <Box p={2} color='primary'>
      <Flex wrap>
        {keys.map((name) => {
          const Component = icons[name]

          return (
            <Flex
              key={name}
              flexDirection='column'
              alignItems='center'
              width={[1 / 3, 1 / 5, 1 / 6, 1 / 8]}
              mx={2}
              my={3}
            >
              <Component size={48} />
              <Truncate fontSize={0} mt={1}>
                {name}
              </Truncate>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  ),
}

export const Color = {
  render: () => (
    <Flex flexDirection='column'>
      <Box mb={3}>
        <Flights color='primary' size={48} m={2} />
        <Hotels color='secondary' size={48} m={2} />
        <Cars color='alert' size={48} m={2} />
      </Box>
      <Box>
        <FlightsBrand color='primary' size={48} m={2} />
        <HotelsBrand color='secondary' size={48} m={2} />
        <CarsBrand color='alert' size={48} m={2} />
      </Box>
    </Flex>
  ),
}

export const PricelineLogo = {
  render: () => <Priceline color='primary' size={48} />,
}

export const Responsive = {
  render: () => <Flights color='primary' size={[100, 200, 300, 50]} name='Flights' />,
}

export const A11Y = {
  name: 'Tests / Accessibility',
  render: () => (
    <Box>
      <Accessible
        color='primary'
        size={[100, 200, 300, 50]}
        title='Accessible Logo'
        titleId='titleId'
        desc='Accessible Logo description'
        descId='descId'
      />
      <Priceline data-testid='priceline-icon' titleId='priceline-icon' />
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const icon = canvas.queryAllByTitle('Accessible Logo')[0]
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('tabindex', '-1')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveAttribute('role', 'img')
    expect(icon).toHaveAttribute('aria-labelledby', 'titleId descId')
    expect(canvas.getByText('Accessible Logo description')).toBeInTheDocument()

    const pricelineIcon = canvas.getByTestId('priceline-icon')
    expect(pricelineIcon).toHaveAttribute('aria-hidden', 'true')
    expect(pricelineIcon).toHaveAttribute('aria-labelledby', 'priceline-icon')
  },
}

export const AlignedWithText = {
  render: () => (
    <Flex alignItems='center'>
      <icons.WarningOutline />
      <Text ml={1}>Leapin&apos; lizards!</Text>
    </Flex>
  ),
}
