;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48, 47],
  {
    478: function(e, t, a) {
      'use strict'
      a.r(t)
      var r = a(527),
        i = a(0),
        s = a.n(i),
        n = a(60),
        d = a(528),
        o = a.n(d)
      t.default = function() {
        return s.a.createElement(n.b, {
          query: '2011440971',
          render: function(e) {
            return s.a.createElement(o.a, { fluid: e.placeholderImage.childImageSharp.fluid })
          },
          data: r,
        })
      }
    },
    483: function(e, t, a) {
      'use strict'
      a.r(t)
      var r = a(0),
        i = a.n(r),
        s = a(60),
        n = a(477),
        d = a(478)
      t.default = function() {
        return i.a.createElement(
          n.a,
          null,
          i.a.createElement('h1', null, 'Hi there!'),
          i.a.createElement(
            'p',
            null,
            i.a.createElement('strong', null, 'Thanks for using awesome-gatsby-starter!'),
            ' Remember to',
            ' ',
            i.a.createElement(
              'a',
              { href: 'https://github.com/South-Paw/awesome-gatsby-starter' },
              'drop a ⭐ on the project',
            ),
            ' if you find it useful.',
          ),
          i.a.createElement(
            'div',
            { style: { maxWidth: '300px', marginBottom: '1.45rem' } },
            i.a.createElement(d.default, null),
          ),
          i.a.createElement(s.a, { to: '/page-2/' }, 'Go to page 2'),
        )
      }
    },
    527: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}',
      )
    },
    528: function(e, t, a) {
      'use strict'
      a(10), a(11), a(7), a(140), a(196), a(529)
      var r = a(1)
      ;(t.__esModule = !0), (t.default = void 0)
      var i,
        s = r(a(104)),
        n = r(a(103)),
        d = r(a(141)),
        o = r(a(2)),
        l = r(a(0)),
        c = r(a(5)),
        u = function(e) {
          var t = (0, o.default)({}, e),
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
            s = e.sizes
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r && l.default.createElement('source', { type: 'image/webp', media: i, srcSet: r, sizes: s }),
            l.default.createElement('source', { media: i, srcSet: a, sizes: s }),
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
          [].concat(t, a)
        )
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG
          return l.default.createElement('source', { key: t, media: a, srcSet: r })
        })
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64
          return l.default.createElement('source', { key: t, media: a, srcSet: r })
        })
      }
      function I(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          s = e.sizes
        return (
          '<source ' +
          (t ? "type='image/webp' " : '') +
          (i ? 'media="' + i + '" ' : '') +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (s ? 'sizes="' + s + '" ' : '') +
          '/>'
        )
      }
      var L = function(e, t) {
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
        R = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
            i = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            n = e.width ? 'width="' + e.width + '" ' : '',
            d = e.height ? 'height="' + e.height + '" ' : '',
            o = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : '',
            l = e.loading ? 'loading="' + e.loading + '" ' : '',
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : ''
          return (
            '<picture>' +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? I(e, !0) : '') + I(e)
              })
              .join('') +
            '<img ' +
            l +
            n +
            d +
            a +
            r +
            t +
            s +
            i +
            o +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        z = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            s = l.default.createElement(O, (0, o.default)({ src: t }, i))
          return a.length > 1 ? l.default.createElement('picture', null, r(a), s) : s
        },
        O = l.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            s = e.style,
            n = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            g = (0, d.default)(e, ['sizes', 'srcSet', 'src', 'style', 'onLoad', 'onError', 'loading', 'draggable'])
          return l.default.createElement(
            'img',
            (0, o.default)({ sizes: a, srcSet: r, src: i }, g, {
              onLoad: n,
              onError: c,
              ref: t,
              loading: u,
              draggable: f,
              style: (0, o.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                s,
              ),
            }),
          )
        })
      O.propTypes = { style: c.default.object, onError: c.default.func, onLoad: c.default.func }
      var A = (function(e) {
        function t(t) {
          var a
          ;((a = e.call(this, t) || this).seenBefore = m && p(t)),
            (a.isCritical = 'eager' === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !h && b && !a.isCritical && !a.seenBefore)
          var r = a.isCritical || (m && (h || !a.useIOSupport))
          return (
            (a.state = { isVisible: r, imgLoaded: !1, imgCached: !1, fadeIn: !a.seenBefore && t.fadeIn }),
            (a.imageRef = l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, s.default)(a))),
            (a.handleRef = a.handleRef.bind((0, s.default)(a))),
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
              this.isCritical)
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
              (this.cleanUpListeners = L(e, function() {
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
              s = void 0 === i ? {} : i,
              n = e.imgStyle,
              d = void 0 === n ? {} : n,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              g = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              m = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              I = e.loading,
              L = e.draggable,
              A = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, o.default)({ opacity: A ? 1 : 0, transition: V ? 'opacity ' + b + 'ms' : 'none' }, d),
              N = 'boolean' == typeof m ? 'lightgray' : m,
              T = { transitionDelay: b + 'ms' },
              x = (0, o.default)({ opacity: this.state.imgLoaded ? 0 : 1 }, V && T, {}, d, {}, f),
              W = { title: t, alt: this.state.isVisible ? '' : a, style: x, className: g }
            if (p) {
              var q = p,
                M = q[0]
              return l.default.createElement(
                y,
                {
                  className: (r || '') + ' gatsby-image-wrapper',
                  style: (0, o.default)({ position: 'relative', overflow: 'hidden' }, s),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(M.srcSet),
                },
                l.default.createElement(y, { style: { width: '100%', paddingBottom: 100 / M.aspectRatio + '%' } }),
                N &&
                  l.default.createElement(y, {
                    title: t,
                    style: (0, o.default)(
                      {
                        backgroundColor: N,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      V && T,
                    ),
                  }),
                M.base64 &&
                  l.default.createElement(z, { src: M.base64, spreadProps: W, imageVariants: q, generateSources: w }),
                M.tracedSVG &&
                  l.default.createElement(z, {
                    src: M.tracedSVG,
                    spreadProps: W,
                    imageVariants: q,
                    generateSources: E,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    S(q),
                    l.default.createElement(O, {
                      alt: a,
                      title: t,
                      sizes: M.sizes,
                      src: M.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: M.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: I,
                      draggable: L,
                    }),
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: R((0, o.default)({ alt: a, title: t, loading: I }, M, { imageVariants: q })),
                    },
                  }),
              )
            }
            if (h) {
              var j = h,
                P = j[0],
                k = (0, o.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: P.width,
                    height: P.height,
                  },
                  s,
                )
              return (
                'inherit' === s.display && delete k.display,
                l.default.createElement(
                  y,
                  {
                    className: (r || '') + ' gatsby-image-wrapper',
                    style: k,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(P.srcSet),
                  },
                  N &&
                    l.default.createElement(y, {
                      title: t,
                      style: (0, o.default)(
                        { backgroundColor: N, width: P.width, opacity: this.state.imgLoaded ? 0 : 1, height: P.height },
                        V && T,
                      ),
                    }),
                  P.base64 &&
                    l.default.createElement(z, { src: P.base64, spreadProps: W, imageVariants: j, generateSources: w }),
                  P.tracedSVG &&
                    l.default.createElement(z, {
                      src: P.tracedSVG,
                      spreadProps: W,
                      imageVariants: j,
                      generateSources: E,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      S(j),
                      l.default.createElement(O, {
                        alt: a,
                        title: t,
                        width: P.width,
                        height: P.height,
                        sizes: P.sizes,
                        src: P.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: P.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: I,
                        draggable: L,
                      }),
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: R((0, o.default)({ alt: a, title: t, loading: I }, P, { imageVariants: j })),
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
    529: function(e, t, a) {
      'use strict'
      a(80)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '')
        }
      })
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-e130dcf3bc42fa05fac0.js.map
