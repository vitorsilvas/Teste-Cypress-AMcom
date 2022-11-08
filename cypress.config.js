const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "g4vqeq",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
    },
    browser: "chrome",
    video: true,
    screenshot: true,
    baseUrl: "https://test-conf-novosgp.sme.prefeitura.sp.gov.br",
    setupNodeEvents(on, config) {},
  },
});