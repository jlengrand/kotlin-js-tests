{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/js/packages/kotlin-js-tests/kotlin/kotlin-js-tests.js'
    ]
  },
  output: {
    path: '/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/distributions',
    filename: [Function: filename],
    library: 'kotlin-js-tests',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    open: true,
    contentBase: [
      '/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/processedResources/js/main'
    ]
  }
}