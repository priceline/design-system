/* eslint-disable react/no-unescaped-entities */

import type { Meta, StoryObj } from '@storybook/react'
import type { IButtonProps, Sizes } from './Button'

import { ArgsTable, Primary, PRIMARY_STORY } from '@storybook/addon-docs'
import { Calendar, Check, ChevronLeft, ChevronRight, Search, User } from 'pcln-icons'
import React from 'react'

import { Box, Button, ButtonChip, CloseButton, Flex, Image, Link, Text, ThemeProvider } from '..'
import {
  DocTable,
  DoDont,
  Hero,
  // LiveDemo,
  Note,
  RelatedComponent,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  StoryStage,
  TableOfContents,
} from '../DocsUtils'
import { colors, shadows } from '../storybook/args'

import alignmentImage from './Button.Image.Alignment.png'
import groupsImage from './Button.Image.Groups.png'
import heroImage from './Button.Image.Hero.png'
import responsiveLayoutImage from './Button.Image.ResponsiveLayout.png'
import buttonStates from './Button.Image.States.png'

type ButtonStory = StoryObj<IButtonProps>

const sizeOptions = ['small', 'medium', 'large', 'extraLarge']

export const Playground: ButtonStory = {
  render: (args) => <Button {...args}>Button</Button>,
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      defaultValue: Button.defaultProps.color,
    },
    size: {
      control: 'select',
      options: sizeOptions,
      defaultValue: Button.defaultProps.size,
    },
    variation: {
      control: 'select',
      options: ['fill', 'input', 'lightFill', 'link', 'outline', 'plain', 'subtle', 'white'],
      defaultValue: Button.defaultProps.variation,
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    boxShadowSize: {
      control: 'select',
      options: shadows,
    },
  },
}

export const Size: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
      <Button size='extraLarge'>Extra Large</Button>
    </StoryStage>
  ),
}

export const PrimaryVariations: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button width={100} variation='fill'>
        Fill
      </Button>
      <Button width={100} variation='subtle'>
        Subtle
      </Button>
    </StoryStage>
  ),
}

export const TonalVariations: ButtonStory = {
  render: () => (
    <StoryStage borderRadius='md' bg='background.tint'>
      <Button width={100} variation='plain'>
        Plain
      </Button>
      <Button width={100} variation='white'>
        White
      </Button>
    </StoryStage>
  ),
}

export const TextButtons: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button variation='link'>Button</Button>
      <Button variation='link'>
        <Text fontWeight='bold'>Button</Text>
      </Button>
    </StoryStage>
  ),
}

export const AdditionalVariations: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button variation='outline'>Outline</Button>
      <Button variation='lightFill'>Light Fill</Button>
    </StoryStage>
  ),
}

export const Disabled: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button disabled>Continue</Button>
      <Button disabled variation='link'>
        Button
      </Button>
    </StoryStage>
  ),
}

export const SemanticStyles: ButtonStory = {
  render: () => (
    <StoryStage>
      <Button color='primary'>Search Hotels</Button>
      <Button color='primary' variation='subtle'>
        Search Hotels
      </Button>
      <Button color='secondary'>Choose Room</Button>
      <Button color='secondary' variation='subtle'>
        Choose Room
      </Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='warning'>Cancel</Button>
      <Button color='warning' variation='subtle'>
        Cancel
      </Button>
    </StoryStage>
  ),
}

