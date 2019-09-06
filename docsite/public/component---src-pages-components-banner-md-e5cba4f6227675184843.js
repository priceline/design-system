;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    489: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l
        }),
        n.d(t, 'default', function() {
          return i
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var l = {},
        r = { _frontmatter: l },
        c = b.b
      function i(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              l = Object.keys(e)
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          c,
          Object.assign({}, r, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Banner'),
          Object(a.b)(
            'p',
            null,
            'Use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Banner'),
            ' component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Banner px={3} py={2} showIcon={false}>\n  This is a Banner\n</Banner>\n',
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Banner\n  showIcon={false}\n  bg='lightBlue'\n  p={2}>\n  <Flex>\n    <Icon name='calendar' />\n    <Box pl={2}>\n      <Heading fontSize={2} bold>Are Your Dates Correct?</Heading>\n      <Text>\n        Remember to double check the calendar because availability may change depending on your dates.\n      </Text>\n    </Box>\n  </Flex>\n</Banner>\n",
            ),
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets background-color and color. Accepts ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'blue'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'green'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'orange'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'red'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'lightBlue'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'lightGreen'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'lightOrange'),
                  ', ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'lightRed'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'header'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets header content'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'iconName'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets left-hand svg icon name'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'onClose'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'function'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Passes onClick functionality to close button / shows close button if provided',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'showIcon'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Renders left-hand icon (true by default)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'text'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets text content'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'textAlign'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets text alignment for text only (icons not affected)',
                ),
              ),
            ),
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-banner-md-e5cba4f6227675184843.js.map
