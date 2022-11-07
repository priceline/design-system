/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Flex, Text, createTheme } from '..'
import { ThemeConsumer } from 'styled-components'

const theme = createTheme()

const blacklist = ['darkPurple']

const keys = Object.keys(theme.colors).filter((key) => !blacklist.includes(key))

const next = keys.map((key) => ({ key, value: theme.colors[key] }))

const Chip = (props) => <Box width={1} px={5} py={4} bg={props.color} />

const ColorCard = (props) => (
  <Box>
    <Chip name={props.shade} color={props.color || props.shade} />
    <Text f={0}>{props.shade}</Text>
    <Text as='pre' m={0}>
      {props.hex}
    </Text>
  </Box>
)

export default {
  title: 'Design / Color',
}

export const Palette = () => (
  <ThemeConsumer>
    {(theme) => {
      return (
        <div>
          <Box p={3}>
            <h1>Palette</h1>
            <p>The palette allows you to change the color of components.</p>
            <Flex flexWrap='wrap'>
              {Object.keys(theme.palette).map((color) => {
                const shades = theme.palette[color]
                if (typeof shades === 'object') {
                  return (
                    <div style={{ width: '100%' }}>
                      <h4>{color}</h4>
                      <Flex flexWrap='wrap'>
                        {Object.keys(shades).map((shade) => {
                          const fullColor = `${color}.${shade}`
                          return (
                            <Box key={fullColor} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 7]}>
                              <ColorCard
                                name={fullColor}
                                color={fullColor}
                                shade={shade}
                                hex={shades[shade]}
                              />
                            </Box>
                          )
                        })}
                      </Flex>
                      <hr />
                    </div>
                  )
                } else {
                  const fullColor = `${color}.${shades}`
                  return (
                    <Box key={fullColor} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
                      <ColorCard name={fullColor} color={fullColor} />
                    </Box>
                  )
                }
              })}
            </Flex>
          </Box>
        </div>
      )
    }}
  </ThemeConsumer>
)

export const Colors = () => (
  <div>
    <Box p={3}>
      <h1>Colors</h1>
    </Box>
    <Flex flexWrap='wrap'>
      {next.map((color) => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 7]}>
          <ColorCard name={color.key} shade={color.key} hex={color.value} />
        </Box>
      ))}
    </Flex>
  </div>
)
