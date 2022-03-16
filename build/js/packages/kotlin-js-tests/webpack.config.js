let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/js/packages/kotlin-js-tests/kotlin/kotlin-js-tests.js"]
};

config.output = {
    path: "/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "kotlin-js-tests.js"
            : "kotlin-js-tests-[name].js";
    },
    library: "kotlin-js-tests",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})


// dev server
config.devServer = {
  "open": true,
  "contentBase": [
    "/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/processedResources/js/main"
  ]
};

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/julienlengrand-lambert/Developer/kotlin-js-tests/build/reports/webpack/kotlin-js-tests/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
