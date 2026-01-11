import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Attention, Star } from 'pcln-icons'
import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Heading } from '../Heading/Heading'
import { Text } from '../Text/Text'
import { colorSchemeNames } from '../storybook/args'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  args: {
    onClose: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const AllBgs: Story = {
  render: () => (
    <Box>
      <Banner textAlign='left' mb={2} p={3} header='default' text='Secondary Text' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' bg='blue' onClose={fn()} />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='green'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='orange'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur.'
        bg='orange'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='red'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus.'
        bg='red'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='blue'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum.'
        bg='lightBlue'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='green'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
        bg='lightGreen'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='red'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
        bg='lightRed'
        onClose={fn()}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='custom'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
        bg='text'
        color='white'
        onClose={fn()}
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
  ),
}

export const AllBgsHeaderOnly: Story = {
  render: () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} header='default' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} header='blue' bg='blue' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} header='green' bg='green' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} header='orange' bg='orange' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} header='red' bg='red' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} header='blue' bg='lightBlue' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} header='green' bg='lightGreen' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} header='red' bg='lightRed' onClose={fn()} />
    </Box>
  ),
}

export const AllBgsTextOnly: Story = {
  render: () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='default' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} text='green' bg='green' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} text='red' bg='red' onClose={fn()} />
      <Banner textAlign='left' mb={2} p={2} text='Secondary Text' bg='lightBlue' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' bg='lightGreen' onClose={fn()} />
      <Banner textAlign='right' mb={2} p={2} text='Secondary Text' bg='lightRed' onClose={fn()} />
    </Box>
  ),
}

export const SansCloseButton: Story = {
  render: () => (
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
  ),
}

export const SansIcon: Story = {
  render: () => (
    <Box>
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='default'
        text='Secondary Text'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='blue'
        text='Secondary Text'
        bg='blue'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='green'
        text='Secondary Text'
        bg='green'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='orange'
        text='Secondary Text'
        bg='orange'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='red'
        text='Secondary Text'
        bg='red'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='left'
        mb={2}
        p={3}
        header='blue'
        text='Secondary Text'
        bg='lightBlue'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='green'
        text='Secondary Text'
        bg='lightGreen'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='red'
        text='Secondary Text'
        bg='lightRed'
        onClose={fn()}
        showIcon={false}
      />
    </Box>
  ),
}

export const WithoutIconOrCloseButton: Story = {
  render: () => (
    <Box>
      <Banner textAlign='right' mb={2} p={3} header='default' text='Secondary Text' showIcon={false} />
      <Banner textAlign='left' mb={2} p={3} header='blue' text='Secondary Text' bg='blue' showIcon={false} />
      <Banner
        textAlign='right'
        mb={2}
        p={3}
        header='green'
        text='Secondary Text'
        bg='green'
        showIcon={false}
      />
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
  ),
}

export const SansCloseButtonTextOnly: Story = {
  render: () => (
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
  ),
}

export const SansIconTextOnly: Story = {
  render: () => (
    <Box>
      <Banner textAlign='right' mb={2} p={2} text='default' onClose={fn()} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' bg='blue' onClose={fn()} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' bg='green' onClose={fn()} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='orange' bg='orange' onClose={fn()} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' bg='red' onClose={fn()} showIcon={false} />
      <Banner textAlign='left' mb={2} p={2} text='blue' bg='lightBlue' onClose={fn()} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='green' bg='lightGreen' onClose={fn()} showIcon={false} />
      <Banner textAlign='right' mb={2} p={2} text='red' bg='lightRed' onClose={fn()} showIcon={false} />
    </Box>
  ),
}

export const CustomHeaderAsNode: Story = {
  render: () => (
    <Box>
      <Banner
        header={<Heading>LOUD HEADER</Heading>}
        textAlign='right'
        mb={2}
        p={2}
        text='default'
        onClose={fn()}
        showIcon={false}
      />
      <Banner
        header={<Heading.h5>quiet header</Heading.h5>}
        textAlign='right'
        mb={2}
        p={2}
        text='default'
        onClose={fn()}
        showIcon={false}
      />
    </Box>
  ),
}

export const WithoutIconOrCloseButtonTextOnly: Story = {
  render: () => (
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
  ),
}

export const WithCustomIconsAndSizes: Story = {
  render: () => (
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
  ),
}

export const WithChildren: Story = {
  render: () => (
    <Box>
      <Banner p={2} mb={2} onClose={fn()}>
        <Flex>
          <Box bg='pink' p={2} width={1 / 2}>
            Pink box!
          </Box>
          <Box bg='red' p={2} width={1 / 2}>
            Red box!
          </Box>
        </Flex>
      </Banner>
      <Banner textAlign='left' mb={2} p={2} header='default' onClose={fn()}>
        <Text fontWeight='bold' fontStyle='italic'>
          I am a text component!
        </Text>
      </Banner>
    </Box>
  ),
}

export const ColorScheme: Story = {
  render: () => (
    <>
      {colorSchemeNames.map((colorScheme) => (
        <Banner
          key={colorScheme}
          textAlign='left'
          mb={2}
          p={3}
          header={colorScheme}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
          onClose={fn()}
          colorScheme={colorScheme}
        />
      ))}
    </>
  ),
}
