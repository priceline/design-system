;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    521: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return u
        }),
        n.d(t, 'default', function() {
          return p
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var o = n(69),
        r = n(477),
        c = n(20)
      var u = {},
        a = { _frontmatter: u },
        b = r.b
      function p(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              c = Object.keys(e)
            for (o = 0; o < c.length; o++) (n = c[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, ['components'])
        return Object(o.b)(
          b,
          Object.assign({}, a, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Markdown Example'),
          Object(o.b)(c.e, { color: 'text', mdxType: 'Text' }, "I'm a React Text Component 🙌"),
          Object(o.b)(c.e, { color: 'blue', mdxType: 'Text' }, "Me too! I'm blue!"),
        )
      }
      p.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-text-mdx-c3c3b9d8ee9538bcc748.js.map
