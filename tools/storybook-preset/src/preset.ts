export default {
  managerWebpack: async (config) => {
    // Update config here
    return config
  },
  managerBabel: async (config) => {
    // Update config here
    return config
  },
  webpackFinal: async (config) => {
    return config
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets],
    plugins: [...options.plugins],
  }),
}
