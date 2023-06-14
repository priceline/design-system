import React from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Box, Text } from '../..'

export type DocTableProps<T> = {
  data: T[]
  columns: { field: string; heading: string; noWrap?: boolean }[]
}

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-color: ${themeGet('palette.border.tint')};
`
const Tr = styled.tr`
  background-color: ${themeGet('palette.background.light')};
`

export const DocTable = <T extends object>({ data, columns, ...rest }: DocTableProps<T>) => {
  return (
    <Box my={4} {...rest}>
      <Table>
        <thead>
          <Tr>
            {columns.map((col, i) => (
              <th key={i} style={{ width: i === 0 ? '25%' : undefined }}>
                <Text p={3} textAlign='left' style={{ whiteSpace: 'nowrap' }}>
                  {col.heading}
                </Text>
              </th>
            ))}
          </Tr>
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
      </Table>
    </Box>
  )
}
