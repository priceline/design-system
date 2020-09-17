import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Flex, Truncate } from 'pcln-design-system'

import * as icons from '../components'
const { Accessible, Cars, Flights, Hotels } = icons

const keys = Object.keys(icons).filter((icon) => icon !== 'Icon')

storiesOf('pcln-icons / Icon', module)
  .add('Icons', () => (
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
  ))
  .add('Color', () => (
    <div>
      <Flights color='primary' size={48} m={2} />
      <Hotels color='secondary' size={48} m={2} />
      <Cars color='alert' size={48} m={2} />
    </div>
  ))
  .add('Responsive', () => (
    <Flights color='primary' size={[100, 200, 300, 50]} name='Flights' />
  ))
  .add('a11y', () => (
    <Box>
      <Accessible
        color='primary'
        size={[100, 200, 300, 50]}
        title='Accessible Logo'
        titleId='titleId'
        desc='Accessible Logo description'
        descId='descId'
      />
      <Accessible
        color='primary'
        size={[100, 200, 300, 50]}
        title='Accessible Logo'
        titleId='titleId'
        desc='Accessible Logo description'
        descId='descId'
      />
    </Box>
  ))
