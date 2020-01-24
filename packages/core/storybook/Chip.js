import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Close, Search, Edit, ThumbsUp, ChevronDown } from 'pcln-icons'
import Chip from '../src/Chip'
import Text from '../src/Text'
import Flex from '../src/Flex'
import Box from '../src/Box'

storiesOf('Chip', module)
  .add('choice variation', () => (
    <Box>
      {['small', 'medium', 'large'].map(size => (
        <Box m={2}>
          <Chip
            color="primary"
            variation="choice"
            size={size}
            selected
            mr={2}
            onClick={action('Clicked')}
          >
            Hotel + Flight
          </Chip>
          <Chip
            color="primary"
            size={size}
            variation="choice"
            mr={2}
            onClick={action('Clicked')}
          >
            Hotel + Flight + Car
          </Chip>
          <Chip
            color="primary"
            size={size}
            variation="choice"
            mr={2}
            onClick={action('Clicked')}
          >
            Flight + Car
          </Chip>
          <Chip
            color="primary"
            size={size}
            variation="choice"
            mr={2}
            disabled
            onClick={action('Clicked')}
          >
            Boat + Car
          </Chip>
        </Box>
      ))}
    </Box>
  ))
  .add('choice variation, custom description', () => (
    <Box>
      <Chip
        color="primary"
        variation="choice"
        size="large"
        selected
        mr={2}
        onClick={action('Clicked')}
        description="Description"
      >
        Chip Enabled
      </Chip>
      <Chip
        color="primary"
        variation="choice"
        size="large"
        mr={2}
        onClick={action('Clicked')}
        description="Description"
      >
        Chip Enabled
      </Chip>
      <Chip
        color="primary"
        variation="choice"
        size="large"
        mr={2}
        onClick={action('Clicked')}
        description={
          <Text color="secondary">
            Custom <Text.span color="warning">description</Text.span>
          </Text>
        }
      >
        Chip Enabled
      </Chip>
    </Box>
  ))
  .add('input variation', () => (
    <div>
      <Chip
        color="primary"
        variation="input"
        mr={2}
        onClick={action('Clicked')}
      >
        <Flex align="center">
          <ThumbsUp size={'16px'} mr={1} />
          <Text>Free Breakfast</Text>
        </Flex>
      </Chip>
      <Chip
        color="primary"
        variation="input"
        size="small"
        mr={2}
        actionIcon={<Close />}
        onClick={action('Clicked')}
      >
        Free Breakfast
      </Chip>
      <Chip
        color="primary"
        variation="input"
        size="medium"
        mr={2}
        actionIcon={<Search />}
        onClick={action('Clicked')}
      >
        Free Breakfast
      </Chip>
      <Chip
        color="primary"
        variation="input"
        size="large"
        mr={2}
        actionIcon={<Edit />}
        onClick={action('Clicked')}
      >
        Free Breakfast
      </Chip>
      <Chip
        color="primary"
        variation="input"
        size="large"
        mr={2}
        actionIcon={<ChevronDown />}
        onClick={action('Clicked')}
      >
        Free Breakfast
      </Chip>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Chip color="primary" variation="input" mr={2}>
        Free Breakfast
      </Chip>
      <Chip color="primary" size="medium" variation="input" mr={2}>
        Free Breakfast
      </Chip>
      <Chip color="primary" size="large" variation="input" mr={2}>
        Free Breakfast
      </Chip>
    </div>
  ))
