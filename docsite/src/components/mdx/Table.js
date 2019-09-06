import React from 'react'
import styled from 'styled-components'
import { space } from 'pcln-design-system'

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
    border-bottom-color: ${props => props.theme.colors.borderGray};
  }
`
Table.defaultProps = {
  my: 3,
}

export default Table
