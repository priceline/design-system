import React from 'react'
import { Box, createTheme, Text } from '../..'
import { IBoxProps } from '../../Box'

const theme = createTheme()

export type DocTableProps<T> = IBoxProps & {
  data: T[]
  columns: { field: string; heading: string; noWrap?: boolean }[]
}

export const DocTable = <T extends object>({ data, columns, ...rest }: DocTableProps<T>) => {
  return (
    <Box my={4} p={3} {...rest}>
      <table style={{ width: '100%', borderSpacing: 0, borderColor: theme.palette.border.base }}>
        <thead>
          <tr style={{ backgroundColor: theme.palette.background.light }}>
            {columns.map((col, i) => (
              <th key={i}>
                <Text p={3} textAlign='left' style={{ whiteSpace: 'nowrap' }}>
                  {col.heading}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col, i) => (
                <td
                  key={i}
                  style={{
                    borderBottom: '1px solid',
                    borderColor: 'inherit',
                    whiteSpace: col.noWrap ? 'nowrap' : undefined,
                  }}
                >
                  <Text p={3}>{row[col.field]}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}
