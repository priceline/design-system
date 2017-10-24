import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Box, Banner } from '../src'

storiesOf('Banner', module)
  .add('All palettes', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='lightGray' text='Secondary Text' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='blue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='green' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='orange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='red' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='lightBlue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='lightGreen' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='lightOrange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='lightRed' onClose={action('closed')} />
    </Box>
  ))

  .add('All palettes header only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} header='lightGray' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='blue' palette='blue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='green' palette='green' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='orange' palette='orange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='red' palette='red' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='blue' palette='lightBlue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='green' palette='lightGreen' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='orange' palette='lightOrange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='red' palette='lightRed' onClose={action('closed')} />
    </Box>
  ))

  .add('All palettes text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='lightGray' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='blue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='green' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='orange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='red' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='Secondary Text' palette='lightBlue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' palette='lightGreen' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='Secondary Text' palette='lightOrange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' palette='lightRed' onClose={action('closed')} />
    </Box>
  ))

  .add('Sans Close Button', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='lightGray' text='Secondary Text' />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='blue' />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='green' />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='orange' />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='red' />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='lightBlue' />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='lightGreen' />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='lightOrange' />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='lightRed' />
    </Box>
  ))

  .add('Sans Icon', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='lightGray' text='Secondary Text' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='blue' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='green' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='orange' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='red' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='lightBlue' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='lightGreen' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='lightOrange' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='lightRed' onClose={action('closed')} showIcon={false} />
    </Box>
  ))

  .add('Without Icon or Close Button', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='lightGray' text='Secondary Text' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='blue' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='green' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='orange' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='red' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' palette='lightBlue' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' palette='lightGreen' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' palette='lightOrange' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' palette='lightRed' showIcon={false} />
    </Box>
  ))

  .add('Sans Close Button, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='lightGray' />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='blue' />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='green' />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='orange' />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='red' />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='lightBlue' />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='lightGreen' />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='lightOrange' />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='lightRed' />
    </Box>
  ))

  .add('Sans Icon, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='lightGray' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='blue' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='green' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='orange' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='red' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='lightBlue' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='lightGreen' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='lightOrange' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='lightRed' onClose={action('closed')} showIcon={false} />
    </Box>
  ))

  .add('Without Icon or Close Button, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='lightGray' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='blue' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='green' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='orange' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='red' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' palette='lightBlue' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' palette='lightGreen' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='orange' palette='lightOrange' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' palette='lightRed' showIcon={false} />
    </Box>
  ))

