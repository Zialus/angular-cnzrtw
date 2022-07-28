module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/angular",
  testRunner: 'karma',
  karma: {
    projectType: 'angular-cli',
    config: {
      browsers: ['ChromeHeadless'],
    },
  },
  timeoutFactor: 2.0,
  timeoutMS: 60000,
  reporters: ['progress', 'clear-text', 'html'],
  concurrency: 4,
  concurrency_comment:
    'Recommended to use about half of your available cores when running stryker with angular',
  coverageAnalysis: 'perTest',
  disableTypeChecks: 'projects/**/*.{js,ts,jsx,tsx,html,vue}',
};
