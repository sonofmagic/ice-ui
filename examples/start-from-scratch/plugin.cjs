/**
 * @type {import('postcss').PluginCreator}
 */
const plugin = (options = {}) => {
  // const ctx = options.ctx

  console.log('---------------')
  return {
    postcssPlugin: 'custom-postcss-plugin',
    Root() {
      console.log('root:')
    }
  }
}
plugin.postcss = true
module.exports = plugin
