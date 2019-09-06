;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    508: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return c
        }),
        t.d(n, 'default', function() {
          return u
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var a = t(69),
        l = t(477)
      var c = {},
        o = { _frontmatter: c },
        r = l.b
      function u(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              l = {},
              c = Object.keys(e)
            for (a = 0; a < c.length; a++) (t = c[a]), n.indexOf(t) >= 0 || (l[t] = e[t])
            return l
          })(e, ['components'])
        return Object(a.b)(
          r,
          Object.assign({}, o, t, { components: n, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Input'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Input'),
            ' component is a styled ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<input>'),
            ' element.\nIt accepts all native HTML attributes for the element.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Input\n  id='email'\n  name='email'\n  defaultValue='hello@example.com'\n/>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label htmlFor='email'>Email Address</Label>\n<Input\n  id='email'\n  name='email'\n  defaultValue='hello@example.com'\n/>\n",
            ),
          ),
        )
      }
      u.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-input-md-a0779ecbd6c60efc3273.js.map
