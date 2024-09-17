import type { Meta, StoryObj } from '@storybook/react'
import RichMediaBanner from '../RichMediaBanner'
import React from 'react'
import { richMediaBannerArgTypes } from './ThemeComposition.stories.args'
import { Box } from '../Box/Box'
import { Link } from '../Link/Link'

const meta: Meta = {
  title: 'Theming Workshop/Theme Compositions/Component Compositions',
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-21785&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj

export const BannerWithCallToActionAndBadge: Story = {
  args: {
    icon: 'Flights',
    media: undefined,
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
    badge: 'Badge',
  },
  // @ts-ignore
  render: (args) => <RichMediaBanner {...richMediaBannerArgTypes} {...args} />,
}
