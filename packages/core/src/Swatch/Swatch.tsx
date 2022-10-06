import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex'

const SwatchColor = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  margin: 4px;
`

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

const Swatch: React.FC<InferProps<typeof propTypes>> = ({ colors, onClick }) => (
  <Flex flexWrap='wrap'>
    {colors.map((color, idx) => (
      <SwatchColor
        data-testid={`${idx}-${color}`}
        key={`${idx}-${color}`}
        color={color}
        onClick={() => onClick?.(color)}
      />
    ))}
  </Flex>
)

Swatch.propTypes = propTypes
Swatch.displayName = 'Swatch'

export default Swatch
