import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import { fn } from '@storybook/test'
import type { Meta } from '@storybook/react/*'

import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { theme } from '../theme/theme'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  args: {
    onToggle: fn(),
  },
  argTypes: {
    p: {
      options: theme.space,
      control: { type: 'select' },
      description: 'Padding for the content and header sections',
    },
  },
}

export default meta

const items = [
  {
    headerLabel: (
      <>
        <Text>Header Label First Item</Text>
      </>
    ),
    content: (
      <>
        <Text>I am some content</Text>
        <Text>I am some content</Text>
        <Text>I am some content</Text>
      </>
    ),
    value: 'item-1',
  },
  {
    headerLabel: (
      <>
        <Text>Second Header</Text>
      </>
    ),
    headerActions: <Button onClick={() => console.log('test')}>Test Button</Button>,
    content: (
      <>
        <Text>I am secondary content</Text>
        <Text>I am secondary content</Text>
        <Text>I am secondary content</Text>
      </>
    ),
    value: 'item-2',
  },
  {
    content: (
      <>
        <Text>No Header Label on Third Item</Text>
        <Text>Tertiary text</Text>
        <Text>Tertiary text</Text>
        <Text>Tertiary text</Text>
      </>
    ),
    value: 'item-3',
  },
]

export const Basic = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const headerLabel = canvas.getByText('Header Label First Item')
    await expect(args.onToggle).not.toHaveBeenCalled()
    await expect(canvas.queryAllByText('I am some content')).toHaveLength(3)
    await userEvent.click(headerLabel)
    setTimeout(async () => {
      await expect(canvas.queryAllByText('I am some content')).toHaveLength(0)
      await expect(args.onToggle).toHaveBeenCalled()
    }, 350)
  },
  render: (args) => <Accordion {...args} items={items} />,
}

export const Underlined = { render: (args) => <Accordion {...args} items={items} variation='underline' /> }

export const Hug = { render: (args) => <Accordion {...args} items={items} variation='hug' /> }

export const Ladder = {
  render: (args) => (
    <Accordion
      {...args}
      headerDividerColor='border.base'
      items={[
        {
          ...items[0],
          headerBg: 'success.light',
        },
        { ...items[1] },
      ]}
      variation='ladder'
    />
  ),
}

export const CustomColor = {
  render: (args) => (
    <Accordion
      {...args}
      headerDividerColor='border.base'
      items={[
        {
          ...items[0],
          headerBg: 'primary.light',
          contentBg: 'primary.light',
        },
        { ...items[1] },
      ]}
      hoverBg='background.base'
      variation='default'
    />
  ),
}

export const Card = { render: (args) => <Accordion {...args} items={items} variation='card' /> }

export const ItemStatePropCard = {
  render: (args) => <Accordion {...args} items={items} variation='card' itemsState={['item-1', 'item-2']} />,
}

export const FlatCard = { render: (args) => <Accordion {...args} items={items} variation='flatCard' /> }

export const Singular = { render: (args) => <Accordion {...args} items={items} type='single' /> }

export const ChevronClose = {
  render: (args) => <Accordion {...args} isAnimatedChevron items={items} />,
}

export const UseTextToggle = {
  render: (args) => <Accordion {...args} items={items} useTextToggle itemsState={['item-1', 'item-2']} />,
}
export const TrackStateMultiple = {
  render: (args) => {
    const [itemsState, setItemsState] = useState(['item-1', 'item-3'])
    return (
      <>
        <Text>Items Open: {itemsState.join(', ')}</Text>
        <Button
          onClick={() => {
            setItemsState([])
          }}
        >
          Collapse all items
        </Button>
        <Accordion
          {...args}
          items={items}
          itemsState={itemsState}
          isExternallyControlled
          onToggle={(newItemsState) => {
            setItemsState(newItemsState as string[])
            console.log('previousState:', itemsState, 'newState:', newItemsState)
          }}
        />
      </>
    )
  },
}

export const TrackStateSingular = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headerLabel = canvas.getByText('Header Label First Item')
    await expect(canvas.queryAllByText('I am some content')).toHaveLength(0)
    await expect(canvas.queryAllByText('I am secondary content')).toHaveLength(3)
    await expect(canvas.queryByText('Item Open: item-1')).toBeFalsy()
    await expect(canvas.queryByText('Item Open: item-2')).toBeTruthy()
    await userEvent.click(headerLabel)
    setTimeout(async () => {
      await expect(canvas.queryAllByText('I am some content')).toHaveLength(3)
      await expect(canvas.queryAllByText('I am secondary content')).toHaveLength(0)
      await expect(canvas.queryByText('Item Open: item-1')).toBeTruthy()
      await expect(canvas.queryByText('Item Open: item-2')).toBeFalsy()
    }, 350)
  },
  render: (args) => {
    const [itemsState, setItemsState] = useState('item-2')
    return (
      <>
        <Text>Item Open: {itemsState}</Text>
        <Accordion
          {...args}
          items={items}
          itemsState={itemsState}
          onToggle={(newItemsState) => {
            setItemsState(newItemsState as string)
            console.log('previousState:', itemsState, 'newState:', newItemsState)
          }}
          type='single'
        />
      </>
    )
  },
}

const itemWithFunc = {
  headerLabel: (
    <Flex justifyContent='left' alignItems='center'>
      <Text mr={3}>Header Label First Item</Text>
      <Button
        onClick={(e) => {
          e.stopPropagation()
          alert('testClick')
        }}
      >
        TestButton
      </Button>
    </Flex>
  ),
  content: <Text>Single content</Text>,
  value: 'item-4',
}

export const HeaderWithFunction = {
  render: (args) => <Accordion {...args} items={[...items, itemWithFunc]} type='single' />,
}
