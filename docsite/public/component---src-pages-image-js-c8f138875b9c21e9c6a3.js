;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    408: function(e, t, a) {
      'use strict'
      a.r(t)
      var r = a(475),
        i = a(0),
        n = a.n(i),
        s = a(457),
        o = a(476),
        d = a.n(o)
      t.default = function() {
        return n.a.createElement(s.b, {
          query: '2011440971',
          render: function(e) {
            return n.a.createElement(d.a, { fluid: e.placeholderImage.childImageSharp.fluid })
          },
          data: r,
        })
      }
    },
    457: function(e, t, a) {
      'use strict'
      a.d(t, 'b', function() {
        return l
      })
      var r = a(0),
        i = a.n(r),
        n = a(89),
        s = a.n(n)
      a.d(t, 'a', function() {
        return s.a
      })
      a(458), a(27).default.enqueue
      var o = i.a.createContext({})
      function d(e) {
        var t = e.staticQueryData,
          a = e.data,
          r = e.query,
          n = e.render,
          s = a ? a.data : t[r] && t[r].data
        return i.a.createElement(
          i.a.Fragment,
          null,
          s && n(s),
          !s && i.a.createElement('div', null, 'Loading (StaticQuery)'),
        )
      }
      var l = function(e) {
        var t = e.data,
          a = e.query,
          r = e.render,
          n = e.children
        return i.a.createElement(o.Consumer, null, function(e) {
          return i.a.createElement(d, { data: t, query: a, render: r || n, staticQueryData: e })
        })
      }
    },
    458: function(e, t, a) {
      var r
      e.exports = ((r = a(459)) && r.default) || r
    },
    459: function(e, t, a) {
      'use strict'
      a.r(t)
      a(14), a(12), a(13), a(9), a(17)
      var r = a(0),
        i = a.n(r),
        n = a(122)
      function s(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        )
      }
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? i.a.createElement(
              n.a,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(a)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                      }),
                    )),
                    r.forEach(function(t) {
                      s(e, t, a[t])
                    })
                }
                return e
              })({ location: t, pageResources: a }, a.json),
            )
          : null
      }
    },
    475: function(e) {
      e.exports = {
        data: {
          placeholderImage: {
            childImageSharp: {
              fluid: {
                base64:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                aspectRatio: 1,
                src: '/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png',
                srcSet:
                  '/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w',
                sizes: '(max-width: 300px) 100vw, 300px',
              },
            },
          },
        },
      }
    },
    476: function(e, t, a) {
      'use strict'
      a(12), a(13), a(9), a(124), a(176), a(477)
      var r = a(1)
      ;(t.__esModule = !0), (t.default = void 0)
      var i,
        n = r(a(92)),
        s = r(a(93)),
        o = r(a(125)),
        d = r(a(2)),
        l = r(a(0)),
        c = r(a(5)),
        u = function(e) {
          var t = (0, d.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = 'eager'),
            t.fluid && (t.fluid = v([].concat(t.fluid))),
            t.fixed && (t.fixed = v([].concat(t.fixed))),
            t
          )
        },
        f = function(e) {
          var t = e.fluid,
            a = e.fixed
          return ((t && t[0]) || (a && a[0])).src
        },
        g = Object.create({}),
        p = function(e) {
          var t = u(e),
            a = f(t)
          return g[a] || !1
        },
        h = 'undefined' != typeof HTMLImageElement && 'loading' in HTMLImageElement.prototype,
        m = 'undefined' != typeof window,
        b = m && window.IntersectionObserver,
        y = new WeakMap()
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r && l.default.createElement('source', { type: 'image/webp', media: i, srcSet: r, sizes: n }),
            l.default.createElement('source', { media: i, srcSet: a, sizes: n }),
          )
        })
      }
      function v(e) {
        var t = [],
          a = []
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e)
          }),
          t.concat(a)
        )
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG
          return l.default.createElement('source', { key: t, media: a, srcSet: r })
        })
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64
          return l.default.createElement('source', { key: t, media: a, srcSet: r })
        })
      }
      function O(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes
        return (
          '<source ' +
          (t ? "type='image/webp' " : '') +
          (i ? 'media="' + i + '" ' : '') +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : '') +
          '/>'
        )
      }
      var I = function(e, t) {
          var a =
            (void 0 === i &&
              'undefined' != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) && (i.unobserve(e.target), y.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' },
              )),
            i)
          return (
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e)
            }
          )
        },
        L = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
            i = e.title ? 'title="' + e.title + '" ' : '',
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : '',
            o = e.height ? 'height="' + e.height + '" ' : '',
            d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : '',
            l = e.loading ? 'loading="' + e.loading + '" ' : '',
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : ''
          return (
            '<picture>' +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? O(e, !0) : '') + O(e)
              })
              .join('') +
            '<img ' +
            l +
            s +
            o +
            a +
            r +
            t +
            n +
            i +
            d +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        R = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            n = l.default.createElement(z, (0, d.default)({ src: t }, i))
          return a.length > 1 ? l.default.createElement('picture', null, r(a), n) : n
        },
        z = l.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            g = (0, o.default)(e, ['sizes', 'srcSet', 'src', 'style', 'onLoad', 'onError', 'loading', 'draggable'])
          return l.default.createElement(
            'img',
            (0, d.default)({ sizes: a, srcSet: r, src: i }, g, {
              onLoad: s,
              onError: c,
              ref: t,
              loading: u,
              draggable: f,
              style: (0, d.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                n,
              ),
            }),
          )
        })
      z.propTypes = { style: c.default.object, onError: c.default.func, onLoad: c.default.func }
      var A = (function(e) {
        function t(t) {
          var a
          ;((a = e.call(this, t) || this).seenBefore = m && p(t)),
            (a.addNoScript = !(t.critical && !t.fadeIn)),
            (a.useIOSupport = !h && b && !t.critical && !a.seenBefore)
          var r = t.critical || (m && (h || !a.useIOSupport))
          return (
            (a.state = { isVisible: r, imgLoaded: !1, imgCached: !1, fadeIn: !a.seenBefore && t.fadeIn }),
            (a.imageRef = l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, s.default)((0, s.default)(a)))),
            (a.handleRef = a.handleRef.bind((0, s.default)((0, s.default)(a)))),
            a
          )
        }
        ;(0, n.default)(t, e)
        var a = t.prototype
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners()
          }),
          (a.handleRef = function(e) {
            var t = this
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = I(e, function() {
                var e = p(t.props)
                t.state.isVisible || 'function' != typeof t.props.onStartLoad || t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({ imgLoaded: e, imgCached: !!t.imageRef.current.currentSrc })
                  })
              }))
          }),
          (a.handleImageLoaded = function() {
            var e, t, a
            ;(e = this.props),
              (t = u(e)),
              (a = f(t)),
              (g[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              g = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              m = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              O = e.loading,
              I = e.draggable,
              A = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, d.default)({ opacity: A ? 1 : 0, transition: V ? 'opacity ' + b + 'ms' : 'none' }, o),
              N = 'boolean' == typeof m ? 'lightgray' : m,
              q = { transitionDelay: b + 'ms' },
              T = (0, d.default)({ opacity: this.state.imgLoaded ? 0 : 1 }, V && q, o, f),
              x = { title: t, alt: this.state.isVisible ? '' : a, style: T, className: g }
            if (p) {
              var j = p,
                W = j[0]
              return l.default.createElement(
                y,
                {
                  className: (r || '') + ' gatsby-image-wrapper',
                  style: (0, d.default)({ position: 'relative', overflow: 'hidden' }, n),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(W.srcSet),
                },
                l.default.createElement(y, { style: { width: '100%', paddingBottom: 100 / W.aspectRatio + '%' } }),
                N &&
                  l.default.createElement(y, {
                    title: t,
                    style: (0, d.default)(
                      {
                        backgroundColor: N,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      V && q,
                    ),
                  }),
                W.base64 &&
                  l.default.createElement(R, { src: W.base64, spreadProps: x, imageVariants: j, generateSources: E }),
                W.tracedSVG &&
                  l.default.createElement(R, {
                    src: W.tracedSVG,
                    spreadProps: x,
                    imageVariants: j,
                    generateSources: w,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    S(j),
                    l.default.createElement(z, {
                      alt: a,
                      title: t,
                      sizes: W.sizes,
                      src: W.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: W.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: O,
                      draggable: I,
                    }),
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: L((0, d.default)({ alt: a, title: t, loading: O }, W, { imageVariants: j })),
                    },
                  }),
              )
            }
            if (h) {
              var P = h,
                M = P[0],
                k = (0, d.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: M.width,
                    height: M.height,
                  },
                  n,
                )
              return (
                'inherit' === n.display && delete k.display,
                l.default.createElement(
                  y,
                  {
                    className: (r || '') + ' gatsby-image-wrapper',
                    style: k,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(M.srcSet),
                  },
                  N &&
                    l.default.createElement(y, {
                      title: t,
                      style: (0, d.default)(
                        { backgroundColor: N, width: M.width, opacity: this.state.imgLoaded ? 0 : 1, height: M.height },
                        V && q,
                      ),
                    }),
                  M.base64 &&
                    l.default.createElement(R, { src: M.base64, spreadProps: x, imageVariants: P, generateSources: E }),
                  M.tracedSVG &&
                    l.default.createElement(R, {
                      src: M.tracedSVG,
                      spreadProps: x,
                      imageVariants: P,
                      generateSources: w,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      S(P),
                      l.default.createElement(z, {
                        alt: a,
                        title: t,
                        width: M.width,
                        height: M.height,
                        sizes: M.sizes,
                        src: M.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: M.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: O,
                        draggable: I,
                      }),
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: L((0, d.default)({ alt: a, title: t, loading: O }, M, { imageVariants: P })),
                      },
                    }),
                )
              )
            }
            return null
          }),
          t
        )
      })(l.default.Component)
      A.defaultProps = { fadeIn: !0, durationFadeIn: 500, alt: '', Tag: 'div', loading: 'lazy' }
      var V = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        }),
        C = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        })
      A.propTypes = {
        resolutions: V,
        sizes: C,
        fixed: c.default.oneOfType([V, c.default.arrayOf(V)]),
        fluid: c.default.oneOfType([C, c.default.arrayOf(C)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(['auto', 'lazy', 'eager']),
        draggable: c.default.bool,
      }
      var N = A
      t.default = N
    },
    477: function(e, t, a) {
      'use strict'
      a(74)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '')
        }
      })
    },
  },
])
//# sourceMappingURL=component---src-pages-image-js-c8f138875b9c21e9c6a3.js.map
