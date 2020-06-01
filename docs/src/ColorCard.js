import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Card, Text } from 'pcln-design-system'
import { Code } from '../src/components'
import CopyButton from './CopyButton'

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
          <Text fontSize={1} mb={1} align='left'>
            {name}
          </Text>
          <Code fontSize={1} align='left' color='gray'>
            {value}
          </Code>
        </Box>
      </HexButton>
    </CopyButton>
  </Card>
)
ColorCard.propTypes = {
  name: PropTypes.node,
  value: PropTypes.node,
}

export default ColorCard
