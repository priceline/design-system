import React, { useState } from 'react'
import { argTypes, defaultArgs } from './Menu.stories.args'
import { Bed as BedIcon } from 'pcln-icons'
import { Box, ButtonChip, Divider, Flex, Link, Text } from 'pcln-design-system'
import { listItems, currencies } from '../../test/mocks/Menu'
import Menu from './Menu'
import MenuItem from '../MenuItem'
import MenuList from '../MenuList'

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
          <Text textStyle='paragraphBold'>{item.label}</Text>
          <Text textStyle='caption'>Helper Text</Text>
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
      <MenuItem
        key={index}
        selected={selected}
        onClick={onClick}
        icon={
          <Flex justifyContent='center' textStyle='paragraphBold' width={24}>
            {currency.symbol}
          </Flex>
        }
      >
        <Text textStyle='paragraph'>{currency.label}</Text>
      </MenuItem>
    )
  })

const SingleLineTemplate = (args) => {
  const [value, setValue] = useState('one')

  return (
    <Menu isOpen buttonText='Menu' width={275} {...args}>
      {listItems.map((item, index) => {
        const selected = value === item.value
        const onClick = () => setValue(item.value)
        return (
          <MenuItem key={index} onClick={onClick} selected={selected}>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Text textStyle='paragraph'>{item.label}</Text>
            </Flex>
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export const Singleline = SingleLineTemplate.bind({})

export const SinglelineWithIcon = () => {
  const [value, setValue] = useState('one')

  return (
    <Menu isOpen buttonText='Menu' width={275}>
      {listItems.map((item, index) => {
        const selected = value === item.value
        const onClick = () => setValue(item.value)
        return (
          <MenuItem icon={<BedIcon size={24} />} key={index} onClick={onClick} selected={selected}>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Text textStyle='paragraph'>{item.label}</Text>
            </Flex>
          </MenuItem>
        )
      })}
    </Menu>
  )
}

const Template = (args) => <Menu {...args} />
export const Multiline = Template.bind({})
Multiline.args = {
  children: <MenuItems />,
}

export const MultilineWithCustomColors = () => {
  const [value, setValue] = useState('one')

  return (
    <Menu isOpen buttonText='Menu' color='promoPrimary'>
      {listItems.map((item, index) => {
        const selected = value === item.value
        const onClick = () => setValue(item.value)
        return (
          <MenuItem key={index} selected={selected} onClick={onClick}>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Text textStyle='paragraph'>{item.label}</Text>
              <Text textStyle='caption' color='text.light'>
                Helper Text
              </Text>
            </Flex>
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export const MultilineWithIcon = () => {
  const [value, setValue] = useState('one')

  return (
    <Menu isOpen buttonText='Menu' width={275}>
      {listItems.map((item, index) => {
        const selected = value === item.value
        const onClick = () => setValue(item.value)
        return (
          <MenuItem icon={<BedIcon size={24} />} key={index} onClick={onClick} selected={selected}>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Text textStyle='paragraph'>{item.label}</Text>
              <Text textStyle='caption' color='text.light'>
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

export const WithSetHeightAndScrollable = () => {
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

export const UsingButtonPropsPropForStylingButtonText = () => (
  <Menu width={300} buttonText='Menu' buttonProps={{ color: 'text.base', size: 'large', width: 1, p: 3 }}>
    <MenuItems />
  </Menu>
)

export const CustomMenuWithoutMenuItems = () => {
  return (
    <Menu idx='link-dropdown' buttonText='Support' width='300px'>
      <Text p={3}>Unselectable title text</Text>
      <Divider mt={0} mb={2} />
      <Link href='https://www.priceline.com/faq' target='_blank' px={3} py={2}>
        FAQ
      </Link>
      <Link href='https://www.priceline.com/contact' target='_blank' px={3} py={2}>
        Contact
      </Link>
    </Menu>
  )
}

export const UsingButtonNodePropWithButtonChip = () => {
  const [currencyCode, setCurrencyCode] = useState('USD')

  return (
    <Menu idx='currency-selector' buttonNode={<ButtonChip label={currencyCode} />} size='twoColumns'>
      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />
    </Menu>
  )
}

export const WithCustomPlacement = SingleLineTemplate.bind({})
WithCustomPlacement.args = {
  placement: 'bottom',
}
