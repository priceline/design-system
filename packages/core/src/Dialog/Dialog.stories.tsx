/* eslint-disable no-script-url */
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Discount } from 'pcln-icons'
import React, { useState } from 'react'
import { Box } from '../Box/Box'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Button } from '../Button/Button'
import { Grid, type GridProps } from '../Grid/Grid'
import { Text } from '../Text/Text'
import { Dialog, type DialogProps } from './Dialog'
import { argTypes, defaultArgs } from './Dialog.stories.args'
import { Flex } from '../Flex/Flex'
import { Tooltip } from '../Tooltip/Tooltip'

type DialogStory = StoryObj<DialogProps>

const exampleHeaderProps: Partial<DialogProps> = {
  headerContent: 'Hello World',
  headerIcon: <Discount />,
  headerShowCloseButton: true,
}

const exampleFooterProps: Partial<DialogProps> = {
  footerContent: <Button borderRadius='lg'>Done</Button>,
}

export const Playground: DialogStory = {
  render: (args) => (
    <Box height='1000px'>
      <Dialog {...args} headerIcon={args.headerIcon && exampleHeaderProps.headerIcon} />
    </Box>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByText('Open Dialog')
    await userEvent.click(openButton)
  },
}

export const WithHug: DialogStory = {
  ...Playground,
  args: {
    hugColor: 'primary.base',
  },
}

export const WithHeaderText: DialogStory = {
  ...Playground,
  args: {
    showCloseButton: false,
    ...exampleHeaderProps,
  },
}
export const WithHeaderContent: DialogStory = {
  ...Playground,
  args: {
    showCloseButton: false,
    headerContent: (
      <Text textStyle='paragraph'>
        <Breadcrumbs>
          <Breadcrumbs.Link href='javascript:void(0)' label='Home' />
          <Breadcrumbs.Link href='javascript:void(0)' label='Flights' />
          <Breadcrumbs.Link href='javascript:void(0)' label='Settings' />
        </Breadcrumbs>
      </Text>
    ),
    headerColorScheme: 'neutralDarkOnLightest',
    headerShowCloseButton: true,
  },
}

export const WithHeaderContentProps: DialogStory = {
  ...Playground,
  args: {
    headerContent: (
      <Flex justifyContent='space-between'>
        <Box width={40} />
        <Text textStyle='paragraph'>
          <Breadcrumbs>
            <Breadcrumbs.Link href='javascript:void(0)' label='Home' />
            <Breadcrumbs.Link href='javascript:void(0)' label='Flights' />
            <Breadcrumbs.Link href='javascript:void(0)' label='Settings' />
          </Breadcrumbs>
        </Text>
        <Box width={40} />
      </Flex>
    ),
    headerContentProps: { px: 2, py: 2, templateColumns: '1fr' },
    headerColorScheme: 'neutralDarkOnLightest',
  },
}

export const WithTooltip: DialogStory = {
  ...Playground,
  args: {
    children: (
      <Box width={400} p={2} my={2} height={200}>
        <Tooltip bottom center color='primary'>
          top center tooltip
        </Tooltip>
      </Box>
    )
  }
}


const ExampleImage = () => (
  <img
    src='https://s1.pclncdn.com/design-assets/hero/beach.jpg?opto&optimize=medium&auto=jpg&width=600&height=450&fit=crop'
    alt='an example'
    style={{ width: '100%', display: 'block' }}
  />
)

export const FullWidthImage: DialogStory = {
  ...Playground,
  args: {
    children: (
      <>
        <ExampleImage />
        <Grid p={24} gap={3}>
          <Text textStyle='heading1'>Dialog Heading</Text>
          <Text textStyle='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus quia voluptatem minima
            voluptatum dolor rem cumque odio ab accusantium deleniti vero voluptas odit numquam fugit non
            eveniet, sunt natus!
          </Text>
        </Grid>
      </>
    ),
  },
}

const ExampleOverflowingContent = (props: GridProps) => (
  <Grid p={24} gap={5} {...props}>
    {[...Array(5).keys()].map((i) => (
      <>
        <Text textStyle='heading4'>
          {i + 1}. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas voluptas, vel id
          doloribus delectus deleniti minus eius ullam vero dolorum laboriosam dolor cupiditate sequi quia
          itaque corrupti quaerat hic!
        </Text>
        <ExampleImage />
      </>
    ))}
  </Grid>
)

