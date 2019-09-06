;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    411: function(e, t, n) {
      'use strict'
      n.r(t)
      n(15), n(23), n(12), n(13), n(9), n(17)
      var a = n(0),
        r = n.n(a),
        c = n(72),
        l = n(531),
        o = Object.keys(l),
        i = function(e) {
          return r.a.createElement(c.b, Object.assign({}, e, { width: [1 / 3, null, 1 / 3, 0.2], mb: 3, px: 2 }))
        },
        s = function(e) {
          return e.icons.map(function(e) {
            return r.a.createElement(
              i,
              { key: e, py: 4, bg: 'lightGray' },
              r.a.createElement(
                c.a,
                {
                  href:
                    ((t = l[e].path),
                    ((n =
                      '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg"\n  viewbox="0 0 24 24" width="24" height="24">\n  <path d="' +
                      t +
                      '" />\n</svg>'),
                    'data:image/svg+xml;utf8,' + n).replace('\n', ' ')),
                  download: e + '.svg',
                  title: 'Download ' + e + ' as SVG',
                  hoverColor: 'blue',
                },
                r.a.createElement(
                  c.d,
                  { mb: 3, align: 'center', justify: 'center' },
                  r.a.createElement(c.f, { name: e, size: 48 }),
                ),
              ),
              r.a.createElement(c.g, { align: 'center' }, r.a.createElement(Code, { fontSize: 0, color: 'gray' }, e)),
            )
            var t, n
          })
        }
      t.default = function(e) {
        return r.a.createElement(
          c.b,
          null,
          r.a.createElement(c.d, { wrap: !0, pt: 4 }, r.a.createElement(s, { icons: o })),
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-components-iconography-js-dee3552c2cc37c0ff4a8.js.map
