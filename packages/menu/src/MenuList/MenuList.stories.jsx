import React, { useState } from 'react'
import { Text } from 'pcln-design-system'
import { fireEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import MenuList from './MenuList'
import MenuItem from '../MenuItem'

import { currencies } from '../../test/mocks/Menu'
import { argTypes, defaultArgs } from './MenuList.stories.args'

export default {
  title: 'pcln-menu / MenuList',
  component: MenuList,
  subcomponents: {
    MenuItem,
  },
  args: defaultArgs,
  argTypes,
  parameters: {
    docs: { description: { component: 'some component **markdown**' } },
  },
}

const CurrencyItems = ({ currencyCode }) =>
  currencies.map((currency, index) => {
    const selected = currencyCode === currency.code
    return (
      <MenuItem key={index} selected={selected}>
        <Text textStyle='paragraphBold' mr={3} width={32}>
          {currency.symbol}
        </Text>
        <Text textStyle='paragraph'>{currency.label}</Text>
      </MenuItem>
    )
  })

const Template = (args) => <MenuList {...args} />

export const CurrencyMenuListWithArgs = Template.bind({})
CurrencyMenuListWithArgs.args = {
  children: <CurrencyItems />,
}

export const CurrencyMenuListWithSelection = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <MenuList>
      {currencies.map((currency, index) => {
        const selected = currencyCode === currency.code
        const onClick = () => setCurrencyCode(currency.code)
        return (
          <MenuItem key={index} selected={selected} onClick={onClick}>
            <Text textStyle='paragraphBold' mr={3} width={32}>
              {currency.symbol}
            </Text>
            <Text textStyle='paragraph'>{currency.label}</Text>
          </MenuItem>
        )
      })}
    </MenuList>
  )
}

export const KeyboardNavigation = () => (
  <MenuList>
    <MenuItem selected>Item One</MenuItem>
    <MenuItem>Item Two</MenuItem>
  </MenuList>
)
KeyboardNavigation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await fireEvent.keyDown(canvas.getByRole('listbox'), {
    key: 'ArrowUp',
    code: 'ArrowUp',
  })
  expect(canvas.getByText('Item One').closest('button')).toHaveFocus()
  await fireEvent.keyDown(canvas.getByRole('listbox'), {
    key: 'ArrowRight',
    code: 'ArrowRight',
  })
  expect(canvas.getByText('Item One').closest('button')).toHaveFocus()
  await fireEvent.keyDown(canvas.getByRole('listbox'), {
    key: 'ArrowDown',
    code: 'ArrowDown',
  })
  expect(canvas.getByText('Item Two').closest('button')).toHaveFocus()
  await fireEvent.keyDown(canvas.getByRole('listbox'), {
    key: 'ArrowUp',
    code: 'ArrowUp',
  })
}
