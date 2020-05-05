const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'mofish-common-tool.min.js'
  },
  target: 'node',
  mode: 'production'
}
