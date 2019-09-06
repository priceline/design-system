;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    491: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return c
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        l = { _frontmatter: r },
        i = b.b
      function c(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              r = Object.keys(e)
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Box'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Box'),
            ' component to control width, margin, padding, and color.',
          ),
          Object(a.b)('p', null, '50% width'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box width={1/2} bg='blue'>\n  Box\n</Box>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Padding of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space[3]'),
            ' (16px)',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box p={3} bg='blue'>\n  Box\n</Box>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Margin of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space[2]'),
            ' (8px)',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box m={4} bg='blue'>\n  Box\n</Box>\n",
            ),
          ),
          Object(a.b)('p', null, "Color blue from the theme's color palette"),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box color='blue'>\n  Box\n</Box>\n",
            ),
          ),
          Object(a.b)('p', null, "Background color green from the theme's color palette"),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box bg='green'>\n  Box\n</Box>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Responsive Widths'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' prop accepts an array value to set different widths at different breakpoints with a mobile-first approach.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Box\n  width={[\n    1,    // Sets width 100% at the smallest breakpoint\n    1/2,  // Sets width 50% at the next breakpoint\n    1/4,  // Sets width 25% at the next breakpoint\n  ]}\n  bg='gray'>\n  Hello\n</Box>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'See ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/jxnblk/styled-system' }),
              'styled-system',
            ),
            ' for more documentation.',
          ),
          Object(a.b)('h2', null, 'Props'),
          Object(a.b)(
            'table',
            null,
            Object(a.b)(
              'thead',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'thead' },
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Prop'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Type'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Description'),
              ),
            ),
            Object(a.b)(
              'tbody',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'width'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets the width of the element',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'color'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  "Sets color based on the theme's color palette",
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  "Sets background-color based on the theme's color palette",
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'm'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets margin based on the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'theme.space'),
                  ' scale',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mt'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets margin-top'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mr'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets margin-right'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mb'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets margin-bottom'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'ml'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets margin-left'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mx'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets margin-left and margin-right',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'my'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets margin-top and margin-bottom',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'p'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets padding based on the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'theme.space'),
                  ' scale',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pt'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets padding-top'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pr'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets padding-right'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pb'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets padding-bottom'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pl'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets padding-left'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'px'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets padding-left and padding-right',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'py'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets padding-top and padding-bottom',
                ),
              ),
            ),
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-box-mdx-26d08ac9239c090dd73c.js.map
