import styled from 'styled-components'
import { Text } from '../Text/Text'

export const Truncate = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

Truncate.displayName = 'Truncate'
