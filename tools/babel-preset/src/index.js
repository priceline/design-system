module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3.30',
        targets: 'last 2 versions, not dead, > 0.5%',
        debug: true,
      },
    ],
    require('@babel/preset-react'),
    [
      require('@babel/preset-typescript'),
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [require('babel-plugin-styled-components')],
  env: {
    test: {
      presets: [
        [
          require('@babel/preset-env'),
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins: [require('babel-plugin-styled-components')],
      compact: true,
    },
    cjs: {
      presets: [[require('@babel/preset-env'), { modules: 'cjs' }]],
    },
  },
})
