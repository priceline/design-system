;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    523: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, '_frontmatter', function() {
          return l
        }),
        n.d(e, 'default', function() {
          return i
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var l = {},
        r = { _frontmatter: l },
        o = b.b
      function i(t) {
        var e = t.components,
          n = (function(t, e) {
            if (null == t) return {}
            var n,
              a,
              b = {},
              l = Object.keys(t)
            for (a = 0; a < l.length; a++) (n = l[a]), e.indexOf(n) >= 0 || (b[n] = t[n])
            return b
          })(t, ['components'])
        return Object(a.b)(
          o,
          Object.assign({}, r, n, { components: e, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Tooltip'),
          Object(a.b)(
            'p',
            null,
            'Use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Tooltip'),
            ' component to create a tooltip positioned around any element.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Tooltip bg='black' color='white' bottom right>\n  Hello Tooltip\n</Tooltip>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Usage'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'top'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'bottom'),
            ' props are ',
            Object(a.b)('em', { parentName: 'p' }, 'not'),
            ' CSS positions.\nSetting the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'top'),
            ' prop will render the arrow pointing down,\nand setting ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'bottom'),
            ' will render the arrow pointing up.',
          ),
          Object(a.b)(
            'p',
            null,
            'The physical position of the tooltip is dependent on its place in the code.\nPut it directly before the element to go on top, after it to go on bottom.',
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
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'color'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Font color'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'bottom'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'bool'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Tooltip is below content'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'top'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'bool'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Tooltip is above content'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'center'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'bool'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Centered horizontally'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'left'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'bool'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Towards the left above/below content',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'right'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'bool'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Towards the right above/below content',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'zIndex'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number or String'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '(default ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'auto'),
                  ')',
                ),
              ),
            ),
          ),
        )
      }
      i.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-tooltip-md-6068c4a24985459f712a.js.map
