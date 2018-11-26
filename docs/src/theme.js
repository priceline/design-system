// theme for mdx-docs components
import { theme } from 'pcln-design-system'

const { space, colors, fontSizes, fontWeights } = theme

const { blue, gray50, gray300 } = colors

const monospace = '"Roboto Mono", Menlo, monospace'

export default {
  font: 'Halyard Text, Montserrat, sans-serif',
  lineHeight: 1.6,
  code: {
    fontFamily: monospace,
    fontSize: '14px',
    color: blue
  },
  pre: {
    fontFamily: monospace,
    fontSize: '14px',
    padding: '16px',
    color: blue,
    backgroundColor: gray50,
    borderRadius: '2px'
  },
  LayoutSidebar: {
    backgroundColor: gray50
  },
  LayoutContainer: {
    paddingBottom: '128px'
  },

  MenuButton: {
    padding: '8px',
    color: blue
  },

  LiveCode: {
    border: `1px solid ${gray50}`,
    borderRadius: '2px',
    marginBottom: '32px'
  },
  LivePreview: {
    padding: '16px'
  },
  LiveEditor: {
    fontFamily: monospace,
    fontSize: '14px',
    padding: '16px',
    overflowX: 'auto',
    color: blue,
    backgroundColor: gray50
  },

  PaginationLink: {
    color: blue,
    fontSize: fontSizes[3] + 'px'
  }
}
