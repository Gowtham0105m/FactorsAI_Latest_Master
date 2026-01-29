const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "odtvtn",
  experimentalStudio: true,

  // From the screenshot
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  video: false,
  experimentalInteractiveRunEvents: false, // Disable test replay uploads

  // retries: {
  //   runMode: 1,
  //   openMode: 1,
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
  },
});

