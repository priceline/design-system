;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    512: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return i
        }),
        t.d(n, 'default', function() {
          return s
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        r = t(477)
      var i = {},
        c = { _frontmatter: i },
        a = r.b
      function s(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, ['components'])
        return Object(o.b)(
          a,
          Object.assign({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Link'),
          Object(o.b)(
            'p',
            null,
            'The ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Link'),
            ' component is a styled ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<a>'),
            ' element.\nUse it as you would use any other link.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Link href='https://www.priceline.com/home/'>\n  Priceline Home\n</Link>\n",
            ),
          ),
        )
      }
      s.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-link-md-06f64f663f0788b2cdb5.js.map
