module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
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
