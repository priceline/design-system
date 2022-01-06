import React, { useState } from 'react'
import { Box, ButtonChip, Flex, Text } from 'pcln-design-system'

import Menu from './Menu'
import MenuItem from '../MenuItem'
import MenuList from '../MenuList'

import { listItems, currencies } from '../../test/mocks/Menu'
import { argTypes, defaultArgs } from './Menu.stories.args'

export default {
  title: 'pcln-menu / Menu',
  component: Menu,
  subcomponents: {
    MenuItem,
    MenuList,
  },
  args: defaultArgs,
  argTypes,
  decorators: [(Story) => <Box height='320px'>{Story()}</Box>],
  parameters: {
    docs: { description: { component: 'some component **markdown**' } },
  },
}

const MenuItems = () => {
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
const CurrencyItems = ({ currencyCode, setCurrencyCode }) =>
  currencies.map((currency, index) => {
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
  })

const Template = (args) => <Menu {...args} />

export const MultilineMenu = Template.bind({})
MultilineMenu.args = {
  children: <MenuItems />,
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
          <MenuItem key={index} selected={selected} color={color} onClick={onClick}>
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

export const TwoColumns = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu buttonText={currencyCode} size='twoColumns'>
      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />
    </Menu>
  )
}

export const Scrollable = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu buttonText={currencyCode} width={350} height={300}>
      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />
    </Menu>
  )
}

export const BreakpointColumns = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu buttonText={currencyCode} size={['singleColumn', null, null, 'twoColumns']}>
      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />
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
        <MenuItems />
      </Menu>
      <Text>Example</Text>
    </Flex>
  )
}

export const ChipAsPopoverButton = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')
  const buttonNode = <ButtonChip label={currencyCode} />

  return (
    <Menu idx='currency-selector' buttonNode={buttonNode} size='twoColumns'>
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
