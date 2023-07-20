import { Star } from 'pcln-icons'

import { Hug, Hide, Card, Text } from '..'

import { argTypes, defaultArgs, iconMap, HugContentText } from './Hug.stories.args'
import { colorSchemeNames } from '../storybook/args'

const ChildrenCardInside = () => (
  <Card p={3} color='warning.light'>
    I&apos;m a card within a hug!
  </Card>
)
const ChildrenCardInsideCard = () => (
  <Card p={3} color='background.light'>
    <Card p={3} color='background.dark'>
      I&apos;m a card within a card within a hug!
    </Card>
  </Card>
)
const ResponsiveText = () => (
  <Text.span>
    Today&apos;s best deal! You save <Text.span fontWeight='bold'>$300</Text.span>
    <Hide as='span' xs>
      {' '}
      for your party of 2
    </Hide>
    .&nbsp;
  </Text.span>
)

export default {
  title: 'core / Hug',
  component: Hug,

  args: defaultArgs,
  argTypes,

  parameters: {
    docs: {
      description: {
        component: `Use the Hug component to surround another component with a border and a banner on top.`,
      },
    },
  },
}

const Template = ({ icon, ...rest }) => {
  const SelectedIcon = (icon && iconMap[icon]) || null

  if (icon && SelectedIcon) {
    rest.icon = <SelectedIcon />
  }

  return <Hug {...rest} />
}

export const _Hug = Template.bind({})
_Hug.args = {
  children: <ChildrenCardInside />,
}
_Hug.storyName = 'With a card inside'

export const WithAnIcon = Template.bind({})
WithAnIcon.args = {
  children: <ChildrenCardInside />,
  icon: 'ThumbsUp',
}
WithAnIcon.storyName = 'With an icon'

export const CardInACard = Template.bind({})
CardInACard.args = {
  children: <ChildrenCardInsideCard />,
}
CardInACard.storyName = 'With a card in a card'

export const PlainText = Template.bind({})
PlainText.args = {
  text: 'I am some plain text!',
  children: <ChildrenCardInside />,
}

export const ArrayOfText = Template.bind({})
ArrayOfText.args = {
  text: [<HugContentText key={1} />, <HugContentText key={2} />],
  children: <ChildrenCardInside />,
}
ArrayOfText.storyName = 'With an array of text nodes'

export const Responsive = Template.bind({})
Responsive.args = {
  text: <ResponsiveText />,
  children: <ChildrenCardInside />,
  p: 2,
  fontSize: [0, 1],
}
Responsive.storyName = 'With a responsive Hug'
Responsive.parameters = {
  viewport: { defaultViewport: 'designSystem_xs' },
}

export const ColorScheme = () => {
  return colorSchemeNames.map((colorScheme) => (
    <Hug
      text={<Text>{colorScheme}</Text>}
      icon={<Star />}
      colorScheme={colorScheme}
      key={colorScheme}
      my='3'
      boxShadowSize='xl'
    >
      <Card borderRadius='xl' p={3} color='background.lightest'>
        <Text>I&apos;m a card within a card within a hug!</Text>
      </Card>
    </Hug>
  ))
}

export const ColorSchemeWithCustomHeaderTextAndIconColors = () => {
  return (
    <Hug
      text={<Text color='error.base'>Custom Header Color</Text>}
      icon={<Star color='promoPrimary.base' />}
      colorScheme='primaryLight'
      my='3'
      boxShadowSize='xl'
    >
      <Card borderRadius='xl' p={3} color='background.lightest'>
        <Text>I&apos;m a card within a card within a hug!</Text>
      </Card>
    </Hug>
  )
}
