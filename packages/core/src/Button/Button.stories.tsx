import { ArgsTable, Primary, PRIMARY_STORY } from '@storybook/addon-docs'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IButtonProps } from '.'
import { Box, Button, ButtonChip, CloseButton, Flex, Image, Link, Text, ThemeProvider } from '..'
import { colors } from '../storybook/args'
import {
  DoDont,
  Hero,
  LiveDemo,
  Note,
  RelatedComponent,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  TableOfContents,
} from '../storybook/components'
import alignmentImage from './Button.Image.Alignment.jpeg'
import groupsImage from './Button.Image.Groups.png'
import heroImage from './Button.Image.Hero.png'
import responsiveLayoutImage from './Button.Image.ResponsiveLayout.png'

type ButtonStory = Story<IButtonProps>
export const Default: ButtonStory = (args) => <Button {...args}>Button</Button>
Default.argTypes = {
  color: {
    defaultValue: Button.defaultProps.color,
    control: 'select',
    options: colors,
  },
  variation: {
    defaultValue: Button.defaultProps.variation,
  },
  size: {
    defaultValue: Button.defaultProps.size,
    control: 'select',
  },
  disabled: {
    defaultValue: false,
    type: 'boolean',
  },
}

export const Sizes: ButtonStory = () => (
  <Box>
    <Button m={2} size='small'>
      Small
    </Button>
    <Button m={2} size='medium'>
      Large
    </Button>
    <Button m={2} size='large'>
      Medium
    </Button>
    <Button m={2} size='extraLarge'>
      Extra Large
    </Button>
  </Box>
)

export const CoreVariations: ButtonStory = () => (
  <Box>
    <Button m={2} px={100} variation='fill'>
      Fill
    </Button>
    <Button m={2} px={100} variation='outline'>
      Outline
    </Button>
  </Box>
)

export const TonalVariations: ButtonStory = () => (
  <Box bg='background.tint'>
    <Button m={2} px={100} variation='plain'>
      Fill
    </Button>
    <Button m={2} px={100} variation='white'>
      Outline
    </Button>
  </Box>
)

export const TextButtons: ButtonStory = () => (
  <Box>
    <Button m={2} variation='link'>
      Fill
    </Button>
    <Button m={2} variation='link'>
      <Text fontWeight='bold'>Outline</Text>
    </Button>
  </Box>
)

export const SemanticStyles: ButtonStory = () => (
  <Box>
    <Button m={2} color='primary'>
      Primary
    </Button>
    <Button m={2} color='secondary'>
      Secondary
    </Button>
    <Button m={2} color='warning' variation='lightFill'>
      Negative
    </Button>
  </Box>
)

export const Disabled: ButtonStory = () => (
  <Box>
    <Button m={2} disabled>
      Continue
    </Button>
    <Button m={2} disabled variation='link'>
      Button
    </Button>
  </Box>
)

export const Variations: ButtonStory = () => (
  <Box>
    <Button m={2} variation='outline'>
      Outline
    </Button>
    <Button m={2} variation='lightFill'>
      Light Fill
    </Button>
  </Box>
)

export const BorderRadius: ButtonStory = () => (
  <Box>
    <Button m={2} borderRadius='sm'>
      Small
    </Button>
    <Button m={2} borderRadius='md'>
      Medium
    </Button>
    <Button m={2} borderRadius='lg'>
      Large
    </Button>
    <Button m={2} borderRadius='xl'>
      Extra Large
    </Button>
  </Box>
)

