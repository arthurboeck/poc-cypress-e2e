const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    blockHosts: ['*fonts.googleapis.com'],
    browser: 'chrome',
    chromeWebSecurity: false,
    clearCookies: true,
    clearLocalStorage: true,
    clearSessionStorage: true,
    defaultCommandTimeout: 25000,
    host: 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4',
    pageLoadTimeout: 60000,
    projectId: 'fnss6o',
    responseTimeout: 25000,
    retries: 0,
    video: true,
    viewportHeight: 768,
    viewportWidth: 1366,

    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },

    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000;

      require('@cypress/grep/src/plugin')(config);

      return config;
    },
  },
});
