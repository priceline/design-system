import { Button, Flex, Text, ThemeProvider } from '..'
import React from 'react'
import { Popover } from './Popover'
import { argTypes, defaultArgs } from './Popover.stories.args'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Popover',
  component: Popover,
  args: defaultArgs,
  argTypes: argTypes,
}

const TemplateContent = ({ ...args }) => (
  <Flex justifyContent='center' alignItems='center' width={1} my={6}>
    <Popover
      idx='basic-popover'
      onOpen={action('onOpen')}
      onClose={action('onClose')}
      renderContent={
        <Flex flexDirection='column' p={2} onClick={(e) => e.stopPropagation()}>
          <Text fontSize={1} mb={1} mt={0} fontWeight='bold'>
            Tip:
          </Text>
          <Text mt={0} mb={1} fontSize={0}>
            Use arrow keys to navigate the calendar
          </Text>
        </Flex>
      }
      overlayOpacity={0.3}
      width={350}
      p={2}
      {...args}
    >
      <Button className='IconButton' aria-label='Sample popover'>
        Open
      </Button>
    </Popover>
  </Flex>
)

const BaseTemplate = ({ children, theme, ...args }) => {
  return <TemplateContent {...args} />
}

export const _Popover = BaseTemplate.bind({})

export const OpenOnMount = BaseTemplate.bind({})
OpenOnMount.args = { openOnMount: true }

export const CustomPlacement = BaseTemplate.bind({})
CustomPlacement.args = { placement: 'bottom-end', openOnMount: true }

export const ForcedOpen = BaseTemplate.bind({})
ForcedOpen.args = { isOpen: true }

export const WithoutOverlay = BaseTemplate.bind({})
WithoutOverlay.args = { hideOverlay: true, openOnMount: true }

export const WithoutCloseButton = BaseTemplate.bind({})
WithoutCloseButton.args = { hideOverlay: true, openOnMount: true, hideCloseButton: true }

const CustomThemeTemplate = ({ children, theme, ...args }) => {
  return (
    <ThemeProvider theme={{ palette: { text: { base: 'red' } } }}>
      <TemplateContent {...args} />
    </ThemeProvider>
  )
}

export const ContentUsesContextualTheme = CustomThemeTemplate.bind({})
ContentUsesContextualTheme.args = { openOnMount: true }

const LargeContentTemplate = ({ ...args }) => (
  <Flex justifyContent='center' alignItems='center' width={1} my={6}>
    <Popover
      idx='basic-popover'
      onOpen={action('onOpen')}
      onClose={action('onClose')}
      renderContent={
        <Flex flexDirection='column' p={3} onClick={(e) => e.stopPropagation()}>
          <Text fontSize={1} mb={1} mt={1} fontWeight='bold'>
            Priceline was founded in 1997 on the back of a brilliant original idea. Airlines regularly flew
            only two-thirds full, with millions of seats empty. A million hotel rooms might go unused every
            night. We thought, what if we harnessed the Internet to drive demand, filling those planes and
            hotels? And what if customers could make an offer – name their own price - rather than pay the
            full fare?
          </Text>
        </Flex>
      }
      overlayOpacity={0.3}
      p={2}
      {...args}
    >
      <Button className='IconButton' aria-label='Sample popover'>
        Open
      </Button>
    </Popover>
  </Flex>
)

export const MaxWidth = LargeContentTemplate.bind({})
MaxWidth.args = { openOnMount: true, maxWidth: '800px' }

export const ResponsiveWidth = LargeContentTemplate.bind({})
ResponsiveWidth.args = { openOnMount: true, width: 'calc(-32px + min(640px, 100vw))' }
