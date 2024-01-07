import styled, { css } from 'styled-components'
import { Flex } from '../Flex'
import { getAnimation } from './helpers/getAnimation'

export const AnimationWrapper = styled(Flex)`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  animation: ${({ toggle, animation }) => (toggle ? getAnimation(animation) : css``)};
`
