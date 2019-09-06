;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    501: function(e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, '_frontmatter', function() {
          return l
        }),
        a.d(n, 'default', function() {
          return c
        })
      a(10), a(11), a(7), a(12), a(21), a(0)
      var t = a(69),
        i = a(477)
      var l = {},
        s = { _frontmatter: l },
        b = i.b
      function c(e) {
        var n = e.components,
          a = (function(e, n) {
            if (null == e) return {}
            var a,
              t,
              i = {},
              l = Object.keys(e)
            for (t = 0; t < l.length; t++) (a = l[t]), n.indexOf(a) >= 0 || (i[a] = e[a])
            return i
          })(e, ['components'])
        return Object(t.b)(
          b,
          Object.assign({}, s, a, { components: n, mdxType: 'MDXLayout' }),
          Object(t.b)('h1', null, 'Heading'),
          Object(t.b)(
            'p',
            null,
            'The ',
            Object(t.b)('inlineCode', { parentName: 'p' }, 'Heading'),
            ' component is an extension of the ',
            Object(t.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: '/Text' }),
              Object(t.b)('inlineCode', { parentName: 'a' }, 'Text'),
            ),
            ' component intended for headings.',
          ),
          Object(t.b)(
            'p',
            null,
            Object(t.b)(
              'strong',
              { parentName: 'p' },
              'Extends: ',
              Object(t.b)('a', Object.assign({ parentName: 'strong' }, { href: '/Text' }), 'Text'),
            ),
          ),
          Object(t.b)(
            'pre',
            null,
            Object(t.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Heading>Hello</Heading>\n',
            ),
          ),
          Object(t.b)('h2', null, 'HTML Heading Elements'),
          Object(t.b)(
            'p',
            null,
            'By default, the ',
            Object(t.b)('inlineCode', { parentName: 'p' }, 'Heading'),
            ' component renders an ',
            Object(t.b)('inlineCode', { parentName: 'p' }, '<h3>'),
            ' element with default font size 24px.\nTo use a different heading level, use the following:',
          ),
          Object(t.b)(
            'pre',
            null,
            Object(t.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Heading.h1>This is a h1 element</Heading.h1>\n<Heading.h2>This is a h2 element</Heading.h2>\n<Heading.h3>This is a h3 element</Heading.h3>\n<Heading.h4>This is a h4 element</Heading.h4>\n<Heading.h5>This is a h5 element</Heading.h5>\n<Heading.h6>This is a h6 element</Heading.h6>\n',
            ),
          ),
          Object(t.b)('h2', null, 'Examples'),
          Object(t.b)(
            'pre',
            null,
            Object(t.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Heading.h1>Hello</Heading.h1>\n',
            ),
          ),
          Object(t.b)(
            'pre',
            null,
            Object(t.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Heading.h5 m={3} bold>Hello</Heading.h5>\n',
            ),
          ),
          Object(t.b)(
            'pre',
            null,
            Object(t.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Heading.h2 color='purple'>Purple</Heading.h2>\n",
            ),
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-heading-md-689385baf276b60fb219.js.map
