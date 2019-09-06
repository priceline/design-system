;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    514: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return i
        }),
        t.d(n, 'default', function() {
          return l
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var a = t(69),
        o = t(477)
      var i = {},
        b = { _frontmatter: i },
        c = o.b
      function l(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              o = {},
              i = Object.keys(e)
            for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (o[t] = e[t])
            return o
          })(e, ['components'])
        return Object(a.b)(
          c,
          Object.assign({}, b, t, { components: n, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Radio'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Radio'),
            ' component is a styled ',
            Object(a.b)('inlineCode', { parentName: 'p' }, "<input type='radio'>"),
            ' element.\nWrap the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Radio'),
            ' component with the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Label'),
            ' component to create a form control.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label fontSize={1}>\n  <Radio\n    defaultChecked\n  />\n  {' '}\n  One\n</Label>\n<Label fontSize={1}>\n  <Radio />\n  {' '}\n  Two\n</Label>\n<Label fontSize={1}>\n  <Radio disabled />\n  {' '}\n  Disabled\n</Label>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note: ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'defaultChecked'),
            ' is used in the example as an uncontrolled component.',
          ),
        )
      }
      l.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-radio-md-f87bdfe4947e54f6cde8.js.map