const meta: Meta<typeof Button> = {
  title: 'Forms/Button',
  component: Button,
  parameters: {
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
              'Styles & States',
              'Partner Theming',
              'Usage',
              `Do's and Don'ts`,
              'Related Components',
            ]}
          />

          <Section heading='Overview'>
            <Text>
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
            <Text>
              Each button variation and property has set functions that provide patterns and signals to the
              user their function and the desired actions on a per page and per component basis. Because of
              this it is very important that the different variants are implemented consistently across
              products, so that they message the correct actions.
            </Text>

            <StoryHeading storyName='Sizes' storyTitle={meta.title} />
            <Text>
              Our design system supports a default button size as well as a extraLarge, large and small size.
              If a large or small button is desired, set the size property to either extraLarge, large or
              small. These sizes allow for hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <LiveDemo code={Sizes} />

            <StoryHeading storyName='Core Variations' storyTitle={meta.title} />
            <Text>
              Our core button variations use fill and subtle properties. These buttons make up the majority of
              our
            </Text>
            <LiveDemo code={CoreVariations} />

            <StoryHeading storyName='Tonal Variations' storyTitle={meta.title} />
            <Text>
              Tonal variations can be used on their own to reduce hierarchy or paired with primary buttons for
              supporting actions.
            </Text>
            <LiveDemo code={TonalVariations} />

            <StoryHeading storyName='Text Buttons' storyTitle={meta.title} />
            <Text>
              Text buttons have less visual prominence, so should be used for secondary actions or low
              emphasis actions. Used when aligning with 16px, 14px, and 12px body copy.
            </Text>
            <LiveDemo code={TextButtons} />

            <StoryHeading storyName='Semantic Styles' storyTitle={meta.title} />
            <Text>
              Text buttons have less visual prominence, so should be used for secondary actions or low
              emphasis actions. Used when aligning with 16px, 14px, and 12px body copy.
            </Text>
            <LiveDemo code={SemanticStyles} />
          </Section>

          <Section heading='Styles & States'>
            <StoryHeading storyName='Disabled' storyTitle={meta.title} />
            <Text>
              Disabled or inactive buttons are often “greyed out”, and used to communicate to the user that
              some kind of task needs to be completed by them before they can proceed. Components can inherit
              a disabled state, such as form fields, list items, cards, chips, and buttons.
            </Text>
            <LiveDemo code={Disabled} />
            <Note>
              Not all users know that an interactive design element can have disabled state. If you show an
              element but don&apos;t allow people to interact with it, they then have to interpret why they
              can&apos;t. Not everyone will be able to do this, for this reason and other issues try to avoid
              disabling buttons or actions.
            </Note>
          </Section>

          <Section heading='Partner Theming'>
            <StoryHeading storyName='Variations' storyTitle={meta.title} />
            <Text>
              Priceline Partners and white-label products can have patterns different from those used on
              Priceline. To support a consistent user experience our button supports additional variations.
            </Text>
            <LiveDemo code={Variations} />

            <StoryHeading storyName='Border Radius' storyTitle={meta.title} />
            <Text>Coming soon...</Text>
            <LiveDemo code={BorderRadius} />
          </Section>

          <Section heading='Usage'>
            <Text textStyle='subheading3' my={4}>
              Responsive Layout
            </Text>
            <Text.p>
              When scaling layouts for large screen devices, buttons can adapt their visual presentation,
              alignment, and arrangement to fit different contexts and user needs.
            </Text.p>
            <Text.p>
              The size and placement of buttons can change as parent containers, such as cards, adapt for
              larger screens.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={responsiveLayoutImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Alignment
            </Text>
            <Text.p>
              Alignment indicates whether the button aligns left, right or full width in a window, page,
              container, or component. What makes buttons different than most components is that their
              alignment can be independent, aligned with content, fit and fill containers.
            </Text.p>
            <Text.p>
              As a general rule actions follow a similar rule as text, aligning to the left side on pages and
              components. When users are progressing through a series of steps or action required modals, the
              primary action traditionally sits at the bottom right. Buttons within components such as
              notifications, search fields, and data tables are also right-aligned. However there are times
              when the button In some cases a button group may span the entire width of a window or container.
            </Text.p>
            <Text.p>Typical nested button locations include:</Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={alignmentImage} />
            </Box>

            <Text textStyle='subheading3' my={4}>
              Button Groups
            </Text>
            <Text.p>
              Button Groups Button groups are a design pattern used when presenting users with multiple call
              to actions with hierarchical emphasis or of equal value. Understanding the correct combinations
              of hierarchy and size when displaying groups of buttons helps to prevent the user from feeling
              overwhelm and confuse.
            </Text.p>
            <Text.p>
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

            <DoDont
              doExample={
                <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
                  <Button variation='subtle'>Visit Help Center</Button>
                  <Button>Sign In</Button>
                </Box>
              }
              dontExample={
                <Box>
                  <Button variation='subtle' mr={2}>
                    Visit Help Center
                  </Button>
                  <Button>Sign In</Button>
                </Box>
              }
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
