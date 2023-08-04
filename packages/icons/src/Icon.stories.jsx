import React from 'react'

import { Box, Flex, Truncate, Text } from 'pcln-design-system'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import * as icons from '../components'
const { Accessible, Cars, Flights, Hotels, Priceline } = icons

const keys = Object.keys(icons).filter((icon) => icon !== 'Icon')

export default {
  title: 'pcln-icons / Icon',
}

export const Icons = () => (
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
)

export const Color = () => (
  <div>
    <Flights color='primary' size={48} m={2} />
    <Hotels color='secondary' size={48} m={2} />
    <Cars color='alert' size={48} m={2} />
  </div>
)

export const PricelineLogo = () => <Priceline color='primary' size={48} />

export const Responsive = () => <Flights color='primary' size={[100, 200, 300, 50]} name='Flights' />

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

    // renders icon and <desc />
    const icon = canvas.queryAllByTitle('Accessible Logo')[0]
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('tabindex', '-1')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveAttribute('role', 'img')
    expect(icon).toHaveAttribute('aria-labelledby', 'titleId descId')
    expect(canvas.getByText('Accessible Logo description')).toBeInTheDocument()

    // aria-hidden = true when title is not provided
    const pricelineIcon = canvas.getByTestId('priceline-icon')
    expect(pricelineIcon).toHaveAttribute('aria-hidden', 'true')
    expect(pricelineIcon).toHaveAttribute('aria-labelledby', 'priceline-icon')
  },
}

export const AlignedWithText = () => (
  <Flex alignItems='center'>
    {<icons.WarningOutline />}
    <Text ml={1}>Leapin&apos; lizards!</Text>
  </Flex>
)
