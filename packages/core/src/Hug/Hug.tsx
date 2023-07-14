import React, { Attributes } from 'react'
import PropTypes from 'prop-types'

import type { ICardProps } from '../Card'
import { Text } from '../Text'
import { deprecatedColorValue } from '../utils'
import { HugCard, Header, BorderConcealer } from './Hug.styled'

const hugPropTypes = {
  iconDisplay: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export interface IHugProps extends ICardProps {
  iconDisplay?: string[]
  icon?: React.ReactNode
  text?: React.ReactNode | React.ReactNode[] | string
  color?: string
  fontSize?: string | number
}

const Hug: React.FC<IHugProps> = ({
  bg,
  color = 'text.lightest',
  p,
  fontSize,
  icon,
  iconDisplay,
  colorScheme,
  ...props
}) => {
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

Hug.defaultProps = {
  borderRadius: 'xl',
  borderWidth: 1,
  color: 'text.lightest',
  fontSize: 1,
  p: 2,
}

Hug.propTypes = hugPropTypes

export default Hug
