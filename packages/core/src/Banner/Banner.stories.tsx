import { action } from '@storybook/addon-actions'
import { Attention, Star } from 'pcln-icons'
import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Heading } from '../Heading/Heading'
import { Text } from '../Text/Text'
import { colorSchemeNames } from '../storybook/args'
import { Banner } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
}

export const AllBgs = () => (
  <Box>
    <Banner textAlign='left' mb={2} p={3} header='default' text='Secondary Text' onClose={action('closed')} />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='blue'
      text='Secondary Text'
      bg='blue'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='green'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='orange'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur.'
      bg='orange'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='red'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus.'
      bg='red'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='blue'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum.'
      bg='lightBlue'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='green'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
      bg='lightGreen'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='red'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
      bg='lightRed'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='custom'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
      bg='text'
      color='white'
      onClose={action('closed')}
    />
    <Banner
      mb={2}
      p={3}
      color='primary'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
    />
    <Banner
      mb={2}
      p={3}
      color='warning'
      icon={<Attention />}
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
    />
  </Box>
)

export const AllBgsHeaderOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} header='default' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} header='blue' bg='blue' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} header='green' bg='green' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} header='orange' bg='orange' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} header='red' bg='red' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} header='blue' bg='lightBlue' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} header='green' bg='lightGreen' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} header='red' bg='lightRed' onClose={action('closed')} />
  </Box>
)

export const AllBgsTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='green' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='red' onClose={action('closed')} />
    <Banner textAlign='left' mb={2} p={2} text='Secondary Text' bg='lightBlue' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} text='Secondary Text' bg='lightGreen' onClose={action('closed')} />
    <Banner textAlign='right' mb={2} p={2} text='Secondary Text' bg='lightRed' onClose={action('closed')} />
  </Box>
)

export const SansCloseButton = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={3} header='default' text='Secondary Text' />
    <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' bg='blue' />
    <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' bg='green' />
    <Banner textAlign='left' mb={2} p={3} header='orange' text='Secondary Text' bg='orange' />
    <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' bg='red' />
    <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' bg='lightBlue' />
    <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' bg='lightGreen' />
    <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' bg='lightRed' />
  </Box>
)

export const SansIcon = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='default'
      text='Secondary Text'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='blue'
      text='Secondary Text'
      bg='blue'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='green'
      text='Secondary Text'
      bg='green'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='orange'
      text='Secondary Text'
      bg='orange'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='red'
      text='Secondary Text'
      bg='red'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='blue'
      text='Secondary Text'
      bg='lightBlue'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='green'
      text='Secondary Text'
      bg='lightGreen'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='red'
      text='Secondary Text'
      bg='lightRed'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

export const WithoutIconOrCloseButton = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={3} header='default' text='Secondary Text' showIcon={false} />
    <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' bg='blue' showIcon={false} />
    <Banner textAlign='right' mb={2} p={3} header='green' text='Secondary Text' bg='green' showIcon={false} />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='orange'
      text='Secondary Text'
      bg='orange'
      showIcon={false}
    />
    <Banner textAlign='right' mb={2} p={3} header='red' text='Secondary Text' bg='red' showIcon={false} />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='blue'
      text='Secondary Text'
      bg='lightBlue'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='green'
      text='Secondary Text'
      bg='lightGreen'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='red'
      text='Secondary Text'
      bg='lightRed'
      showIcon={false}
    />
  </Box>
)

export const SansCloseButtonTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='green' />
    <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='red' />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='lightBlue' />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='lightGreen' />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='lightRed' />
  </Box>
)

export const SansIconTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' onClose={action('closed')} showIcon={false} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' onClose={action('closed')} showIcon={false} />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='green'
      bg='green'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='orange'
      bg='orange'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='red' onClose={action('closed')} showIcon={false} />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='blue'
      bg='lightBlue'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='green'
      bg='lightGreen'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='red'
      bg='lightRed'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

export const CustomHeaderAsNode = () => (
  <Box>
    <Banner
      header={<Heading>LOUD HEADER</Heading>}
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      header={<Heading.h5>quiet header</Heading.h5>}
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

export const WithoutIconOrCloseButtonTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' showIcon={false} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' showIcon={false} />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='green' showIcon={false} />
    <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' showIcon={false} />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='red' showIcon={false} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='lightBlue' showIcon={false} />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='lightGreen' showIcon={false} />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='lightRed' showIcon={false} />
  </Box>
)

export const WithCustomIconsAndSizes = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' icon={<Star />} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' icon={<Star />} />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='green' icon={<Star />} />
    <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' icon={<Star />} />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='red' icon={<Star />} />
    <Banner textAlign='left' mb={2} p={2} text='blue' bg='lightBlue' icon={<Star />} />
    <Banner textAlign='right' mb={2} p={2} text='green' bg='lightGreen' icon={<Star />} />
    <Banner textAlign='right' mb={2} p={2} text='red' bg='lightRed' icon={<Star />} />
  </Box>
)

export const WithChildren = () => (
  <Box>
    <Banner p={2} mb={2} onClose={action('closed')}>
      <Flex>
        <Box bg='pink' p={2} width={1 / 2}>
          Pink box!
        </Box>
        <Box bg='red' p={2} width={1 / 2}>
          Red box!
        </Box>
      </Flex>
    </Banner>
    <Banner textAlign='left' mb={2} p={2} header='default' onClose={action('closed')}>
      <Text bold italic>
        I am a text component!
      </Text>
    </Banner>
  </Box>
)

export const ColorScheme = () => {
  return colorSchemeNames.map((colorScheme) => (
    <Banner
      key={colorScheme}
      textAlign='left'
      mb={2}
      p={3}
      header={colorScheme}
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
      onClose={action('closed')}
      colorScheme={colorScheme}
    />
  ))
}
