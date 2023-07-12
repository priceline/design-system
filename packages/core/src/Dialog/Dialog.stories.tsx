/* eslint-disable no-script-url */
import type { Meta, StoryObj } from '@storybook/react'
import type { IDialogProps, IGridProps } from '..'

import { Discount } from 'pcln-icons'
import React, { useState } from 'react'

import { Box, Breadcrumbs, Button, Dialog, Grid, Text } from '..'
import { argTypes, defaultArgs } from './Dialog.stories.args'

type DialogStory = StoryObj<IDialogProps>

const exampleHeaderProps: Partial<IDialogProps> = {
  headerColorScheme: 'neutralDarkOnLightest',
  headerContent: 'Hello World',
  headerIcon: <Discount />,
  headerShowCloseButton: true,
}

export const Playground: DialogStory = {
  render: (args) => <Dialog {...args} headerIcon={args.headerIcon && exampleHeaderProps.headerIcon} />,
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

const ExampleOverflowingContent = (props: IGridProps) => (
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

export const OverflowModal: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent />,
  },
}

export const OverflowContent: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' maxHeight='calc(100vh - 2 * 96px)' />,
  },
}
export const StickyHeader: DialogStory = {
  ...Playground,
  args: {
    children: <ExampleOverflowingContent overflow='auto' maxHeight={500} />,
    ...exampleHeaderProps,
    headerShowCloseButton: false,
  },
}

export const ScrimColors: DialogStory = {
  render: (args) => {
    const [scrimColor, setScrimColor] = useState<IDialogProps['scrimColor']>('dark')

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
