;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    496: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return l
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        c = { _frontmatter: r },
        i = b.b
      function l(e) {
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
          Object.assign({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Container'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Container'),
            ' component to center content horizontally with a max-width.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Container maxWidth={256} >\n  <Box p={3} color='white' bg='blue'>\n    Container\n  </Box>\n</Container>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'maxWidth'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Number'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'max-width'),
                  ' (default ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '1280px'),
                  ')',
                ),
              ),
            ),
          ),
        )
      }
      l.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-container-md-d96e7aa943a791682262.js.map
