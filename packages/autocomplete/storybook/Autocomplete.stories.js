/* eslint-disable react/no-children-prop */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Text, Icon } from 'pcln-design-system'
import catNames from 'cat-names'
import Component from '@reach/component-component'
import { ThemeProvider } from 'pcln-design-system'
import { Autocomplete, Label, Input, Menu, Item } from '../src'

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

storiesOf('Autocomplete', module)
  .add('default', () => (
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
                  <Icon name='Pin' color='primary' mr={2} />
                  <Text fontSize={0}>{cat}</Text>
                </Item>
              ))}
            </Menu>
          </Autocomplete>
          <Text my={2}>
            This text should be covered up by the Autocomplete.Menu when open.
          </Text>
          <Text my={2}>
            The current value is <code>{state.value}</code>
          </Text>
        </Box>
      )}
    />
  ))
  .add('themed', () => (
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
                    <Icon name='Pin' color='primary' mr={2} />
                    <Text fontSize={0}>{cat}</Text>
                  </Item>
                ))}
              </Menu>
            </Autocomplete>
            <Text my={2}>
              This text should be covered up by the Autocomplete.Menu when open.
            </Text>
            <Text my={2}>
              The current value is <code>{state.value}</code>
            </Text>
          </Box>
        )}
      />
    </ThemeProvider>
  ))
