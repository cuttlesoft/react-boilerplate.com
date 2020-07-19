const config = require('../../babel.config')

config.plugins.push([
  'module-name-mapper',
  {
    moduleNameMapper: {
      '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
        '<rootDir>/internals/mocks/image.js',
    },
  },
])

module.exports = config
