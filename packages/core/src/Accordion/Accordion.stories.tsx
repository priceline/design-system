import React, { useState } from 'react'
import { Accordion } from '.'
import { Flex, Button, Text } from '..'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    onToggle: { action: true },
  },
}

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
    expect(args.onToggle).not.toHaveBeenCalled()
    expect(canvas.queryAllByText('I am some content')).toHaveLength(3)
    await userEvent.click(headerLabel)
    setTimeout(() => {
      expect(canvas.queryAllByText('I am some content')).toHaveLength(0)
      expect(args.onToggle).toHaveBeenCalled()
    }, 350)
  },
  render: (args) => <Accordion {...args} items={items} />,
}

export const Underlined = { render: (args) => <Accordion {...args} items={items} variation='underline' /> }

export const Hug = { render: (args) => <Accordion {...args} items={items} variation='hug' /> }

export const Ladder = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const accordionRoot = canvas.getByTestId('accordion-root')
    const firstStyledItem = canvas.getByTestId('styled-item-item-1')
    expect(accordionRoot).toHaveStyle(`
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.03) 0px -1px 0px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px, rgba(0, 0, 0, 0.16) 0px 2px 1px -1px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;
  `)
    expect(firstStyledItem).toHaveStyle(`
      background-color: rgb(236, 247, 236);
      border-radius: 0px;
      margin-bottom: 0px;
  `)
  },
  render: (args) => (
    <Accordion
      {...args}
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
export const Card = { render: (args) => <Accordion {...args} items={items} variation='card' /> }

export const FlatCard = { render: (args) => <Accordion {...args} items={items} variation='flatCard' /> }

export const Singular = { render: (args) => <Accordion {...args} items={items} type='single' /> }

export const ChevronClose = {
  render: (args) => <Accordion {...args} isAnimatedChevron items={items} />,
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
          useValueState
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
    expect(canvas.queryAllByText('I am some content')).toHaveLength(0)
    expect(canvas.queryAllByText('I am secondary content')).toHaveLength(3)
    expect(canvas.queryByText('Item Open: item-1')).toBeFalsy()
    expect(canvas.queryByText('Item Open: item-2')).toBeTruthy()
    await userEvent.click(headerLabel)
    setTimeout(() => {
      expect(canvas.queryAllByText('I am some content')).toHaveLength(3)
      expect(canvas.queryAllByText('I am secondary content')).toHaveLength(0)
      expect(canvas.queryByText('Item Open: item-1')).toBeTruthy()
      expect(canvas.queryByText('Item Open: item-2')).toBeFalsy()
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
