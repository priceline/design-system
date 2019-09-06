;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    522: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r
        }),
        n.d(t, 'default', function() {
          return g
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        l = { _frontmatter: r },
        c = b.b
      function g(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              r = Object.keys(e)
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          c,
          Object.assign({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'ToggleBadge'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'ToggleBadge'),
            ' component to render a primitive badge.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<ToggleBadge selected>\n  Selected\n</ToggleBadge>\n<ToggleBadge>\n  Unselected\n</ToggleBadge>\n',
            ),
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'selected'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Gives different background color',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'unSelectedBg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Background color for unselected toggle, transparent by default',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'color'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Text color'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Background color of the toggle badge',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'fontSize'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Text font size'),
              ),
            ),
          ),
        )
      }
      g.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-toggle-badge-md-b403f42aa7a8115e9007.js.map
