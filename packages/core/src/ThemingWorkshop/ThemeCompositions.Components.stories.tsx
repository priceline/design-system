import type { Meta, StoryObj } from '@storybook/react'
import RichMediaBanner from '../RichMediaBanner'
import React from 'react'
import { richMediaBannerArgTypes } from './ThemeComposition.stories.args'
import { GenericBanner } from '../GenericBanner/GenericBanner'
import { Text } from '../Text/Text'
import { Badge as DsBadge } from '../Badge/Badge'
import { Discount } from 'pcln-icons'
import { Box } from '../Box/Box'
import { Link } from '../Link/Link'

const meta: Meta = {
  title: 'Theming Workshop/Theme Compositions/Components',
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
}

export default meta
type Story = StoryObj

export const BannerWithCallToAction: Story = {
  args: {
    icon: 'Flights',
    media: undefined,
    badge: '',
    heading: 'Heading goes here',
    paragraph: 'Caption',
    callToAction: {
      openInNewTab: true,
      url: 'https://priceline.com/?buttonLink=true',
      buttonText: 'Action',
    },
    borderHugPosition: 'none',
    justifyContent: 'space-between',
    textAlign: 'left',
    isVip: false,
    includeVipTier: false,
    hasIconBackground: true,
    backgroundColor: 'themeColor.light',
    themeColor: 'secondary',
    textColor: undefined,
    isHeadingThemeColored: false,
    isButtonThemeColored: false,
    buttonRightBreakPoint: 'xl',
    isButtonFullWidthAtBreakPoint: false,
    borderRadius: 'xl',
    boxShadowSize: 'sm',
    buttonVariation: 'link',
  },
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-22497&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  // @ts-ignore
  render: (args) => <RichMediaBanner {...richMediaBannerArgTypes} {...args} />,
}

export const BannerWithIconAndNoHeading: Story = {
  args: {
    p: 2,
    text: <Text.span>Banner text</Text.span>,
    iconLeft: <Discount color='secondary.base' />,
    color: 'secondary.light',
  },
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-22497&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  render: (args) => <GenericBanner {...args} />,
}

export const BannerWithIconAndHeading: Story = {
  args: {
    p: 2,
    heading: (
      <Text.span fontWeight='bold' color='secondary.dark' mr={1}>
        Heading
      </Text.span>
    ),
    text: <Text.span>Banner text</Text.span>,
    iconLeft: <Discount color='secondary.base' />,
    color: 'secondary.light',
  },
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-22497&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  render: (args) => <GenericBanner {...args} />,
}

export const Badge: Story = {
  args: {
    size: 'captionMedium',
    textTransform: 'capitalize',
  },
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-22497&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  render: (args) => (
    <DsBadge {...args} colorScheme='secondaryLight'>
      Badge
    </DsBadge>
  ),
}
