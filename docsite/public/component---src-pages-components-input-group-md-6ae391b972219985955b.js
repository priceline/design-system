;(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    509: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l
        }),
        n.d(t, 'default', function() {
          return p
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        r = n(477)
      var l = {},
        o = { _frontmatter: l },
        b = r.b
      function p(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              l = Object.keys(e)
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, ['components'])
        return Object(a.b)(
          b,
          Object.assign({}, o, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'InputGroup'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'InputGroup'),
            ' component to wrap multiple ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Input'),
            ' or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'FormField'),
            ' components with only a single border style around child elements.\nThis can be used for date range inputs that look like a single input.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<InputGroup>\n  <FormField>\n    <Label>Where from?</Label>\n    <Input\n      placeholder='Where from?'\n    />\n  </FormField>\n  <FormField>\n    <Label>Where to?</Label>\n    <Input\n      placeholder='Where to?'\n    />\n  </FormField>\n</InputGroup>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
            ' Focus and validation states will need to pass a value to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'borderColor'),
            ' prop',
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'borderColor'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Override the default border color',
                ),
              ),
            ),
          ),
        )
      }
      p.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-input-group-md-6ae391b972219985955b.js.map
