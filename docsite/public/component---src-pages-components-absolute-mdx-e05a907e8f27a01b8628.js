;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    486: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return s
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        l = { _frontmatter: r },
        i = b.b
      function s(e) {
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
          Object(a.b)('h1', null, 'Absolute'),
          Object(a.b)(
            'p',
            null,
            'Use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Absolute'),
            ' component to control position. Use with a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Relative'),
            ' parent/ancestor.',
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)(
              'strong',
              { parentName: 'p' },
              'Extends: ',
              Object(a.b)('a', Object.assign({ parentName: 'strong' }, { href: '/Box' }), 'Box'),
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-.jsx', metastring: 'live=true', live: 'true' },
              ),
              "<Relative\n  p={5}\n  zIndex={-1}\n  bg='lightBlue'>\n  <Absolute\n    p={3}\n    m={2}\n    bg='blue'\n    top={0}\n    right={0}>\n    Absolute\n  </Absolute>\n</Relative>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note: ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'zIndex'),
            ' is set for documentation purposes only. Generally you should avoid using ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'zIndex'),
            ' with positioning.',
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'top'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets top'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bottom'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets bottom'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'left'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets left'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'right'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets right'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'zIndex'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number or string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets z-index'),
              ),
            ),
          ),
        )
      }
      s.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-absolute-mdx-e05a907e8f27a01b8628.js.map
