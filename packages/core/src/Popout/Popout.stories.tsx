import { Information as InformationIcon, Pin as PinIcon, Search as SearchIcon } from 'pcln-icons'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, FormField, getPaletteColor, Input, Label, Popout, Text } from '..'

export default {
  component: Popout,
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const PclnSearchItem = styled(Flex)`
  cursor: pointer;
  white-space: nowrap;
  &:hover,
  &:focus {
    background-color: ${getPaletteColor('primary.base')};
    color: white;
  }
`

const Wrapper = ({ children }) => <Box m={5}>{children}</Box>

export const Basic = () => {
  const triggerRef = useRef(null)
  const [value, setValue] = useState('')
  const trigger = (
    <input aria-label='x' ref={triggerRef} value={value} onChange={(e) => setValue(e.target.value)} />
  )
  const content = value && <h1>{value}</h1>

  return (
    <Wrapper>
      <Popout trigger={trigger} triggerRef={triggerRef} content={content} />
    </Wrapper>
  )
}

export const IconPopout = () => {
  const triggerRef = useRef(null)
  const trigger = (
    <Box width='fit-content' ref={triggerRef}>
      <InformationIcon color='primary' style={{ cursor: 'pointer' }} />
    </Box>
  )
  const content = <h1>This is some important information</h1>

  return (
    <Wrapper>
      <Popout trigger={trigger} triggerRef={triggerRef} content={content} closeOnTriggerRefClick />
    </Wrapper>
  )
}

export const FormFieldExample = () => {
  const triggerRef = useRef(null)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<string[]>([])

  useEffect(() => {
    setResults(search ? states.filter((x) => x.toLowerCase().startsWith(search.toLowerCase())) : [])
  }, [search])

  const trigger = (
    <FormField>
      <Label autoHide htmlFor='pclnInput'>
        Where To?
      </Label>
      <SearchIcon color='primary' size={24} />
      <Input
        id='pclnInput'
        name='pclnInput'
        value={search}
        placeholder='Where to?'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        ref={triggerRef}
      />
    </FormField>
  )
  const content = results.length > 0 && (
    <Flex flexDirection='column' mt={2} style={{ maxHeight: 300, overflow: 'auto', gap: 8 }}>
      {results.map((x) => (
        <PclnSearchItem
          tabIndex={0}
          alignItems='center'
          borderRadius='xl'
          key={x}
          p={2}
          onClick={() => setSearch(x)}
        >
          <PinIcon size={24} mr={2} />
          <Text>{x}</Text>
        </PclnSearchItem>
      ))}
    </Flex>
  )

  return (
    <Wrapper>
      <Popout trigger={trigger} triggerRef={triggerRef} content={content} />
    </Wrapper>
  )
}

export const TabFocusing = () => {
  const arr = Array(3).fill('')

  const [value, setValue] = useState('')
  const triggerRefs = arr.map((_) => useRef(null))

  const content = value && <h1>{value}</h1>
  const Popouts = arr.map((_, i) => (
    <Popout
      key={i}
      trigger={
        <input ref={triggerRefs[i]} aria-label='x' value={value} onChange={(e) => setValue(e.target.value)} />
      }
      content={content}
      triggerRef={triggerRefs[i]}
    />
  ))

  return (
    <Wrapper>
      <Flex flexDirection='column' width='fit-content' style={{ gap: 16 }}>
        <Button>This is just to trap focus</Button>
        {Popouts}
        <Button>This is just to trap focus</Button>
      </Flex>
    </Wrapper>
  )
}
