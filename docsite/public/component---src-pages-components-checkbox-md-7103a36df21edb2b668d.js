;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    494: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return a
        }),
        t.d(n, 'default', function() {
          return i
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        c = t(477)
      var a = {},
        b = { _frontmatter: a },
        r = c.b
      function i(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              o,
              c = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (c[t] = e[t])
            return c
          })(e, ['components'])
        return Object(o.b)(
          r,
          Object.assign({}, b, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Checkbox'),
          Object(o.b)(
            'p',
            null,
            'Use the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Checkbox'),
            ' component as a styled version of the HTML ',
            Object(o.b)('inlineCode', { parentName: 'p' }, "<input type='checkbox'>"),
            '\nWrap the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Checkbox'),
            ' component with the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Label'),
            ' component to create a form control.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label fontSize={1}>\n  <Checkbox id='one' />\n  {' '}\n  One\n</Label>\n<Label fontSize={1}>\n  <Checkbox\n    id='two'\n    checked\n  />\n  {' '}\n  Two\n</Label>\n<Label fontSize={1}>\n  <Checkbox\n    id='three'\n    disabled\n  />\n  {' '}\n  Three\n</Label>\n",
            ),
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-checkbox-md-7103a36df21edb2b668d.js.map