const ExampleOverflowingAbsolute = (props: GridProps) => {
  const [showText, setShowText] = React.useState(false)
  return (
    <Box>
      <Grid p={24} gap={5} {...props}>
        <Button onClick={() => setShowText(!showText)}>Show text overflow</Button>
      </Grid>
      {showText && (
        <Text style={{ overflow: 'visible', position: 'absolute' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas voluptas, vel id doloribus
          delectus deleniti minus eius ullam vero dolorum laboriosam dolor cupiditate sequi quia itaque
          corrupti quaerat hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas voluptas,
          vel id doloribus delectus deleniti minus eius ullam vero dolorum laboriosam dolor cupiditate sequi
          quia itaque corrupti quaerat hic!
        </Text>
      )}
    </Box>
  )
}

export const OverflowModal: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' />,
  },
}

export const OverflowOutsideContainer: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingAbsolute overflow='visible' />,
    overflowX: 'visible',
    overflowY: 'visible',
  },
}

export const OverflowContent: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' maxHeight='calc(100vh - 2 * 96px)' />,
    showScrollShadow: true,
  },
}
export const StickyHeader: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' maxHeight={500} />,
    ...exampleHeaderProps,
    headerShowCloseButton: false,
    showScrollShadow: true,
  },
}

export const StickyFooter: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' maxHeight={500} />,
    ...exampleHeaderProps,
    ...exampleFooterProps,
    headerShowCloseButton: false,
    showScrollShadow: true,
  },
}

export const ScrimColors: DialogStory = {
  render: (args) => {
    const [scrimColor, setScrimColor] = useState<DialogProps['scrimColor']>('dark')

    return (
      <Dialog {...args} headerIcon={args.headerIcon && exampleHeaderProps.headerIcon} scrimColor={scrimColor}>
        <Grid p={4} gap={4}>
          <Text textStyle='heading3' textAlign='center'>
            Set Scrim Color:
          </Text>
          <Grid gap={4} templateColumns='1fr 1fr'>
            <Button onClick={() => setScrimColor('dark')}>Dark</Button>
            <Button onClick={() => setScrimColor('medium')}>Medium</Button>
            <Button onClick={() => setScrimColor('light')}>Light</Button>
            <Button onClick={() => setScrimColor('rgba(0, 0, 0, 0.5)')}>rgba(0, 0, 0, 0.5)</Button>
          </Grid>
        </Grid>
      </Dialog>
    )
  },
}

// export const WithShadowOnScroll: DialogStory = {
//   ...Playground,
//   args: {
//     children: (
//       <ExampleOverflowingContent
//         overflow='auto'
//         maxHeight={500}
//         background={`
//           linear-gradient(#ffffff 33%, rgba(255,255,255, 0)),
//           linear-gradient(rgba(255,255,255, 0), #ffffff 66%) 0 100%,
//           radial-gradient(farthest-side at 50% 0, rgba(40,40,40, 0.5), rgba(0,0,0,0)),
//           radial-gradient(farthest-side at 50% 100%, rgba(40,40,40, 0.5), rgba(0,0,0,0)) 0 100%,
//           linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.15))
//         `}
//         backgroundRepeat='no-repeat'
//         backgroundSize='100% 40px, 100% 40px, 100% 16px, 100% 16px, 100% 1px'
//         style={{ backgroundAttachment: 'local, local, scroll, scroll, scroll' }}
//       />
//     ),
//     ...exampleHeaderProps,
//     headerShowCloseButton: false,
//   },
// }

export const SheetMode: DialogStory = {
  ...Playground,
  args: {
    sheet: true,
    size: 'full',
  },
}

export const SheetWithHeaderAndFooter: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent />,
    ...SheetMode.args,
    ...exampleHeaderProps,
    ...exampleFooterProps,
    showScrollShadow: true,
  },
}

export const Controlled: DialogStory = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <Dialog
        {...args}
        triggerNode={
          <Button onClick={() => setOpen(true)}>Click to open. Modal is {open ? 'open' : 'closed'}</Button>
        }
        open={open}
        onOpenChange={setOpen}
        {...exampleHeaderProps}
      >
        <Grid p={3} gap={3}>
          <Box>Dialog Content</Box>
          <Grid placeItems='end' autoFlow='column'>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Grid>
        </Grid>
      </Dialog>
    )
  },
}

const meta: Meta<typeof Dialog> = {
  title: 'Overlays/Dialog',
  component: Dialog,
  args: defaultArgs,
  argTypes: argTypes,
}

export default meta
