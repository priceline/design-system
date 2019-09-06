;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    510: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return b
        }),
        n.d(t, 'default', function() {
          return c
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        l = n(477)
      var b = {},
        r = { _frontmatter: b },
        i = l.b
      function c(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              l = {},
              b = Object.keys(e)
            for (a = 0; a < b.length; a++) (n = b[a]), t.indexOf(n) >= 0 || (l[n] = e[n])
            return l
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, r, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Label'),
          Object(a.b)(
            'p',
            null,
            'Styled form ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<label>'),
            ' element.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label htmlFor='email'>Email</Label>\n<Input\n  id='email'\n  name='email'\n/>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label fontSize={1} nowrap>\n  <Radio />\n  {' '}\n  This label will not wrap\n</Label>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Accessibility'),
          Object(a.b)(
            'p',
            null,
            'HTML ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<label>'),
            ' elements are ',
            Object(a.b)('strong', { parentName: 'p' }, 'always required'),
            ' with form elements.\nUse the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'htmlFor'),
            " attribute to link a label with its related form control's ",
            Object(a.b)('inlineCode', { parentName: 'p' }, 'id'),
            '.',
          ),
          Object(a.b)(
            'p',
            null,
            'Using placeholders in place of a label ',
            Object(a.b)('strong', { parentName: 'p' }, 'is not'),
            ' acceptable.\nSee ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://a11yproject.com/posts/placeholder-input-elements/' }),
              'How-to: Use Placeholder Attributes',
            ),
            ' for more.',
          ),
          Object(a.b)('h3', null, 'Hidden Prop'),
          Object(a.b)(
            'p',
            null,
            'To hide a form label but still allow screen readers to announce the element, use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'hidden'),
            ' prop.',
          ),
          Object(a.b)(
            'p',
            null,
            'This ',
            Object(a.b)('strong', { parentName: 'p' }, 'can still cause accessiblity issues'),
            " if there isn't an alternative, visible label for people to read visually.\nThe ",
            Object(a.b)('inlineCode', { parentName: 'p' }, 'placeholder'),
            ' attribute ',
            Object(a.b)('strong', { parentName: 'p' }, 'is not'),
            ' a replacement for a label.',
          ),
          Object(a.b)('p', null, 'See the following for more info:'),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://a11yproject.com/posts/placeholder-input-elements/' },
                ),
                'How-to: Use Placeholder Attributes',
              ),
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign({ parentName: 'li' }, { href: 'https://a11yproject.com/posts/how-to-hide-content/' }),
                'How-to: Hide Content',
              ),
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Label hidden htmlFor='email'>Email</Label>\n<Input\n  id='email'\n  name='email'\n/>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'hidden'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Visually hide the label'),
              ),
            ),
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-label-md-7c535ebfcb7f57981fc5.js.map
