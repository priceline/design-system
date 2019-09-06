;(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    519: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, '_frontmatter', function() {
          return r
        }),
        n.d(e, 'default', function() {
          return c
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var r = {},
        l = { _frontmatter: r },
        i = b.b
      function c(t) {
        var e = t.components,
          n = (function(t, e) {
            if (null == t) return {}
            var n,
              a,
              b = {},
              r = Object.keys(t)
            for (a = 0; a < r.length; a++) (n = r[a]), e.indexOf(n) >= 0 || (b[n] = t[n])
            return b
          })(t, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, l, n, { components: e, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Stamp'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Stamp'),
            ' component to subtly display attributes alongside listing cells and on product detail pages.\nUse it in conjunction with an ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Icon'),
            ' component to give it more context.\nAn Icon placed within a Stamp will inherit the assigned Stamp color.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Stamp color='purple'>\n  <Icon name='trendingUp' size={16} mr={1} /> top booked hotel\n</Stamp>\n",
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
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets background color'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'borderColor'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Sets border color'),
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
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets both Text and Icon color',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'px'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets padding-left and padding-right',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'py'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets padding-top and padding-bottom',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mx'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets margin-left and margin-right',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'my'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number, string, or array'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Sets margin-top and margin-bottom',
                ),
              ),
            ),
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-stamp-md-a4e2a0739c750ce0f9b3.js.map
