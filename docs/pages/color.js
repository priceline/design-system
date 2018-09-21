import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  Divider,
  theme
} from 'pcln-design-system'
import select from 'select'
import { PageTitle, Description, Code } from '../src/components'

class CopyButton extends React.Component {
  constructor() {
    super()

    this.handleClick = e => {
      select(this.ghost)
      document.execCommand('copy')
    }
  }

  render() {
    const child = React.Children.only(this.props.children)
    const clone = React.cloneElement(child, {
      onClick: this.handleClick
    })

    return [
      clone,
      <div
        ref={ref => (this.ghost = ref)}
        children={this.props.text}
        style={{
          position: 'absolute',
          zIndex: -1,
          opacity: 0
        }}
      />
    ]
  }
}

const colors = Object.keys(theme.colors)
  .filter(key => !/[0-9]$/.test(key))
  .map(key => ({
    name: key,
    value: theme.colors[key]
  }))
  .filter(color => !Array.isArray(color.value))

const primaries = colors.filter(
  color => !/^(lightGray|gray|borderGray|darkGray)$/.test(color.name)
)
const grays = colors.filter(color =>
  /^(lightGray|gray|borderGray|darkGray)$/.test(color.name)
)

const ColorChip = styled(Box)`
  height: 100px;
  width: 100%;
  border-radius: 2px 2px 0 0;
  transition: all 0.1s ease;
`

const HexButton = styled.button`
  width: 100%;
  display: inline-block;
  position: relative;
  font-family: inherit;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: inherit;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  appearance: none;
  transition: all 0.125s ease;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08),
      0 16px 16px 0 rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.9);
  }

  & > span {
    top: 0;
    left: 0;
    position: absolute;
    font-size: 12px;
    padding: 8px 0;
    width: 100%;
    color: #fff;
    border-radius: 2px 2px 0 0;
    background-color: #001833;
    text-align: center;
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.125s;
    transition-timing-function: ease-out;
  }

  &:hover > span {
    opacity: 1;
  }
`

const ColorCard = ({ name, value }) => (
  <Card borderWidth={0} m={0}>
    <CopyButton text={value}>
      <HexButton>
        <ColorChip bg={value} />
        <span>Press to copy</span>
        <Box p={2}>
          <Text fontSize={1} mb={1} align="left">
            {name}
          </Text>
          <Code fontSize={1} align="left" color="gray">
            {value}
          </Code>
        </Box>
      </HexButton>
    </CopyButton>
  </Card>
)

const Column = props => (
  <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 4, 1 / 6]} mb={4} px={2} />
)

const ColorList = props =>
  props.colors.map(color => (
    <Column key={color.key}>
      <ColorCard {...color} />
    </Column>
  ))

const Color = props => (
  <Box>
    <PageTitle>Color</PageTitle>
    <Description>
      The design system includes a color palette of several primary colors,
      along with light and dark variations.
    </Description>
    <Flex wrap mx={-2} pt={4}>
      <ColorList colors={primaries} />
      <ColorList colors={grays} />
    </Flex>
  </Box>
)

export default Color
