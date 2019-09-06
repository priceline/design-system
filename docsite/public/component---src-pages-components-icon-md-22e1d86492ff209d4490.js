;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    504: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return i
        }),
        n.d(t, 'default', function() {
          return c
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var i = {},
        r = { _frontmatter: i },
        l = b.b
      function c(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              i = Object.keys(e)
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          l,
          Object.assign({}, r, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Icon'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Icon'),
            ' component for SVG icons.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Icon\n  name='flame'\n  color='orange'\n/>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Accessibility for Icons'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Icon\n  name='Chat'\n  color='orange'\n  title='Airplane Icon'\n  titleId='unique-airplane-title-id'\n  desc='Airplane Icon description'\n  descId='unique-airplane-desc-id'\n/>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('inlineCode', { parentName: 'p' }, 'aria-hidden="true"'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'focusable="false"'),
            ' are set by default to icons.\nWhen a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'title'),
            ' prop is passed, ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'aria-hidden'),
            ' is set to false.',
          ),
          Object(a.b)(
            'p',
            null,
            'In order to support older browsers, please pass in a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'titleId'),
          ),
          Object(a.b)(
            'p',
            null,
            'To add a descripton, please pass in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'desc'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'descId'),
            ' .\n',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<desc id="{unique-desc-id}">{description}</desc>'),
            ' is generated when ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'desc'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'descId'),
            ' props are passed',
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'name'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Icon key name'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'size'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Width and height in pixels'),
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
                  'A color key from ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'theme.colors'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'title'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Title for to the icon'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'titleId'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Unique ID for the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<title>'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'desc'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Description for the icon'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'descId'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Unique ID for the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<desc>'),
                ),
              ),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'For a full list of available icons, see ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '/iconography' }), 'Iconography'),
            '.',
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-icon-md-22e1d86492ff209d4490.js.map
