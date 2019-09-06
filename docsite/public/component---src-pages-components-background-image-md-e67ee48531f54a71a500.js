;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    488: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return i
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        c = { _frontmatter: r },
        l = b.b
      function i(e) {
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
          l,
          Object.assign({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'BackgroundImage'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'BackgroundImage'),
            ' component to set a background image.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<BackgroundImage\n  image='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1024&q=20'>\n  <Box p={4}>\n    <Heading\n      fontSize={6}\n      align='center'\n      color='white'>\n      Hello\n    </Heading>\n  </Box>\n</BackgroundImage>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'image'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'URI for background image'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'height'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'CSS value for height'),
              ),
            ),
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-background-image-md-e67ee48531f54a71a500.js.map
