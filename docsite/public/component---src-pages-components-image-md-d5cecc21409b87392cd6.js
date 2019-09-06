;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    506: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return o
        }),
        t.d(n, 'default', function() {
          return b
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var a = t(69),
        c = t(477)
      var o = {},
        r = { _frontmatter: o },
        s = c.b
      function b(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              c = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (c[t] = e[t])
            return c
          })(e, ['components'])
        return Object(a.b)(
          s,
          Object.assign({}, r, t, { components: n, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Image'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Image'),
            ' component is a styled ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<image>'),
            ' element with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'max-width: 100%'),
            '.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Image\n  alt='Brooklyn'\n  src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20'\n/>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Image\n  alt='Brooklyn'\n  src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20'\n  width='300'\n  height='200'\n/>\n",
            ),
          ),
        )
      }
      b.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-image-md-d5cecc21409b87392cd6.js.map
