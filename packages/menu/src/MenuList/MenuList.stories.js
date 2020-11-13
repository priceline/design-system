import React, { useState } from 'react'
import MenuList from './MenuList'
import MenuItem from '../MenuItem'
import { Text } from 'pcln-design-system'
import { currencies } from '../../test/mocks/Menu'

export default {
  title: 'pcln-menu|MenuList',
  component: MenuList,
}

export const CurrencyMenuList = () => {
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
