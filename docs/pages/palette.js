import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  Divider,
  createTheme,
} from 'pcln-design-system'
import select from 'select'
import { PageTitle, Description, Code } from '../src/components'

class CopyButton extends React.Component {
  constructor() {
    super()

    this.handleClick = (e) => {
      select(this.ghost)
      document.execCommand('copy')
    }
  }

  render() {
    const child = React.Children.only(this.props.children)
    const clone = React.cloneElement(child, {
      onClick: this.handleClick,
    })

    return [
      clone,
      <div
        ref={(ref) => (this.ghost = ref)}
        children={this.props.text}
        style={{
          position: 'absolute',
          zIndex: -1,
          opacity: 0,
        }}
      />,
    ]
  }
}

const flattenObject = (obj) =>
  Object.keys(obj).map((key) => ({
    name: key,
    value: obj[key],
  }))

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
          <Text fontSize={0} mb={1} align='left'>
            {name}
          </Text>
          <Code fontSize={0} align='left' color='gray'>
            {value}
          </Code>
        </Box>
      </HexButton>
    </CopyButton>
  </Card>
)

const Column = (props) => (
  <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 4, 1 / 5]} mb={4} px={2} />
)

const ColorList = (props) =>
  props.colors.map((color) => (
    <Column key={color.key}>
      <ColorCard {...color} />
    </Column>
  ))

export const SectionTitle = (props) => (
  <Heading.h3 fontSize={[2, 3]} bold mt={[2, 4]} {...props} />
)

const defaultPalette = createTheme().palette

const rest = {}

const Palette = (props) => (
  <Box>
    <PageTitle>Palette</PageTitle>
    <Description>
      The design system includes a palette that can be used to theme components.
    </Description>
    {Object.keys(defaultPalette).map((key) => {
      if (typeof defaultPalette[key] === 'object') {
        return (
          <React.Fragment>
            <SectionTitle>{key}</SectionTitle>
            <Flex wrap mx={-2} pt={4}>
              <ColorList colors={flattenObject(defaultPalette[key])} />
            </Flex>
            <Divider />
          </React.Fragment>
        )
      } else {
        rest[key] = defaultPalette[key]
      }
    })}
    <Flex wrap mx={-2} pt={4}>
      <ColorList colors={flattenObject(rest)} />
    </Flex>
  </Box>
)

export default Palette
