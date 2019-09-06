;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    487: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return r
        }),
        t.d(n, 'default', function() {
          return i
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var a = t(69),
        b = t(477)
      var r = {},
        l = { _frontmatter: r },
        g = b.b
      function i(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              b = {},
              r = Object.keys(e)
            for (a = 0; a < r.length; a++) (t = r[a]), n.indexOf(t) >= 0 || (b[t] = e[t])
            return b
          })(e, ['components'])
        return Object(a.b)(
          g,
          Object.assign({}, l, t, { components: n, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Badge'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Badge'),
            ' component to render a primitive badge.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Badge bg='blue'>\n  Hello\n</Badge>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Badge bg='blue' mr={2}>Blue</Badge>\n<Badge bg='green' mr={2}>Green</Badge>\n<Badge bg='red' mr={2}>Red</Badge>\n<Badge bg='orange' mr={2}>Orange</Badge>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Badge bg='lightBlue' mr={2}>lightBlue</Badge>\n<Badge bg='lightGreen' mr={2}>lightGreen</Badge>\n<Badge bg='lightRed' mr={2}>lightRed</Badge>\n<Badge bg='lightOrange' mr={2}>lightOrange</Badge>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Background color'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'All space props'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number or array'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets margin and padding'),
              ),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('em', { parentName: 'p' }, 'Note:'),
            ' For the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'bg'),
            ' prop, ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'blue'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'lightBlue'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'green'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'lightGreen'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'red'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'lightRed'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'orange'),
            ', and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'lightOrange'),
            ' are presets that will also set ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'color'),
            '.\nAny color may be passed in, although ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'color'),
            ' should be defined as well when not using one of the aforementioned presets.',
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-badge-md-f39df12332f6b3027eca.js.map
