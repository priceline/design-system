import * as DS from 'pcln-design-system'
import RangeSlider, { Slider } from 'pcln-slider'
import { Modal } from 'pcln-modal'
import ModalDemo from './ModalDemo'
import {
  Heading,
  Text,
  Link,
  Button,
  getPaletteColor,
  getTextColorOn
} from 'pcln-design-system'
import styled from 'styled-components'
import { space, fontSize, color, theme } from 'styled-system'
import { components as mdxDocsComponents } from 'mdx-docs'

const RouterLink = styled(mdxDocsComponents.a)(
  {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  color
)

RouterLink.defaultProps = {
  color: 'blue'
}

const heading = type => props => {
  const Comp = Heading[type]
  return (
    <Comp {...props}>
      <Link href={'#' + props.id} color="inherit">
        {props.children}
      </Link>
    </Comp>
  )
}

const OverflowAuto = styled.div`
  max-width: 100%;
  overflow-x: auto;
`
const Table = styled(props => (
  <OverflowAuto>
    <table {...props} />
  </OverflowAuto>
))`
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;

  ${space} & th {
    text-align: left;
    background-color: #f6f8fa;
    vertical-align: bottom;
  }

  & td {
    vertical-align: top;
    &:first-child {
      min-width: 128px;
    }
  }

  & th,
  & td {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: inherit;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme('colors.borderGray')};
  }
`
Table.defaultProps = {
  my: 3
}

export const PageTitle = props => (
  <Heading.h1 fontSize={[5, 6]} bold mt={[2, 5]} mb={3} {...props} />
)

export const Description = props => <Text fontSize={[2, 3]} mb={3} {...props} />

export const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  ${color} ${fontSize};
`

Code.defaultProps = {
  fontSize: 2,
  color: 'blue'
}

export const ButtonLink = Button.withComponent('a')

const StaticDemo = styled.div`
  color: ${getPaletteColor('primary.base')};
`

const ShadeDemo = styled.div`
  color: ${getPaletteColor('base')};
`

const ShadeOtherDemo = styled.div`
  background-color: ${props => getPaletteColor(props.bgColor, 'base')(props)};
`

const TextDemo = styled.div`
  color: ${getTextColorOn('primary.base')};
  background-color ${getPaletteColor('primary.base')};
`

const components = {
  ...DS,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  a: RouterLink,
  p: p => <Text.p {...p} />,
  table: Table,
  RangeSlider,
  Slider,
  Modal,
  ModalDemo,
  StaticDemo,
  ShadeDemo,
  ShadeOtherDemo,
  TextDemo
}

components.h1.defaultProps = {
  fontSize: [5, 6],
  mt: 5,
  mb: 3
}
components.h2.defaultProps = {
  fontSize: 5,
  mt: 5,
  mb: 3
}

components.h3.defaultProps = {
  fontSize: 4,
  mt: 4,
  mb: 3,
  style: {
    fontWeight: '700'
  }
}

components.h4.defaultProps = {
  fontSize: 3,
  mt: 4,
  mb: 3
}

components.p.defaultProps = {
  fontSize: 2,
  mt: 0,
  mb: 3,
  style: {
    lineHeight: 1.6
  }
}

export default components
