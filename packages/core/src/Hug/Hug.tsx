import React, { Attributes } from 'react'
import { type CardProps } from '../Card/Card'
import { Text } from '../Text/Text'
import { BorderConcealer, Header, HugCard } from './Hug.styled'

/**
 * @public
 */
export type HugProps = CardProps & {
  children?: React.ReactNode
  iconDisplay?: string[]
  icon?: React.ReactNode
  text?: React.ReactNode
  color?: string
  fontSize?: string | number
}

/**
 * @public
 */
export function Hug({
  bg,
  borderRadius = 'xl',
  borderWidth = 1,
  color = 'text.lightest',
  p = 2,
  fontSize = 1,
  icon,
  iconDisplay,
  colorScheme,
  ...props
}: HugProps): React.ReactElement {
  let iconClone
  if (React.isValidElement(icon)) {
    iconClone = React.cloneElement(icon, {
      style: { display: iconDisplay },
      mr: 2,
      mt: '-2px',
      mb: '2px',
      size: 24,
    } as unknown as Attributes)
  }

  let headerColor = ''

  if (colorScheme && color !== 'text.lightest') {
    headerColor = color
  } else if (!colorScheme) {
    headerColor = color
  }

  return (
    <HugCard
      {...props}
      borderColor={colorScheme ? null : bg || color}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      color={color}
      colorScheme={colorScheme}
    >
      <Header
        bg={bg}
        color={headerColor}
        p={p}
        pl='12px'
        alignItems='center'
        colorScheme={colorScheme}
        iconUsesColorScheme={!iconClone?.props?.color}
      >
        {!!iconClone && iconClone}
        <Text fontSize={fontSize}>{props.text}</Text>
      </Header>
      <BorderConcealer>{props.children}</BorderConcealer>
    </HugCard>
  )
}