export const IconButtons: ButtonStory = {
  render: () => (
    <>
      {sizeOptions.map((size: Sizes) => (
        <StoryStage key={size}>
          <Button size={size} IconLeft={User}>
            Sign In
          </Button>
          <Button size={size} IconRight={Calendar}>
            Select Dates
          </Button>
          <Button size={size} IconLeft={Search} IconRight={Check}>
            Bookends
          </Button>
          <Button size={size} IconLeft={ChevronLeft} />
          <Button size={size} IconLeft={ChevronRight} />
          <Button size={size} IconLeft={User} />
          <Button size={size} variation='link' IconLeft={User}>
            Link Button Text
          </Button>
        </StoryStage>
      ))}
    </>
  ),
}

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1lLCo0ZnO1RyMDEbnnS0by/Web-Design-System?type=design&node-id=131-21304&t=wTmhDg2MwlPA9PGf-4',
    },

    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Button' img={heroImage}>
            Buttons allow users to trigger an action or event with a single click. For example, you can use a
            button for allowing the functionality of submitting a form, opening a dialog, canceling an action,
            or performing a delete operation.
          </Hero>

          <TableOfContents
            links={[
              'Overview',
              'Props',
              'Examples & Variations',
              'States',
              'Theming',
              'Usage',
              `Do's and Don'ts`,
              'Related Components',
            ]}
          />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              Buttons allow users to trigger an action or event with a single click. For example, you can use
              a button for allowing the functionality of submitting a form, opening a dialog, canceling an
              action, or performing a delete operation.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>

          <Section heading='Examples & Variations'>
            <Text textStyle='paragraph'>
              Each button variation and property has set functions that provide patterns and signals to the
              user their function and the desired actions on a per page and per component basis. Because of
              this it is very important that the different variants are implemented consistently across
              products, so that they message the correct actions.
            </Text>

            <StoryHeading storyName='Size' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Our design system supports a default button size as well as a extraLarge, large and small size.
              If a large or small button is desired, set the size property to either extraLarge, large or
              small. These sizes allow for hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <DocTable
              columns={[
                { field: 'size', heading: 'Size' },
                { field: 'useCase', heading: 'Use Case' },
              ]}
              data={[
                {
                  size: 'Small',
                  useCase:
                    'Use when there is not enough space for the default and in responsive patterns on mobile breakpoints.',
                },
                { size: 'Medium (default)', useCase: 'This is the most commonly used button size.' },
                { size: 'Large', useCase: 'Use when buttons are paired with input fields.' },
                {
                  size: 'Extra Large',
                  useCase: 'Use on search forms and marketing and promotion hero modules.',
                },
              ]}
            />
            {/* <LiveDemo code={Size} /> */}

            <StoryHeading storyName='Primary Variations' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Our core button variations use fill and subtle properties. These variations make up the majority
              of our button styles outside of the conversion funnel.
            </Text>
            <DocTable
              columns={[
                { field: 'variation', heading: 'Variation' },
                { field: 'useCase', heading: 'Use Case' },
              ]}
              data={[
                {
                  variation: 'Fill',
                  useCase:
                    'The filled button is used for high emphasis, the primary, most important, or most common actions on a screen. The filled button’s contrasting surface color makes it the most prominent button.',
                },
                {
                  variation: 'Subtle',
                  useCase:
                    'Subtle button are best used for supporting actions of medium emphasis. Secondary buttons are also suited for prodiving clear actions on screens with multiple button with various levels of emphasis or to provide low-level emphasis over UI elements, and text links or buttons.',
                },
              ]}
            />
            {/* <LiveDemo code={PrimaryVariations} /> */}

            <StoryHeading storyName='Tonal Variations' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              In addition to Fill and Subtle, Plain and White variations can be used on their own to reduce
              emphasis, provide contrast, or paired with primary buttons for supporting actions.
            </Text>
            <DocTable
              columns={[
                { field: 'variation', heading: 'Variation' },
                { field: 'useCase', heading: 'Use Case' },
              ]}
              data={[
                {
                  variation: 'Plain',
                  useCase:
                    'Plain button variation has a transparent background but has the same height and width poperties as the fill button.',
                },
                {
                  variation: 'White',
                  useCase:
                    'White buttons are used over images and in place of fill and subtle buttons when color contrast is needed.',
                },
              ]}
            />
            {/* <LiveDemo code={TonalVariations} /> */}

            <StoryHeading storyName='Text Buttons' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Text buttons have less visual prominence, so should be used for secondary actions or low
              emphasis actions. Used when aligning with 16px, 14px, and 12px body copy.
            </Text>
            {/* <LiveDemo code={TextButtons} /> */}

            <StoryHeading storyName='Additional Variations' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Although rarely used on Priceline, we understand these are popular variations used in interface
              design.
            </Text>
            {/* <LiveDemo code={AdditionalVariations} /> */}
          </Section>

          <Section heading='States'>
            <Text textStyle='paragraph'>
              States are visual representations used to communicate the status of a component or interactive
              element.
            </Text>
            <Flex my={4} borderRadius='xl' bg='primary.light'>
              <Image src={buttonStates} />
            </Flex>

            <StoryHeading storyName='Disabled' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Disabled or inactive buttons are often “greyed out”, and used to communicate to the user that
              some kind of task needs to be completed by them before they can proceed. Components can inherit
              a disabled state, such as form fields, list items, cards, chips, and buttons.
            </Text>
            {/* <LiveDemo code={Disabled} /> */}
            <Note>
              Not all users know that an interactive design element can have disabled state. If you show an
              element but don&apos;t allow people to interact with it, they then have to interpret why they
              can&apos;t. Not everyone will be able to do this, for this reason and other issues try to avoid
              disabling buttons or actions.
            </Note>
          </Section>

          <Section heading='Theming'>
            <StoryHeading storyName='Semantic Styles' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Semantic styles combine variation props and colors from our semantic palette, which defines
              colors based on how they are used. Each and every semantic color points to a color from the
              palette.
            </Text>
            {/* <LiveDemo code={SemanticStyles} /> */}
          </Section>

          <Section heading='Usage'>
            <Text textStyle='subheading3' my={4}>
              Responsive Layout
            </Text>
            <Text.p textStyle='paragraph'>
              When scaling layouts for large screen devices, buttons can adapt their visual presentation,
              alignment, and arrangement to fit different contexts and user needs.
            </Text.p>
            <Text.p textStyle='paragraph'>
              The size and placement of buttons can change as parent containers, such as cards, adapt for
              larger screens.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={responsiveLayoutImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Alignment
            </Text>
            <Text.p textStyle='paragraph'>
              Alignment indicates whether the button aligns left, right or full width in a window, page,
              container, or component. What makes buttons different than most components is that their
              alignment can be independent, aligned with content, fit and fill containers.
            </Text.p>
            <Text.p textStyle='paragraph'>
              As a general rule actions follow a similar rule as text, aligning to the left side on pages and
              components. When users are progressing through a series of steps or action required modals, the
              primary action traditionally sits at the bottom right. Buttons within components such as
              notifications, search fields, and data tables are also right-aligned. However there are times
              when the button In some cases a button group may span the entire width of a window or container.
            </Text.p>
            <Text.p textStyle='paragraph'>Typical nested button locations include:</Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={alignmentImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Button Groups
            </Text>
            <Text.p textStyle='paragraph'>
              Button Groups Button groups are a design pattern used when presenting users with multiple call
              to actions with hierarchical emphasis or of equal value. Understanding the correct combinations
              of hierarchy and size when displaying groups of buttons helps to prevent the user from feeling
              overwhelm and confuse.
            </Text.p>
            <Text.p textStyle='paragraph'>
              As a general rule button groups should be limited to only medium, small, and text buttons.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={groupsImage} />
            </Box>
          </Section>

          <Section heading={`Do's and Don'ts`}>
            <DoDont
              doExample={<Button>Search Hotels</Button>}
              doText='use 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces.'
              dontExample={<Button>Start Saving!</Button>}
              dontText='use punctuation marks such as periods or exclamation points.'
            />

            <DoDont
              doExample={<Button>Go</Button>}
              doText='allow a buttons width to use default settings to dynamically set to fit its label text.'
              dontExample={
                <Button width={100} style={{ whiteSpace: 'nowrap' }}>
                  Search Hotels
                </Button>
              }
              dontText='make the width of the button narrower than its label text.'
            />

            <DoDont
              doExample={<Button width='100%'>Search Rental Cars</Button>}
              doText='allow a buttons to fill the width of a responsive layout, container, and component.'
              dontExample={<Button width={150}>Search Rental Cars</Button>}
              dontText='make the width of the button narrower than its label text.'
            />

            <Text py={3} textStyle='subheading3'>
              Do's and Don't For Button Groups
            </Text>

            <DoDont
              doExample={
                <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
                  <Button variation='subtle'>Visit Help Center</Button>
                  <Button>Sign In</Button>
                </Box>
              }
              doText='use min widths when available to allow the primary action to display at the same width as the secondary action.'
              dontExample={
                <Box>
                  <Button variation='subtle' mr={2}>
                    Visit Help Center
                  </Button>
                  <Button>Sign In</Button>
                </Box>
              }
              dontText='your secondary action should be short and not much longer than the primary action. This is especially important when space does not allow for each action to display at the same width.'
            />

            <DoDont
              doExample={
                <Flex width='100%' flexDirection='column' style={{ gap: '.5rem' }}>
                  <Button variation='subtle'>Add Rental Car</Button>
                  <Button>Continue to Checkout</Button>
                </Flex>
              }
              dontExample={
                <Box textAlign='center'>
                  <Button>Add Rental Car</Button>
                  <br />
                  <Button variation='link'>No thanks, I don&apos;t need a rental car</Button>
                </Box>
              }
            />

            <DoDont
              doExample={
                <Flex style={{ gap: 8 }}>
                  <Button variation='lightFill'>Cancel</Button>
                  <Button variation='lightFill' color='warning'>
                    Delete
                  </Button>
                </Flex>
              }
              dontExample={
                <Flex style={{ gap: 8 }}>
                  <Button width={200} borderRadius='lg' variation='lightFill'>
                    Add Flight
                  </Button>
                  <Button width={200} borderRadius='lg'>
                    Search Hotels
                  </Button>
                </Flex>
              }
            />

            <DoDont
              doExample={
                <Flex style={{ gap: 8 }}>
                  <Button variation='lightFill'>Yes</Button>
                  <Button variation='lightFill' color='warning'>
                    No
                  </Button>
                </Flex>
              }
              dontExample={
                <Flex style={{ gap: 8 }}>
                  <Button color='secondary'>Yes</Button>
                  <Button variation='lightFill' color='warning'>
                    No
                  </Button>
                </Flex>
              }
            />
          </Section>

          <Section heading='Related Components'>
            <RelatedComponentContainer>
              <RelatedComponent name='ButtonChip' linkTo='core-chip-ButtonChip'>
                <ButtonChip>Button Chip</ButtonChip>
              </RelatedComponent>
              <RelatedComponent name='Link'>
                <Link>Link</Link>
              </RelatedComponent>
              <RelatedComponent name='CloseButton'>
                <CloseButton />
              </RelatedComponent>
            </RelatedComponentContainer>
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
