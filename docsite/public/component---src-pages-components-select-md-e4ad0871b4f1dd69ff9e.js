;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    517: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return i
        }),
        t.d(n, 'default', function() {
          return l
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        a = t(477)
      var i = {},
        c = { _frontmatter: i },
        s = a.b
      function l(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              o,
              a = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (a[t] = e[t])
            return a
          })(e, ['components'])
        return Object(o.b)(
          s,
          Object.assign({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Select'),
          Object(o.b)(
            'p',
            null,
            'The ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Select'),
            ' component is a styled ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<select>'),
            ' form element designed to match the look of the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Input'),
            ' component.\nUse this component in forms in place of the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<select>'),
            ' element – it accepts all the same HTML attributes as the native element.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Label htmlFor="cabinClass">Cabin Class</Label>\n<Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">\n  <option>Economy</option>\n  <option>Premium Economy</option>\n  <option>Business</option>\n  <option>First Class</option>\n  <option>\n    With a super long label that doesn\'t get clobbered by the chevron\n  </option>\n</Select>\n',
            ),
          ),
        )
      }
      l.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-select-md-e4ad0871b4f1dd69ff9e.js.map
