;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    492: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return r
        }),
        t.d(n, 'default', function() {
          return p
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var o = t(69),
        a = t(477),
        i = t(20)
      var r = {},
        b = { _frontmatter: r },
        c = a.b
      function p(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              o,
              a = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (a[t] = e[t])
            return a
          })(e, ['components'])
        return Object(o.b)(
          c,
          Object.assign({}, b, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', null, 'Markdown Example'),
          Object(o.b)(
            'p',
            null,
            'This is a markdown (',
            Object(o.b)('inlineCode', { parentName: 'p' }, '.md'),
            ' or ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '.mdx'),
            ') file that is being transformed with ',
            Object(o.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://gatsby-mdx.netlify.com/' }),
              Object(o.b)('inlineCode', { parentName: 'a' }, 'gatsby-mdx'),
            ),
            '.',
          ),
          Object(o.b)('p', null, "What's cool about it is you can mix markdown with React components:"),
          Object(o.b)(
            'p',
            null,
            Object(o.b)(
              i.b,
              {
                color: 'text',
                onClick: function() {
                  return alert('You clicked the button! 🍪')
                },
                mdxType: 'Button',
              },
              "I'm a React Button Component 🙌",
            ),
          ),
          Object(o.b)(
            'p',
            null,
            'and the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<ResetStyle />'),
            ' component in the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<Layout />'),
            ' is providing a consistent style for all the pages with minimal effort',
          ),
          Object(o.b)(
            'p',
            null,
            'You can also mix ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '.js'),
            ' and ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '.md'),
            ' or ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '.mdx'),
            ' files in your pages folder as needed',
          ),
        )
      }
      p.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-button-mdx-cf2a12e8dd075cc5ac07.js.map
