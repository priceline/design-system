import styled from 'styled-components'

const hoverColor = props =>
  props.hoverColor
    ? {
        '&:hover': {
          color: props.theme.colors[props.hoverColor] || props.hoverColor
        }
      }
    : null

const BlockLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  ${hoverColor};
`

export default BlockLink
