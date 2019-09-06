;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    511: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l
        }),
        n.d(t, 'default', function() {
          return r
        })
      n(10), n(11), n(7), n(12), n(21), n(0)
      var a = n(69),
        b = n(477)
      var l = {},
        i = { _frontmatter: l },
        o = b.b
      function r(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              b = {},
              l = Object.keys(e)
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (b[n] = e[n])
            return b
          })(e, ['components'])
        return Object(a.b)(
          o,
          Object.assign({}, i, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Layout Guide'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'Box.md' }), 'Box'),
            ' and ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'Flex.md' }), 'Flex'),
            ' components are low-level layout components that can handle virtually\nany layout styling that could be handled with a grid system as well as handle a lot of microlayout styles.',
          ),
          Object(a.b)('h3', null, 'Flexbox'),
          Object(a.b)(
            'p',
            null,
            'To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.\nThe following links can be useful to understand how flexbox works:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign({ parentName: 'li' }, { href: 'https://www.w3.org/TR/css-flexbox-1/' }),
                'CSS Flexible Box Layout Module',
              ),
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes',
                  },
                ),
                'MDN: Using CSS Flexible Boxes',
              ),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            "Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.\nGenerally the Design System layout components should work as expected in IE11, but it's always good to test.",
          ),
          Object(a.b)(
            'p',
            null,
            'See the ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/philipwalton/flexbugs' }),
              'Flexbugs',
            ),
            ' project for more information.',
          ),
          Object(a.b)('h3', null, 'Margins'),
          Object(a.b)(
            'p',
            null,
            'Using the ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/jxnblk/styled-system' }),
              'styled-system',
            ),
            " library, the Box and Flex components have several style props for handling margins,\nwhile adhering to the Design System's spacing scale.",
          ),
          Object(a.b)(
            'p',
            null,
            'To add margin around a component, wrap it with the Box component and use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'm'),
            ' (margin) prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box m={3}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'The number ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '3'),
            ' in this example refers to step 3 on the spacing scale (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space'),
            ').\nThe spacing scale is an array of numbers that are used as pixel values in the Box component.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-js' }),
              '// theme.space\n;[0, 4, 8, 16, 32, 64, 128]\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To add margin in a particular direction use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mt'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mr'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mb'),
            ', or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'ml'),
            ' props.\nThese props are shorthands for ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-top'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-right'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-bottom'),
            ', and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin-left'),
            ' respectively.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box\n  mt={3}\n  mb={4}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Shorthand Syntax'),
          Object(a.b)(
            'p',
            null,
            'Much like other libraries, including ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'http://tachyons.io' }), 'Tachyons'),
            ', ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://getbootstrap.com/docs/4.0/utilities/spacing/' }),
              'Bootstrap',
            ),
            ', and ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'http://basscss.com' }), 'Basscss'),
            ',\nthe Box component uses a shorthand syntax for margin and padding.\nThis has a little bit of a learning curve and requires some internalization,\nbut due to the heavy use of these properties it can help with development velocity.',
          ),
          Object(a.b)(
            'table',
            null,
            Object(a.b)(
              'thead',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'thead' },
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Shorthand'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Meaning'),
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
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'm'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mt'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mr'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-right'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mb'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-bottom'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'ml'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-left'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'mx'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-left'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-right'),
                  ' (x-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'my'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'margin-top'),
                  ' (y-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'p'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pt'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pr'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-right'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pb'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-bottom'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'pl'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-left'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'px'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-left'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-right'),
                  ' (x-axis)',
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'py'),
                ),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                  ' and ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'padding-top'),
                  ' (y-axis)',
                ),
              ),
            ),
          ),
          Object(a.b)('h3', null, 'Padding'),
          Object(a.b)(
            'p',
            null,
            'The Box and Flex components can also set padding, using a similar API to the margin props.',
          ),
          Object(a.b)(
            'p',
            null,
            'To add padding to a Box, use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'p'),
            ' (padding) prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={2}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To add padding in a single direction, use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pt'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pr'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pb'),
            ', or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'pl'),
            ' props.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box pt={2} pb={4}>\n  <Text>Hello</Text>\n</Box>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Creating a responsive grid layout'),
          Object(a.b)(
            'p',
            null,
            'The Flex and Box components can be used to create a flexbox-based grid layout,\nusing the same principles used in other grid systems such as ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: 'https://getbootstrap.com' }), 'Bootstrap'),
            '.',
          ),
          Object(a.b)('p', null, 'To start, create a wrapping component with padding.'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)('code', Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }), '<Box p={4} />\n'),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add a Flex component with the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'wrap'),
            ' prop to set ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'flex-wrap: wrap'),
            '.\nThis will work similarly to a "row" in traditional grid systems.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box p={4}>\n  <Flex wrap />\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next add some Box components that will act as "columns",\nsetting the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' prop to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '1'),
            ' to make the Boxes fill the full-width of the container\nand stack on top of each other for small viewports.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex wrap>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            " prop's ",
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '#responsive-widths' }), 'responsive array'),
            ' feature\nto change the width of the Boxes at the ',
            Object(a.b)('em', { parentName: 'p' }, 'small'),
            ' breakpoint and up.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex wrap>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Here, the array value (',
            Object(a.b)('inlineCode', { parentName: 'p' }, '[ 1, 1/2 ]'),
            ') passed to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' sets its width to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '100%'),
            ' on small viewports and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '50%'),
            ' on viewports wider than the ',
            Object(a.b)('em', { parentName: 'p' }, 'small'),
            ' breakpoint.\nIf you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports.',
          ),
          Object(a.b)(
            'p',
            null,
            'Next, to add gutters to the grid, use a combination of padding and negative margins.\nAdd ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mx={-3}'),
            ' to the Flex component to set left and right margins to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '-theme.space[3]'),
            ' (-16px).\nThis is how many CSS grid systems compensate for gutters.\nAdd an equal amount of padding to the Box components (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'px={3}'),
            ') to create gutters between their child components.\nA bottom margin (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'mb={4}'),
            ') can also be added to the Box components to handle spacing when stacked.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              '<Box p={4}>\n  <Flex\n    wrap\n    mx={-3}>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note that ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '* { box-sizing: border-box }'),
            ' should be set in your application to ensure that the padding and width work as expected in the above example.',
          ),
          Object(a.b)(
            'p',
            null,
            'Because each Box component in the example above adds left and right padding of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'px={3}'),
            ',\nthe total amount of space between their children will be double that amount.\nSince the spacing scale is based on powers of two, that amount of space is equal to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'theme.space[4]'),
            ',\nwhich is why the margin bottom is set to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '4'),
            '.',
          ),
          Object(a.b)('h3', null, 'Creating a two-column layout'),
          Object(a.b)(
            'p',
            null,
            'Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.\nUsing some of the same techniques from above, this can be achieved using the Flex and Box components.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex>\n  <Box px={3} width={1 / 4}>\n    <Sidebar />\n  </Box>\n  <Box px={3} width={3 / 4}>\n    <MainContent />\n  </Box>\n</Flex>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Creating a navbar'),
          Object(a.b)(
            'p',
            null,
            'The Flex and Box components are also well-suited to create things like navbars and toolbars.',
          ),
          Object(a.b)('p', null, 'Start with a Flex container and set its color to white with a blue background.'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex color="white" bg="blue" />\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add an Icon and some placeholder Text components for demonstration.\nIn a real application, these would likely be links and buttons.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Flex\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Note the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, "ml='auto'"),
            ' on the last item.\nSetting ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'margin: auto'),
            ' on a flex item will space it away from its sibling,\nin this case moving the item to the right side of the navbar.',
          ),
          Object(a.b)(
            'p',
            null,
            'Next, add some padding and use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'align'),
            ' prop on the parent Flex component to control the layout.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Flex\n  p={2}\n  align='center'\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n",
            ),
          ),
          Object(a.b)('h3', null, 'Creating tiled layout'),
          Object(a.b)(
            'p',
            null,
            "Often you'll see cards representing an list of items arranged in a tiled layout.\nUsing the ",
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '#responsive-widths' }), 'responsive width'),
            ' feature of the Box component\nand the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'wrap'),
            ' prop on the Flex component, this sort of layout can be achieved with the following:',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Flex wrap>\n  {items.map(item => (\n    <Box key={item.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>\n      <ProductCard {...item} />\n    </Box>\n  ))}\n</Flex>\n',
            ),
          ),
          Object(a.b)('h3', null, 'Responsive Widths'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)(
              'a',
              Object.assign({ parentName: 'p' }, { href: 'https://github.com/jxnblk/styled-system' }),
              'styled-system',
            ),
            ' library supports setting responsive widths that change per breakpoint with a mobile-first approach.',
          ),
          Object(a.b)(
            'p',
            null,
            'The Box component accepts number values to set percentage-based widths.\nAny number from 0–1 will be converted to a percentage.\nAny number greater than 1 will be converted to fixed pixel values.\nAnd strings may be passed to use other CSS units, such as ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'em'),
            ' or ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'vw'),
            '.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              "// width: 100%\n<Box width={1} />\n\n// width: 50%\n<Box width={1/2} />\n<Box width={0.5} />\n\n// width: 128px\n<Box width={128} />\n\n// width: 2em\n<Box width='2em' />\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To set a width that changes at different breakpoints, pass an array to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'width'),
            ' prop.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box\n  width={[\n    1, // 100% at all viewport widths (xs breakpoint)\n    1 / 2, // 50% from the small (sm) breakpoint and up\n    1 / 3, // 33% from the medium (md) breakpoint and up\n    1 / 4, // 25% from the large (lg) breakpoint and up\n    1 / 8, // 12.5% from the x-large (xl) breakpoint and up\n  ]}\n/>\n',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'To skip setting a width at a particular breakpoint, use a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'null'),
            ' value in the array.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-jsx' }),
              '<Box\n  width={[\n    1, // 100% for all viewport widths\n    null, // skip the sm breakpoint (stays 100%)\n    1 / 2, // 50% from the md breakpoint and up\n  ]}\n/>\n',
            ),
          ),
        )
      }
      r.isMDXComponent = !0
    },
  },
])
//# sourceMappingURL=component---src-pages-components-layout-md-dce84aade497b972bd3e.js.map
