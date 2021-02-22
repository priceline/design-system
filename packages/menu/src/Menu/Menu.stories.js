/* eslint-disable sonarjs/no-identical-functions */

import React, { useState } from 'react'
import { Flex, Text } from 'pcln-design-system'
import Menu from './Menu'
import MenuItem from '../MenuItem'
import { listItems, currencies } from '../../test/mocks/Menu'

export default {
  title: 'pcln-menu|Menu',
  component: Menu,
}

const RenderChildren = (listItems) => {
  const [value, setValue] = useState('one')

  return listItems.map((item, index) => {
    const selected = value === item.value
    const onClick = () => setValue(item.value)
    return (
      <MenuItem key={index} selected={selected} onClick={onClick}>
        <Flex flexDirection='column' alignItems='flex-start'>
          <Text>{item.label}</Text>
          <Text fontSize={0} regular>
            Helper Text
          </Text>
        </Flex>
      </MenuItem>
    )
  })
}

export const MultilineMenu = () => {
  return (
    <Menu isOpen buttonText='Menu'>
      {RenderChildren(listItems)}
    </Menu>
  )
}

export const MultilineMenuWithColorProp = () => {
  return (
    <Menu color='promoSecondary' isOpen buttonText='Menu'>
      {RenderChildren(listItems)}
    </Menu>
  )
}

export const MultilineMenuWithCustomColors = () => {
  const [value, setValue] = useState('one')
  return (
    <Menu isOpen buttonText='Menu'>
      {listItems.map((item, index) => {
        const selected = value === item.value
        const color = selected ? 'promoPrimary' : 'text'
        const helperColor = !selected && 'text.light'
        const onClick = () => setValue(item.value)
        return (
          <MenuItem
            key={index}
            selected={selected}
            color={color}
            onClick={onClick}
          >
            <Flex flexDirection='column' alignItems='flex-start'>
              <Text>{item.label}</Text>
              <Text color={helperColor} fontSize={0} regular>
                Helper Text
              </Text>
            </Flex>
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export const Columns = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu idx='currency-selector' buttonText={currencyCode} size='twoColumns'>
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
    </Menu>
  )
}

export const Scrollable = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu buttonText={currencyCode} width={350} height={300}>
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
    </Menu>
  )
}

export const BreakpointColumns = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu
      idx='currency-selector'
      buttonText={currencyCode}
      size={['singleColumn', null, null, 'twoColumns']}
    >
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
    </Menu>
  )
}

export const ButtonProps = () => {
  return (
    <Flex flexDirection='column' color='background.darkest' width={1} p={2}>
      <Text>Pretend Header</Text>
      <Text>Example</Text>
      <Menu
        width={300}
        buttonText='Menu'
        buttonProps={{ color: 'text.lightest', size: 'large', width: 1, p: 3 }}
      >
        {RenderChildren(listItems)}
      </Menu>
      <Text>Example</Text>
    </Flex>
  )
}
