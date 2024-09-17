export const richMediaBannerArgTypes = {
  icon: {
    name: 'Icon',
    type: { name: 'string', required: false },
    description: 'The icon name',
    options: [
      'none',
      'Ac',
      'Attention',
      'Beach',
      'Discount',
      'Dollar',
      'DollarCircle',
      'Information',
      'InformationOutline',
      'Success',
      'SuccessOutline',
      'Warning',
      'WarningOutline',
    ],
    control: { type: 'select' },
  },

  media: {
    name: 'Image URL',
    type: { name: 'string', required: false },
    description: 'Displays a small image on the left side of the banner',
  },

  badge: {
    name: 'Badge',
    type: { name: 'string', required: false },
    description: 'The text above the heading in plain text form',
  },

  heading: {
    name: 'Heading',
    description: 'The heading of the banner in rich text form',
  },

  paragraph: {
    name: 'Paragraph',
    description: 'The paragraph or subtext of the banner in rich text form',
  },

  callToAction: {
    name: 'Button',
    type: { name: 'node', required: false },
    description: 'The call to action of the banner',
  },

  borderHugPosition: {
    name: 'Border Hug Position',
    type: { name: 'string', required: false },
    description: 'Controls the display and position of the block border',
    options: ['none', 'top', 'left'],
    control: { type: 'select' },
  },

  justifyContent: {
    name: 'Justify Content',
    type: { name: 'string', required: false },
    description: "Controls the position of the text relative to the banner's background",
    options: ['space-between', 'center', 'left', 'right'],
    control: { type: 'radio' },
  },

  textAlign: {
    name: 'Text Align',
    type: { name: 'string', required: false },
    description: 'Controls the alignment of the text',
    options: ['left', 'center', 'right'],
    control: { type: 'radio' },
  },

  isVip: {
    name: 'Is Vip?',
    type: { name: 'boolean', required: false },
    description: 'Enables VIP styling',
  },

  includeVipTier: {
    name: 'Include Vip Tier',
    type: { name: 'boolean', required: false },
    description: 'For VIP banners, display the tier (or "member" if no tier) text under the VIP icon',
  },

  hasIconBackground: {
    name: 'Has Icon Background',
    type: { name: 'boolean', required: false },
    description: 'Gives the icon a circle background with color contrast.',
  },

  themeColor: {
    name: 'Theme Color',
    type: { name: 'string', required: false },
    description: 'Color of the icon, border hug, and call to action',
    options: ['primary', 'secondary', 'highlight', 'alert', 'promoPrimary', 'promoSecondary'],
    control: { type: 'select' },
  },

  backgroundColor: {
    name: 'Background Color',
    type: { name: 'string', required: false },
    description: 'Color of the banner background, can be based on what is selected for theme color',
    options: [
      'themeColor.light',
      'themeColor.tint',
      'themeColor.shade',
      'themeColor.dark',
      'background.lightest',
      'background.light',
      'background.shade',
      'background.darkest',
    ],
    control: { type: 'select' },
  },

  textColor: {
    name: 'Text Color',
    type: { name: 'string', required: false },
    description: 'Color of the text, detects theme color and changes to lightest automatically',
    options: ['text.lightest', 'text.light', 'text.base', 'text.dark', 'text.heading'],
    control: { type: 'radio' },
  },

  isHeadingThemeColored: {
    name: 'Is Heading Theme Colored?',
    type: { name: 'boolean', required: false },
    description: 'Changes the heading text color to be the .base of the theme color',
  },

  isButtonThemeColored: {
    name: 'Is Button Theme Colored?',
    type: { name: 'boolean', required: false },
    description: 'Changes the button color to be the .base of the theme color',
  },

  borderRadius: {
    name: 'Banner Border Radius',
    type: { name: 'string', required: false },
    description:
      'Controls the radius of the banner borders, elements within the banner will have defaults when this is set',
    options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    control: { type: 'select' },
  },

  boxShadowSize: {
    name: 'Box Shadow Size',
    type: { name: 'string', required: false },
    description: 'Controls the size of the optional box shadow',
    options: ['none', 'sm', 'md', 'lg', 'xl'],
    control: { type: 'select' },
  },

  buttonRightBreakPoint: {
    name: 'Button Right Break Point',
    type: { name: 'string', required: false },
    description: 'Controls when the button goes from the right side of the banner to underneath the text',
    options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    control: { type: 'select' },
  },

  isButtonFullWidthAtBreakPoint: {
    name: 'Is Button Full Width At Break Point',
    type: { name: 'boolean', required: false },
    description:
      'Sets the button to the full width of the banner based on the value of "Button Right Break Point"',
  },
}
