import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Box, Banner } from '../src'

storiesOf('Banner', module)
  .add('All palettes', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='DEFAULT' text='Secondary Text' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='information' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='success' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attention' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warning' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='informationLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='successLight' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attentionLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warningLight' onClose={action('closed')} />
    </Box>
  ))

  .add('All palettes header only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} header='DEFAULT' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='INFORMATION' palette='information' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='SUCCESS' palette='success' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='ATTENTION' palette='attention' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='WARNING' palette='warning' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='INFORMATION' palette='informationLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='SUCCESS' palette='successLight' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} header='ATTENTION' palette='attentionLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} header='WARNING' palette='warningLight' onClose={action('closed')} />
    </Box>
  ))

  .add('All palettes text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='DEFAULT' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='information' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='success' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attention' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warning' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='Secondary Text' palette='informationLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' palette='successLight' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={2} text='Secondary Text' palette='attentionLight' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' palette='warningLight' onClose={action('closed')} />
    </Box>
  ))

  .add('palette aliases', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='LIGHTGRAY' text='Secondary Text' palette='lightGray' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='BLUE' text='Secondary Text' palette='blue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='GREEN' text='Secondary Text' palette='green' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='ORANGE' text='Secondary Text' palette='orange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='RED' text='Secondary Text' palette='red' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='LIGHTBLUE' text='Secondary Text' palette='lightBlue' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='LIGHTGREEN' text='Secondary Text' palette='lightGreen' onClose={action('closed')} />
      <Banner textAlign='left' mb={2} p={3} header='LIGHTORANGE' text='Secondary Text' palette='lightOrange' onClose={action('closed')} />
      <Banner textAlign='right' mb={2} p={3} header='LIGHTRED' text='Secondary Text' palette='lightRed' onClose={action('closed')} />
    </Box>
  ))

  .add('Sans Close Button', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='DEFAULT' text='Secondary Text' />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='information' />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='success' />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attention' />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warning' />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='informationLight' />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='successLight' />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attentionLight' />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warningLight' />
    </Box>
  ))

  .add('Sans Icon', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='DEFAULT' text='Secondary Text' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='information' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='success' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attention' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warning' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='informationLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='successLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attentionLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warningLight' onClose={action('closed')} showIcon={false} />
    </Box>
  ))

  .add('Without Icon or Close Button', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='DEFAULT' text='Secondary Text' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='information' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='success' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attention' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warning' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='INFORMATION' text='Secondary Text' palette='informationLight' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='SUCCESS' text='Secondary Text' palette='successLight' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='ATTENTION' text='Secondary Text' palette='attentionLight' showIcon={false} />
      <Banner textAlign='right' mb={2} p={3} header='WARNING' text='Secondary Text' palette='warningLight' showIcon={false} />
    </Box>
  ))

  .add('Sans Close Button, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='DEFAULT' />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='information' />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='success' />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attention' />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warning' />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='informationLight' />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='successLight' />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attentionLight' />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warningLight' />
    </Box>
  ))

  .add('Sans Icon, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='DEFAULT' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='information' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='success' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attention' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warning' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='informationLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='successLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attentionLight' onClose={action('closed')} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warningLight' onClose={action('closed')} showIcon={false} />
    </Box>
  ))

  .add('Without Icon or Close Button, Text only', () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='DEFAULT' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='information' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='success' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attention' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warning' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='INFORMATION' palette='informationLight' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='SUCCESS' palette='successLight' showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='ATTENTION' palette='attentionLight' showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='WARNING' palette='warningLight' showIcon={false} />
    </Box>
  ))

