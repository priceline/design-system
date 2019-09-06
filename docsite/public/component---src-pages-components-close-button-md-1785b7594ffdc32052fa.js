;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    495: function(n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, '_frontmatter', function() {
          return a
        }),
        t.d(e, 'default', function() {
          return u
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        r = t(477)
      var a = {},
        c = { _frontmatter: a },
        s = r.b
      function u(n) {
        var e = n.components,
          t = (function(n, e) {
            if (null == n) return {}
            var t,
              o,
              r = {},
              a = Object.keys(n)
            for (o = 0; o < a.length; o++) (t = a[o]), e.indexOf(t) >= 0 || (r[t] = n[t])
            return r
          })(n, ['components'])
        return Object(o.b)(
          s,
          Object.assign({}, c, t, { components: e, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'CloseButton'),
          Object(o.b)(
            'p',
            null,
            'The ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'CloseButton'),
            ' component is an extension of the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'IconButton'),
            ' component with default props for use as a button for closing modal dialogs and other UI components.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Flex p={2} color='white' bg='blue'>\n  <Box mx='auto' />\n  <CloseButton />\n</Flex>\n",
            ),
          ),
        )
      }
      u.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-close-button-md-1785b7594ffdc32052fa.js.map
