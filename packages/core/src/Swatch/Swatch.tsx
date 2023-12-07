import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex'
import { getPaletteColor } from '../utils'

const SwatchColor = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid ${getPaletteColor('border.base')};
  display: flex;
  margin: 4px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`

export type SwatchProps = {
  colors: string[]
  onClick?: (color: string) => void
}

export function Swatch({ colors, onClick, ...props }: SwatchProps): React.ReactElement {
  return (
    <Flex flexWrap='wrap' {...props}>
      {colors.map((color, idx) => (
        <SwatchColor
          data-testid={`${idx}-${color}`}
          key={`${idx}-${color}`}
          color={color}
          onClick={onClick ? () => onClick(color) : undefined}
        />
      ))}
    </Flex>
  )
}

Swatch.displayName = 'Swatch'

export default Swatch
