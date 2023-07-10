/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Flex, Text, Card, createTheme } from '..'
import type { ColorScheme as ColorSchemeType } from '..'
import { ThemeConsumer } from 'styled-components'
import { ArrowDown } from 'pcln-icons'

const theme = createTheme()

const blacklist = ['darkPurple']

const keys = Object.keys(theme.colors).filter((key) => !blacklist.includes(key))

const next = keys.map((key) => ({ key, value: theme.colors[key] }))

const colorSchemeFamilies = [
  'Primary',
  'Secondary',
  'Neutral',
  'Success',
  'Warning',
  'Caution',
  'Highlight',
  'Promo',
  'Alert',
]

const ColorCard = (props) => (
  <Flex flexDirection='column' width='100%'>
    <Card borderRadius='xl' bg={props.color || props.shade} height='100px' />
    <Text f={0}>{props.shade}</Text>
    <Text as='pre' m={0}>
      {props.hex}
    </Text>
  </Flex>
)

const ColorSchemeColumnCard = ({ title }) => {
  return (
    <Card height='100px' width='108px' borderRadius='xl'>
      <Flex flexDirection='column' alignItems='center' justifyContent='center' height='100%'>
        <Text mb={2} fontSize='14px'>
          {title}
        </Text>
        <ArrowDown size='16px' />
      </Flex>
    </Card>
  )
}

const BackgroundForegroundCard = () => {
  return (
    <Flex width='100%' justifyContent='space-around' my={2}>
      <ColorSchemeColumnCard title='Background' />
      <ColorSchemeColumnCard title='Foreground' />
    </Flex>
  )
}

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
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <ColorCard name={color.key} shade={color.key} hex={color.value} />
        </Box>
      ))}
    </Flex>
  </div>
)

export const ColorScheme = () => (
  <ThemeConsumer>
    {(theme) => {
      return (
        <div>
          <Box p={3}>
            <h1>Color Scheme</h1>
            <Flex flexWrap='wrap'>
              {colorSchemeFamilies.map((colorSchemeFamily) => {
                return (
                  <Card borderRadius='xl' m={2} p={3} key={colorSchemeFamily}>
                    <Flex flexDirection='column'>
                      <Text textStyle='heading3'>{colorSchemeFamily}</Text>
                      <BackgroundForegroundCard />

                      {Object.entries<ColorSchemeType>(theme.colorSchemes)
                        .filter((entry) => entry[0].includes(colorSchemeFamily.toLowerCase()))
                        .map((entry) => {
                          const [key, colorScheme] = entry

                          return (
                            <Flex flexDirection='column' py={3} key={key}>
                              <Text fontWeight='bold' mb={2}>
                                {key}
                              </Text>
                              <Flex>
                                <Box px={3} width='140px'>
                                  <ColorCard color={colorScheme.background} />
                                </Box>
                                <Box px={3} width='140px'>
                                  <ColorCard color={colorScheme.foreground} />
                                </Box>
                              </Flex>
                            </Flex>
                          )
                        })}
                    </Flex>
                  </Card>
                )
              })}
            </Flex>
          </Box>
        </div>
      )
    }}
  </ThemeConsumer>
)
