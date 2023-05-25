import { render } from '@testing-library/react'
import React from 'react'
import { Grid, IGridProps } from './Grid'

describe('Grid', () => {
  const testProps: IGridProps = {
    gap: '10px',
    rowGap: '20px',
    columnGap: '30px',
    column: '1 / 3',
    row: '1 / span 2',
    area: 'header',
    autoFlow: 'row dense',
    autoRows: 'minmax(100px, auto)',
    autoColumns: 'repeat(2, 1fr)',
    templateRows: 'repeat(2, 1fr)',
    templateColumns: 'repeat(3, 1fr)',
    templateAreas: '"header header header" "main main sidebar"',
    placeItems: 'center',
  }

  it('applies grid styles correctly', () => {
    const { container } = render(<Grid {...testProps} />)
    const gridElement = container.firstChild

    expect(gridElement).toHaveStyleRule('display: grid')
    expect(gridElement).toHaveStyleRule('grid-gap: 10px')
    expect(gridElement).toHaveStyleRule('grid-row-gap: 20px')
    expect(gridElement).toHaveStyleRule('grid-column-gap: 30px')
    expect(gridElement).toHaveStyleRule('grid-column: 1 / 3')
    expect(gridElement).toHaveStyleRule('grid-row: 1 / span 2')
    expect(gridElement).toHaveStyleRule('grid-area: header')
    expect(gridElement).toHaveStyleRule('grid-auto-flow: row dense')
    expect(gridElement).toHaveStyleRule('grid-auto-rows: minmax(100px, auto)')
    expect(gridElement).toHaveStyleRule('grid-auto-columns: repeat(2, 1fr)')
    expect(gridElement).toHaveStyleRule('grid-template-rows: repeat(2, 1fr)')
    expect(gridElement).toHaveStyleRule('grid-template-columns: repeat(3, 1fr)')
    expect(gridElement).toHaveStyleRule('grid-template-areas: "header header header" "main main sidebar"')
    expect(gridElement).toHaveStyleRule('place-items: center')
  })
})
