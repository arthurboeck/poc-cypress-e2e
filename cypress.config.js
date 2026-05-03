const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // @cypress/grep reads grep* options from `expose` (CLI --expose or this block), not from e2e.env
  expose: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
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

    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 25000;

      const { plugin } = require('@cypress/grep/plugin');
      plugin(config);

      return config;
    },
  },
});
