;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    524: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return u
        }),
        n.d(t, 'default', function() {
          return o
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var s = n(69),
        a = n(477)
      var u = {},
        r = { _frontmatter: u },
        i = a.b
      function o(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              s,
              a = {},
              u = Object.keys(e)
            for (s = 0; s < u.length; s++) (n = u[s]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, ['components'])
        return Object(s.b)(
          i,
          Object.assign({}, r, n, { components: t, mdxType: 'MDXLayout' }),
          Object(s.b)('h1', null, 'Truncate'),
          Object(s.b)('p', null, 'Truncates long strings of text with an ellipsis.'),
          Object(s.b)(
            'p',
            null,
            Object(s.b)(
              'strong',
              { parentName: 'p' },
              'Extends: ',
              Object(s.b)('a', Object.assign({ parentName: 'strong' }, { href: '/Text' }), 'Text'),
            ),
          ),
          Object(s.b)(
            'pre',
            null,
            Object(s.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Truncate>\n  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n</Truncate>\n',
            ),
          ),
        )
      }
      o.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-truncate-md-f77edfc5ce0717dd34b7.js.map
