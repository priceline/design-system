;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    507: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return s
        }),
        t.d(n, 'default', function() {
          return l
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        r = t(477)
      t(161)
      var s = {},
        c = { _frontmatter: s },
        a = r.b
      function l(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              o,
              r = {},
              s = Object.keys(e)
            for (o = 0; o < s.length; o++) (t = s[o]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, ['components'])
        return Object(o.b)(
          a,
          Object.assign({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Priceline One'),
          Object(o.b)('p', null, 'Priceline Design System'),
          Object(o.b)('h2', null, 'Sketch Kit'),
          Object(o.b)('h2', null, 'Getting Started'),
          Object(o.b)('p', null, 'Install the Design System in your application'),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-sh' }),
              'npm install pcln-design-system\n',
            ),
          ),
          Object(o.b)('h2', null, 'ThemeProvider'),
          Object(o.b)(
            'p',
            null,
            'Wrap the root of your application with the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'ThemeProvider'),
            ' component,\nwhich adds the Design System theme to context for use in styled-components\nand sets typographic defaults.\nThis should only be included once in your application.',
          ),
          Object(o.b)(
            'p',
            null,
            "The ThemeProvider is a wrapper around styled-components' ",
            Object(o.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://www.styled-components.com/docs/advanced#theming' }),
              'ThemeProvider',
            ),
            '.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              "import React from 'react';\nimport { ThemeProvider } from 'pcln-design-system';\nimport SomeView from './SomeView';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <ThemeProvider>\n        <h1>Hello</h1>\n      </ThemeProvider>\n    );\n  }\n}\n",
            ),
          ),
          Object(o.b)('h2', null, 'Montserrat font'),
          Object(o.b)(
            'p',
            null,
            'To use the Montserrat font-family in you project, be sure to include a link in your document ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<head>'),
            '.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-html' }),
              '<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet" />\n',
            ),
          ),
          Object(o.b)('h2', null, 'Primitive UI Components'),
          Object(o.b)('p', null, 'Import and use the design system UI components in your application.'),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              "import React from 'react';\nimport { Box, Text } from 'pcln-design-system';\n\nconst SomeView = props => (\n  <Box p={3}>\n    <Text color=\"blue\">Hello</Text>\n  </Box>\n);\n",
            ),
          ),
        )
      }
      l.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-index-mdx-66ead189a0873fa3c08a.js.map
