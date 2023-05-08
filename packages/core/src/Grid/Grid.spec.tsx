import { render } from '@testing-library/react'
import React from 'react'
import { Grid, IGridProps } from './Grid'

describe('Grid', () => {
  const defaultProps: IGridProps = {
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

  it('renders correctly with default props', () => {
    const { container } = render(<Grid />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('applies grid styles correctly', () => {
    const { container } = render(<Grid {...defaultProps} />)
    const gridElement = container.firstChild

    expect(gridElement).toHaveStyle('display: grid')
    expect(gridElement).toHaveStyle('grid-gap: 10px')
    expect(gridElement).toHaveStyle('grid-row-gap: 20px')
    expect(gridElement).toHaveStyle('grid-column-gap: 30px')
    expect(gridElement).toHaveStyle('grid-column: 1 / 3')
    expect(gridElement).toHaveStyle('grid-row: 1 / span 2')
    expect(gridElement).toHaveStyle('grid-area: header')
    expect(gridElement).toHaveStyle('grid-auto-flow: row dense')
    expect(gridElement).toHaveStyle('grid-auto-rows: minmax(100px, auto)')
    expect(gridElement).toHaveStyle('grid-auto-columns: repeat(2, 1fr)')
    expect(gridElement).toHaveStyle('grid-template-rows: repeat(2, 1fr)')
    expect(gridElement).toHaveStyle('grid-template-columns: repeat(3, 1fr)')
    expect(gridElement).toHaveStyle('grid-template-areas: "header header header" "main main sidebar"')
    expect(gridElement).toHaveStyle('place-items: center')
  })
})
