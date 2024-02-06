/* eslint-disable react/no-children-prop */
import React from 'react'
import Component from '@reach/component-component'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import us from 'us'

import { Box, Text, ThemeProvider } from 'pcln-design-system'
import { Pin as PinIcon } from 'pcln-icons'

import catNames from 'cat-names'
import { Autocomplete, Label, Input, Menu, Item } from '.'

const usStates = us.STATES.map((state) => (
  <Autocomplete.Item key={state.name} item={state}>
    {state.name}
  </Autocomplete.Item>
))

const cats = catNames.all
const match = (item, value) => item.includes(value)

const kayakTheme = {
  font: "'HelveticaNeue-Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  palette: {
    primary: {
      light: '#ff873f',
      base: '#ff690f',
      dark: '#b64907',
    },
    secondary: {
      light: '#ff873f',
      base: '#ff690f',
      dark: '#b64907',
    },
  },
}

export default {
  title: 'pcln-autocomplete/Autocomplete',
  component: Autocomplete,
}

export const Default = () => (
  <Component
    initialState={{ value: '' }}
    children={({ state, setState }) => (
      <Box>
        <Autocomplete
          onChange={(item) => {
            setState({ value: item })
          }}
          match={match}
        >
          <Label mb={1}>Cat</Label>
          <Input />
          <Menu>
            {cats.map((cat) => (
              <Item key={cat} item={cat}>
                <PinIcon color='primary' mr={2} />
                <Text fontSize={0}>{cat}</Text>
              </Item>
            ))}
          </Menu>
        </Autocomplete>
        <Text my={2}>This text should be covered up by the Autocomplete.Menu when open.</Text>
        <Text my={2}>
          The current value is <code>{state.value}</code>
        </Text>
      </Box>
    )}
  />
)

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  expect(canvas.queryByText(/Boots/)).not.toBeInTheDocument()

  const autocompleteInput = canvas.getByLabelText('Cat', {
    selector: 'input',
  })

  await userEvent.type(autocompleteInput, 'Bo', {
    delay: 100,
  })

  expect(canvas.getByText(/Boots/)).toBeInTheDocument()

  await userEvent.hover(canvas.getByText(/Boots/))
}

export const Themed = () => (
  <ThemeProvider theme={kayakTheme}>
    <Component
      initialState={{ value: '' }}
      children={({ state, setState }) => (
        <Box>
          <Autocomplete
            onChange={(item) => {
              setState({ value: item })
            }}
            match={match}
          >
            <Label mb={1}>Cat</Label>
            <Input />
            <Menu>
              {cats.map((cat) => (
                <Item key={cat} item={cat}>
                  <PinIcon color='primary' mr={2} />
                  <Text fontSize={0}>{cat}</Text>
                </Item>
              ))}
            </Menu>
          </Autocomplete>
          <Text my={2}>This text should be covered up by the Autocomplete.Menu when open.</Text>
          <Text my={2}>
            The current value is <code>{state.value}</code>
          </Text>
        </Box>
      )}
    />
  </ThemeProvider>
)

export const DefaultHighlighted = () => (
  <Autocomplete defaultIsOpen={true} defaultHighlightedIndex={3}>
    <Autocomplete.Menu>{usStates}</Autocomplete.Menu>
  </Autocomplete>
)
