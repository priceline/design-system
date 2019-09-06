;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    502: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l
        }),
        n.d(t, 'default', function() {
          return s
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var l = {},
        r = { _frontmatter: l },
        i = b.b
      function s(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              l = Object.keys(e)
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, r, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Hide'),
          Object(a.b)('p', null, 'Conditionally hides content based on viewport width.'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)(
              'strong',
              { parentName: 'p' },
              'Extends: ',
              Object(a.b)('a', Object.assign({ parentName: 'strong' }, { href: '/Box' }), 'Box'),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            "This component's props work differently than other mobile-first min-width\nmedia queries since it's often useful to hide an element only at certain breakpoints.",
          ),
          Object(a.b)('p', null, 'Hidden below the first breakpoint'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Hide xs>\n  Hide xs\n</Hide>\n',
            ),
          ),
          Object(a.b)('p', null, 'Hidden at large breakpoints'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Hide lg xl>\n  Hide lg xl\n</Hide>\n',
            ),
          ),
          Object(a.b)('p', null, 'Hidden when printing'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Hide print>\n  Hide for printing\n</Hide>\n',
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'xs'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none below the sm breakpoint',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'sm'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none between the sm and md breakpoint',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'md'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none between the md and lg breakpoint',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'lg'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none between the lg and xl breakpoint',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'xl'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none above the xl breakpoint',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'print'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets display: none for media print',
                ),
              ),
            ),
          ),
        )
      }
      s.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-hide-md-1477e1f0c112609cbd31.js.map
