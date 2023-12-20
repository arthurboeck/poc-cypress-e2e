const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "fnss6o",
    browser: "chrome",
    video: true,
    viewportHeight: 768,
    viewportWidth: 1366,
    pageLoadTimeout: 60000,
    responseTimeout: 25000,
    defaultCommandTimeout: 25000,
    chromeWebSecurity: false,
    clearCookies: true,
    clearLocalStorage: true,
    clearSessionStorage: true,
    retries: 0,
    blockHosts: ["*fonts.googleapis.com"],
    host: "https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4",
    env:{
        grepFilterSpecs: true,
    },

    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000;

      require('@cypress/grep/src/plugin')(config);

      return config;
    },
  },
});
