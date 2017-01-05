const webpackConfig = require('../webpack.test.js');

module.exports = function (config) {
  const context = './karma.context.js';

  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    port: 9876,
    files: [
      {
        pattern: context,
        watched: false
      }
    ],
    preprocessors: {
      [context]: ['webpack', 'sourcemap']
    },
    webpack: {
      module: webpackConfig.module,
      devtool: 'inline-source-map',
      watch: true
    },
    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage'
    },
    webpackMiddleware: {noInfo: true}, // no webpack output
    reporters: ['progress', 'coverage', 'remap-coverage'],
    colors: true,
    autoWatch: false,
    concurrency: Infinity,
    singleRun: true
  });
};