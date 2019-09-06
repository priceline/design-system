;(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    503: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return b
        }),
        n.d(t, 'default', function() {
          return l
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        r = n(477)
      var b = {},
        i = { _frontmatter: b },
        c = r.b
      function l(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              b = Object.keys(e)
            for (a = 0; a < b.length; a++) (n = b[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, ['components'])
        return Object(a.b)(
          c,
          Object.assign({}, i, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Hug'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Hug'),
            ' component to surround another component with a border and a banner on top.\nPass in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'props.children'),
            ' to be wrapped.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Hug\n  icon='check'\n  text={<Text.span>I hug my props.children</Text.span>}>\n  <Card p={4}>\n    Hello\n  </Card>\n</Hug>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'iconDisplay'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string or array of strings'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Responsive display property of icon',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'icon'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'SVG icon name'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'text'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'node, array of nodes, or string',
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'When providing a node, it is highly recommended to use a ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<Text.span />'),
                  ' node, to keep text on a single line',
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
//# sourceMappingURL=component---src-pages-components-hug-md-9f7631513808857834d0.js.map
