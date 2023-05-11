import { Box, createTheme, Text } from 'pcln-design-system'
import React from 'react'

const theme = createTheme()

export type DocTableProps<T> = {
  data: T[]
  columns: { field: string; heading: string; noWrap?: boolean }[]
}

export const DocTable = <T extends object>({ data, columns, ...rest }: DocTableProps<T>) => {
  return (
    <Box my={4} {...rest}>
      <table style={{ width: '100%', borderSpacing: 0, borderColor: theme.palette.border.tint }}>
        <thead>
          <tr style={{ backgroundColor: theme.palette.background.light }}>
            {columns.map((col, i) => (
              <th key={i} style={{ width: i === 0 ? '25%' : undefined }}>
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
