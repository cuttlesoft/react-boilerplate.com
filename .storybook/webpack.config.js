module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            semi: false,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'all',
            useTabs: false,
            printWidth: 99,
          },
        },
      },
    ],
    enforce: 'pre',
  })

  config.module.rules.push({
    test: /(\.js|\.jsx|\.stories\.jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    },
  })

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })

  return config
}
