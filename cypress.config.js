const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video : true,
   reporter: 'cypress-mochawesome-reporter',
     reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: true,
    cdn:true,
  },
  e2e: {
    baseUrl : 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
         require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    url : 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
