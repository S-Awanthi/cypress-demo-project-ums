const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl='http://localhost/user-management-system/index.php',
      viewportWidth=1280,
      viewportHeight=720,
      watchForFileChanges=false
      // experimentalRunAllSpecs=true
    }
  },
});
