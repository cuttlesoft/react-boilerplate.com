module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/**/*.doc.js',
    '!app/components/**/index.js',
    '!app/**/*.stories.{js,jsx}',
    '!app/components/**/stories/*.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/index.{js,jsx}',
  ],
  coverageThreshold: {
    // Test coverage should be adjusted on a project-by-project basis
    global: {
      statements: 35,
      branches: 35,
      functions: 35,
      lines: 35,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/configure-mobx-batching.js',
    '<rootDir>/internals/testing/test-bundler.js',
  ],
  setupFiles: ['raf/polyfill'],
  testRegex: '.*\\.test\\.js$',
  snapshotSerializers: [],
  transformIgnorePatterns: ['node_modules/(?!(grommet)/)'],
}
