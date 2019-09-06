;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    490: function(n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, '_frontmatter', function() {
          return r
        }),
        t.d(e, 'default', function() {
          return i
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        c = t(477)
      var r = {},
        a = { _frontmatter: r },
        b = c.b
      function i(n) {
        var e = n.components,
          t = (function(n, e) {
            if (null == n) return {}
            var t,
              o,
              c = {},
              r = Object.keys(n)
            for (o = 0; o < r.length; o++) (t = r[o]), e.indexOf(t) >= 0 || (c[t] = n[t])
            return c
          })(n, ['components'])
        return Object(o.b)(
          b,
          Object.assign({}, a, t, { components: e, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'BlockLink'),
          Object(o.b)(
            'p',
            null,
            'The ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'BlockLink'),
            ' component is an unstyled ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<a>'),
            ' element that can be used to wrap block-level content.',
          ),
          Object(o.b)(
            'p',
            null,
            Object(o.b)(
              'strong',
              { parentName: 'p' },
              'Extends: ',
              Object(o.b)('a', Object.assign({ parentName: 'strong' }, { href: '/Link' }), 'Link'),
            ),
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<BlockLink href='https://www.priceline.com'>\n  <Box p={4} color='white' bg='blue'>\n    Priceline.com\n  </Box>\n</BlockLink>\n",
            ),
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-block-link-md-88fe5493e68602e3438b.js.map
