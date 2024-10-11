const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = {
  chromeWebSecurity: false,
  
   e2e: {
   reporter: 'cypress-mochawesome-reporter',
   reporterOptions: {
    charts: true,
    reportPageTitle: 'MochaReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    setupNodeEvents (on, config) {

     require('cypress-mochawesome-reporter/plugin')(on);
     allureWriter(on, config);
       return config;
    },
      
  },
};

