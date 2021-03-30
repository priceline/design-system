import React, { useState } from 'react'
import { Text } from 'pcln-design-system'

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
        <Text regular width={32} textAlign='center' mr={3}>
          {currency.symbol}
        </Text>
        <Text regular>{currency.label}</Text>
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
            <Text regular width={32} textAlign='center' mr={3}>
              {currency.symbol}
            </Text>
            <Text regular>{currency.label}</Text>
          </MenuItem>
        )
      })}
    </MenuList>
  )
}
