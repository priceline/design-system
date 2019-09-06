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
          o.a,
          null,
          a.a.createElement(
            o.a,
            { py: 4 },
            i(o.i.fontSizes)
              .reverse()
              .map(function(e, t) {
                return a.a.createElement(
                  o.d,
                  { key: e, fontSize: e, mb: 4, bold: !0 },
                  a.a.createElement(
                    o.g,
                    null,
                    e,
                    'px (',
                    o.i.fontSizes.length - t - 1,
                    ') Discover new deals every day.',
                  ),
                )
              }),
          ),
          a.a.createElement(
            o.a,
            { py: 4 },
            a.a.createElement(o.d, { mb: 4 }, 'Font Weight Regular'),
            a.a.createElement(o.d, { bold: !0, mb: 4 }, 'Font Weight Bold'),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-components-typography-js-fce5b538164c05e056b2.js.map
