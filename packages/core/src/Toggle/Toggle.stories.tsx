/* eslint-disable react/no-unescaped-entities */
import { ArgsTable, PRIMARY_STORY, Primary, Story } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Check as CheckIcon, Close as CloseIcon } from 'pcln-icons'
import React, { useState } from 'react'
import type { IToggleProps } from '..'
import {
  Box,
  Button,
  Checkbox,
  ChoiceChip,
  DoDont,
  Flex,
  Hero,
  Image,
  Label,
  Radio,
  RelatedComponent,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  StoryStage,
  TableOfContents,
  Text,
  ThemeProvider,
  Toggle,
} from '..'

import { toggleArgTypes } from './Toggle.stories.args'

import { linkTo } from '@storybook/addon-links'
import alignmentImage from './Toggle.Image.Alignment.png'
import heroImage from './Toggle.Image.Hero.png'
import statesImage from './Toggle.Image.States.png'
import usageImage from './Toggle.Image.Usage.png'

type ToggleStory = StoryObj<IToggleProps>

export const Playground: ToggleStory = {
  render: (args) => {
    const [isOn, setIsOn] = useState(false)
    const onToggle = () => setIsOn(!isOn)

    return <Toggle isOn={isOn} onToggle={onToggle} {...args} />
  },
  argTypes: toggleArgTypes,
}

export const Sizes: ToggleStory = {
  render: () => {
    const [isOn, setIsOn] = useState(false)
    const onToggle = () => setIsOn(!isOn)

    return (
      <StoryStage display='flex'>
        <Toggle isOn={isOn} onToggle={onToggle} />
        <Toggle isOn={isOn} onToggle={onToggle} height={16} />
      </StoryStage>
    )
  },
  argTypes: toggleArgTypes,
}

export const WithIcon: ToggleStory = {
  render: () => {
    const [isOn, setIsOn] = useState(false)
    const onToggle = () => setIsOn(!isOn)
    const Icon = isOn ? CheckIcon : CloseIcon

    return <Toggle isOn={isOn} onToggle={onToggle} icon={<Icon p={1} />} />
  },
  argTypes: toggleArgTypes,
}

const meta: Meta<typeof Toggle> = {
  title: 'Actions/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Toggle' img={heroImage}>
            A toggle allows users to independently control binary options (a single state that is either on or
            off), such as a setting. When a toggle is interacted with, it should take immediate effect and its
            appearance should clearly indicate when it's in the activated or deactivated state.
          </Hero>

          <TableOfContents
            links={['Overview', 'Props', 'States', 'Examples', 'Usage', 'Related Components']}
          />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              A toggle allows users to independently control binary options (a single state that is either on
              or off), such as a setting. When a toggle is interacted with, it should take immediate effect
              and and its appearance should indicate whether it's activated or deactivated.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>

          <Section heading='States'>
            <Flex my={4} borderRadius='xl' bg='primary.light'>
              <Image src={statesImage} />
            </Flex>
          </Section>

          <Section heading='Examples'>
            <StoryHeading storyName='Sizes' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Toggles support two sizes, <code>base</code> and <code>small</code>. These sizes allow for
              hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <Story name='Sizes' />

            <StoryHeading storyName='WithIcon' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Toggles support two sizes, <code>base</code> and <code>small</code>. These sizes allow for
              hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <Story name='With Icon' />
          </Section>

          <Section heading='Usage'>
            <Text.p textStyle='paragraph'>
              Toggles can contain an optional icon that can be used to visually emphasize the selected state.
              The icon's meaning should clearly indicate to help the user understand whether the toggle is
              switched on or off.
            </Text.p>
            <Box my={3} borderRadius='xl' bg='primary.light'>
              <Image src={usageImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Alignment
            </Text>
            <Text.p textStyle='paragraph'>
              Ensure toggles are always aligned consistently when on top of one another, or side by side.
            </Text.p>
            <Box my={3} borderRadius='xl' bg='primary.light'>
              <Image src={alignmentImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Do's and Don'ts
            </Text>
            <DoDont
              doExample={
                <Flex alignItems='center'>
                  <Label mr={2}>Savings Mode</Label>
                  <Toggle />
                </Flex>
              }
              doText='have a toggle with context or an inline label (short and direct) to describe the option that the toggle controls'
              dontExample={<Toggle />}
              dontText='have a toggle on its own without any context or an inline label that leaves the user wondering what it controls'
            />
            <DoDont
              doExample={
                <Flex flexDirection='column' style={{ gap: 8 }}>
                  <Flex alignItems='center'>
                    <Label mr={2}>Allow Text Notifications</Label>
                    <Toggle isOn />
                  </Flex>
                  <Flex alignItems='center'>
                    <Label mr={2}>Allow Marketing Emails</Label>
                    <Toggle />
                  </Flex>
                </Flex>
              }
              doText='use toggle to control a binary option (such as on/off or true/false) that can be independently controlled'
              dontExample={
                <Flex alignItems='center'>
                  <Label mr={2}>Allow Text Emails</Label>
                  <Toggle />
                  <Label ml={2} nowrap>
                    Allow Marketing Emails
                  </Label>
                </Flex>
              }
              dontText='use toggle if an item has opposing options, especially those that can be independently controlled'
            />
            <DoDont
              doExample={
                <Flex alignItems='center'>
                  <Label mr={2}>Show Savings</Label>
                  <Toggle isOn />
                </Flex>
              }
              doText='use toggle to change a setting that would take immediate and noticeable effect'
              dontExample={
                <Flex alignItems='center' style={{ gap: 8 }}>
                  <Label>Show Savings</Label>
                  <Toggle isOn />
                  <Button size='small'>Apply</Button>
                </Flex>
              }
              dontText='use toggle that would require a secondary action to apply the state'
            />
            <DoDont
              doExample={<></>}
              dontExample={
                <Flex flexDirection='column' style={{ gap: 8 }}>
                  <Label nowrap>
                    <Checkbox checked />
                    Family Friendly
                  </Label>
                  <Label nowrap>
                    <Checkbox checked={false} />
                    Pet Friendly
                  </Label>
                  <Flex alignItems='center' style={{ gap: 8 }}>
                    <Label>Apply</Label>
                    <Toggle />
                  </Flex>
                </Flex>
              }
              dontText='use toggle that would require a secondary action to apply the state'
            />
          </Section>

          <Section heading='Related Components'>
            <RelatedComponentContainer>
              <RelatedComponent name='Radio' onClick={linkTo('Radio')}>
                <Box>
                  <Label nowrap>
                    <Radio />
                    Radio
                  </Label>
                </Box>
              </RelatedComponent>
              <RelatedComponent name='ChoiceChip' onClick={linkTo('core-chip-ChoiceChip')}>
                <ChoiceChip>Choice Chip</ChoiceChip>
              </RelatedComponent>
              <RelatedComponent name='CheckBox' onClick={linkTo('Checkbox')}>
                <Box>
                  <Label nowrap>
                    <Checkbox />
                    Checkbox
                  </Label>
                </Box>
              </RelatedComponent>
            </RelatedComponentContainer>
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
