;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    410: function(e, t, n) {
      'use strict'
      n.r(t)
      n(23), n(26), n(12), n(13), n(9), n(17)
      var r = n(0),
        a = n.n(r),
        o = n(6),
        i = n(72),
        l = n(531),
        c = n.n(l)
      var s = (function(e) {
          var t, n
          function r() {
            var t
            return (
              ((t = e.call(this) || this).handleClick = function(e) {
                c()(t.ghost), document.execCommand('copy')
              }),
              t
            )
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function() {
              var e = this,
                t = a.a.Children.only(this.props.children)
              return [
                a.a.cloneElement(t, { onClick: this.handleClick }),
                a.a.createElement('div', {
                  ref: function(t) {
                    return (e.ghost = t)
                  },
                  children: this.props.text,
                  style: { position: 'absolute', zIndex: -1, opacity: 0 },
                }),
              ]
            }),
            r
          )
        })(a.a.Component),
        u = Object.keys(i.l.colors)
          .filter(function(e) {
            return !/[0-9]$/.test(e)
          })
          .map(function(e) {
            return { name: e, value: i.l.colors[e] }
          })
          .filter(function(e) {
            return !Array.isArray(e.value)
          }),
        p = u.filter(function(e) {
          return !/^(lightGray|gray|borderGray|darkGray)$/.test(e.name)
        }),
        d = u.filter(function(e) {
          return /^(lightGray|gray|borderGray|darkGray)$/.test(e.name)
        }),
        m = Object(o.d)(i.b).withConfig({ displayName: 'color__ColorChip', componentId: 'sc-1lmakts-0' })([
          'height:100px;width:100%;border-radius:2px 2px 0 0;transition:all 0.1s ease;',
        ]),
        f = o.d.button.withConfig({ displayName: 'color__HexButton', componentId: 'sc-1lmakts-1' })([
          'width:100%;display:inline-block;position:relative;font-family:inherit;font-size:12px;margin:0;padding:0;color:inherit;text-align:left;background-color:transparent;border:0;border-radius:0;appearance:none;transition:all 0.125s ease;box-shadow:0 4px 4px 0 rgba(0,0,0,0.08);&:hover{box-shadow:0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);}&:active{transform:scale(0.9);}& > span{top:0;left:0;position:absolute;font-size:12px;padding:8px 0;width:100%;color:#fff;border-radius:2px 2px 0 0;background-color:#001833;text-align:center;opacity:0;transition-property:opacity;transition-duration:0.125s;transition-timing-function:ease-out;}&:hover > span{opacity:1;}',
        ]),
        b = function(e) {
          var t = e.name,
            n = e.value
          return a.a.createElement(
            i.d,
            { borderWidth: 0, m: 0 },
            a.a.createElement(
              s,
              { text: n },
              a.a.createElement(
                f,
                null,
                a.a.createElement(m, { bg: n }),
                a.a.createElement('span', null, 'Press to copy'),
                a.a.createElement(i.b, { p: 2 }, a.a.createElement(i.h, { fontSize: 1, mb: 1, align: 'left' }, t)),
              ),
            ),
          )
        },
        h = function(e) {
          return a.a.createElement(i.b, Object.assign({}, e, { width: [0.5, null, 1 / 3, 0.25, 1 / 6], mb: 4, px: 2 }))
        },
        y = function(e) {
          return e.colors.map(function(e) {
            return a.a.createElement(h, { key: e.key }, a.a.createElement(b, e))
          })
        }
      t.default = function(e) {
        return a.a.createElement(
          i.b,
          null,
          a.a.createElement(
            i.e,
            { wrap: !0, mx: -2, pt: 4 },
            a.a.createElement(y, { colors: p }),
            a.a.createElement(y, { colors: d }),
          ),
        )
      }
    },
    531: function(e, t, n) {
      n(38),
        n(40),
        n(9),
        (e.exports = function(e) {
          var t
          if ('SELECT' === e.nodeName) e.focus(), (t = e.value)
          else if ('INPUT' === e.nodeName || 'TEXTAREA' === e.nodeName) {
            var n = e.hasAttribute('readonly')
            n || e.setAttribute('readonly', ''),
              e.select(),
              e.setSelectionRange(0, e.value.length),
              n || e.removeAttribute('readonly'),
              (t = e.value)
          } else {
            e.hasAttribute('contenteditable') && e.focus()
            var r = window.getSelection(),
              a = document.createRange()
            a.selectNodeContents(e), r.removeAllRanges(), r.addRange(a), (t = r.toString())
          }
          return t
        })
    },
  },
])
//# sourceMappingURL=component---src-pages-components-color-js-88cedd4653e950e0ec2a.js.map
