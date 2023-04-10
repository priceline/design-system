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

export interface ISwatchProps {
  colors?: string[]
  onClick?: (color: string) => void
}

const Swatch: React.FC<ISwatchProps> = (props: ISwatchProps) => {
  const { colors, onClick } = props
  return (
    <Flex flexWrap='wrap'>
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

export default Swatch
