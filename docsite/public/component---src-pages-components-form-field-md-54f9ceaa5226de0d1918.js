;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    500: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, '_frontmatter', function() {
          return o
        }),
        t.d(n, 'default', function() {
          return c
        })
      t(10), t(11), t(7), t(12), t(21), t(0)
      var a = t(69),
        l = t(477)
      var o = {},
        b = { _frontmatter: o },
        i = l.b
      function c(e) {
        var n = e.components,
          t = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              l = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (l[t] = e[t])
            return l
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, b, t, { components: n, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'FormField'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'FormField'),
            ' component to combine ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Input'),
            ' or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Select'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Label'),
            ', and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Icon'),
            ' components into a single input field.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<FormField>\n  <Label htmlFor='email'>Email address</Label>\n  <Icon name='email' size='20' />\n  <Input\n    id='email'\n    name='email'\n    defaultValue='oliver@example.com'\n    placeholder='hello@example.com'\n  />\n</FormField>\n",
            ),
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<FormField>\n  <Label htmlFor='options'>Select One</Label>\n  <Icon name='key' size='20' />\n  <Select\n    id='options'\n    name='options'>\n    <option>A</option>\n    <option>B</option>\n    <option>C</option>\n  </Select>\n</FormField>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Usage'),
          Object(a.b)(
            'p',
            null,
            'This component accepts up to 4 components as children.\nUp to two of them can be ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Icon'),
            's, one ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Input'),
            ' or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Select'),
            ', and one ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Label'),
            '.',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Input'),
              ' or ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Select'),
              ': Make sure to provide an ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'id'),
              ' prop to this component, otherwise you will run into accessibility issues.',
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Icon'),
              ': One ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Icon'),
              ' can go ',
              Object(a.b)('em', { parentName: 'li' }, 'before'),
              ', and one ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Icon'),
              ' can go ',
              Object(a.b)('em', { parentName: 'li' }, 'after'),
              ' the ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'Input'),
              ' component.\nAnything else will result in a prop-type warning.',
            ),
          ),
          Object(a.b)('h2', null, 'Error Messages'),
          Object(a.b)(
            'p',
            null,
            'Error messages can be displayed using the ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: '/Tooltip' }),
              Object(a.b)('inlineCode', { parentName: 'a' }, 'Tooltip'),
            ),
            ' component.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<FormField>\n  <Input\n    value='hello@example'\n  />\n  <Icon name='warning' color='red' />\n</FormField>\n<Tooltip\n  bottom\n  right\n  color='white'\n  bg='red'>\n  Invalid Email Address\n</Tooltip>\n",
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'children'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'React elements'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Up to 4 components, two of which can be ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<Icon/>'),
                  "'s, one of which can be an ",
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<Input />'),
                  ', and one of which can be a ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<Label />'),
                  '. No other elements are supported.',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'alwaysShowLabel'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Determines whether or not the label shows up statically',
                ),
              ),
            ),
          ),
        )
      }
      c.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-form-field-md-54f9ceaa5226de0d1918.js.map
