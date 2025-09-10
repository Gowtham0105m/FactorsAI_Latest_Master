const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "odtvtn",
  experimentalStudio: true,
  experimentalMemoryManagement: true,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/Regression_testcases/Account_identification.cy.js',
        'cypress/e2e/Alerts/*.cy.js',
        'cypress/e2e/Regression_testcases/Accounts.cy.js',
        'cypress/e2e/**/*.cy.js',
      ]
      // IMPORTANT: need to return the changed config
      // so Cypress knows about your changes
      return config
      
    },
    screenshotOnRunFailure: true,
    
  },
});
