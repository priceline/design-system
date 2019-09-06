;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    412: function(e, t, n) {
      'use strict'
      n.r(t)
      n(124), n(177), n(38), n(9), n(32), n(14), n(12)
      var r = n(0),
        a = n.n(r),
        o = n(72)
      function i(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]
              return n
            }
          })(e) ||
          (function(e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
              return Array.from(e)
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
          })()
        )
      }
      t.default = function(e) {
        return a.a.createElement(
          o.b,
          null,
          a.a.createElement(
            o.b,
            { py: 4 },
            i(o.k.fontSizes)
              .reverse()
              .map(function(e, t) {
                return a.a.createElement(
                  o.e,
                  { key: e, fontSize: e, mb: 4, bold: !0 },
                  a.a.createElement(
                    o.i,
                    null,
                    e,
                    'px (',
                    o.k.fontSizes.length - t - 1,
                    ') Discover new deals every day.',
                  ),
                )
              }),
          ),
          a.a.createElement(
            o.b,
            { py: 4 },
            a.a.createElement(o.e, { mb: 4 }, 'Font Weight Regular'),
            a.a.createElement(o.e, { bold: !0, mb: 4 }, 'Font Weight Bold'),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-components-typography-js-18ea1f02e6116d991e9d.js.map
