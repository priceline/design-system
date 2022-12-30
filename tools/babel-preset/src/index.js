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
  plugins: [
    require('babel-plugin-styled-components'),
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    require('@babel/plugin-proposal-optional-chaining'),
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-export-default-from'),
    require('babel-plugin-date-fns'),
  ],
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
      plugins: [
        require('babel-plugin-styled-components'),
        require('@babel/plugin-proposal-nullish-coalescing-operator'),
        require('@babel/plugin-proposal-optional-chaining'),
        require('babel-plugin-dynamic-import-node'),
        require('@babel/plugin-transform-modules-commonjs'),
      ],
      compact: true,
    },
    production: {
      plugins: [require('babel-plugin-transform-react-remove-prop-types')],
    },
    cjs: {
      presets: [[require('@babel/preset-env'), { modules: 'cjs' }]],
    },
  },
})
