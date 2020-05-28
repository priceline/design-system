import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Text, createTheme } from '..'

const theme = createTheme()

const blacklist = ['darkPurple']

const keys = Object.keys(theme.colors).filter((key) => !blacklist.includes(key))

const next = keys.map((key) => ({ key, value: theme.colors[key] }))

const Chip = (props) => <Box width={1} px={5} py={4} bg={props.color} />

const Pre = Text.withComponent('pre')

const palette = Object.keys(theme.palette).map((key) => ({
  key,
  value: theme.palette[key],
}))

const ColorCard = (props) => (
  <Box>
    <Chip name={props.name} color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </Box>
)

storiesOf('Color', module)
  .add('Colors', () => (
    <div>
      <Box p={3}>
        <h1>Colors</h1>
      </Box>
      <Flex wrap>
        {next.map((color) => (
          <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <ColorCard name={color.key} color={color.value} />
          </Box>
        ))}
      </Flex>
    </div>
  ))
  .add('Palette', () => (
    <div>
      <Box p={3}>
        <h1>Palette</h1>
        <p>The palette allows you to change the color of components.</p>
        <Flex wrap>
          {palette.map((pal) => {
            if (typeof pal.value === 'object') {
              return (
                <div style={{ width: '100%' }}>
                  <h4>{pal.key}</h4>
                  <Flex wrap>
                    {Object.keys(pal.value).map((key) => (
                      <Box
                        key={key}
                        p={3}
                        width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
                      >
                        <ColorCard
                          name={key}
                          color={theme.palette[pal.key][key]}
                        />
                      </Box>
                    ))}
                  </Flex>
                  <hr />
                </div>
              )
            } else {
              return (
                <Box
                  key={pal.key}
                  p={3}
                  width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
                >
                  <ColorCard name={pal.key} color={pal.value} />
                </Box>
              )
            }
          })}
        </Flex>
      </Box>
    </div>
  ))
