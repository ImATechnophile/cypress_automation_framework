# Web Application(UI) Automation

Cypress tool is an Web Automation tool built on** NodeJS Environment**,
Cypress tool gives you very fast Execution on testing the Web Application and it automate the modern Web application that has been devoloped by the reactJS and angularJS.

## Task list
- [ ] What are the [Software requirements](#software) you need to test the Web app? 
- [ ] How to run our Web(UI) Automation Tool on your [localhost](#localhost)?
- [ ] About plugins and its (#functionalities) of the Cypress Tool? 

## Getting Started
Just clone this repository and follow the below Prerequisites.
### Prerequisites
Before getting into this project You should be familiar with the following technologies:
* Locators.
* JavaScript
* cypress.

### Software Required

* You will need [Node.js](https://nodejs.org/en/), (18.0 or newer)
* You will need [npm](https://www.npmjs.com/), (installed with Node.js)
* You will need [cypress](https://www.cypress.io/), (installed with npm CLI).

If you have never worked with a Cypress Automation Tool,I would recommend the  following basic introduction to [get started](https://docs.cypress.io/guides/overview/why-cypress)
## Installing

Once all prerequisites are fulfilled, you are almost ready to work on the Cypress tool for UI Automation on your desktop. For the process of Automating the modern web application, you will need the npm package "cypress" installed globally on your machine. 

To install the npm package, execute the following command on your terminal.

```
$ npm i cypress -g
```

## Deployment

*Open the application in your local desktop*.Follow the below steps on your terminal with your cypress commands.
```
$ deploy:cypress tool
? commands :npx cypress open
```

Almost Done :Now you can view *Cypress Tool* in the local desktop.

## Completed Task list:
- [x] What are the [Software requirements](#software) you need to test the Web app? 
- [x] How to run our Web(UI) Automation Tool on your [localhost](#localhost)?
- [ ] About plugins and its [functionalities](#functionalities) of the Cypress Tool? 

## Plugins of the Web(UI) Automation:
*Collection of Plugins used for the Cypress UI Automation*

  Plugins which has been used so far,they are:
* cypress-xpath.
* cypress-iframe.
* @cypress/grep.
* Cross-env.
* @shelex/cypress-allure-plugin.

I guess the name of plugins gives some idea about its functionalities 😎

## Functionalities of our plugins:
**cypress-xpath :**
* This plugin is used to Adds XPath command to Cypress.io test runner.
* CLI Command to install the plugin,
```
  $ npm install -D cypress-xpath.
```
* In your cypress/support/commands.js file, add the following
```
    require('cypress-xpath');
```
## Uses

After installation your cy object will have xpath command.
```
it('finds list items', () => {
  cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
});
```
```
Note: you can test XPath expressions from DevTools console using $x(...) function, for example $x('//div') to find all divs.
angular.module('c8y.ui').run(runBlock);
```

**cypress-iframe :**
* This plugin is used to Adds iframe command to Cypress.io to handle iframes.
* CLI Command to install the plugin,
```
  $  npm install -D cypress-iframe.
```
* In your cypress/support/commands.js file, add the following:
```
       import 'cypress-iframe';
           // or
       require('cypress-iframe');
```
## Uses

After installation your cy object will have xpath command.
```
it('finds list items', () => {
  cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
});
```
```
Note: you can test XPath expressions from DevTools console using $x(...) function, for example $x('//div') to find all divs.
angular.module('c8y.ui').run(runBlock);
```
**@cypress/grep :**
* If you have multiple spec files, all specs will be loaded, and every test will be filtered the same way,since the grep is run-time operation and cannot eliminate the spec files without loading them.
* CLI Command to install the plugin,
```
   $ npm i @cypress/grep.
```
* In your cypress/support/commands.js file, add the following:
```
// cypress/support/e2e.js
// load and register the grep feature using "require" function
  const registerCypressGrep = require('@cypress/grep')
  registerCypressGrep()
```
## Config file
Optional: load and register this module from the config file:
```
// cypress.config.js
{
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
  },
  }
}
```
## Uses
You can filter tests to run using part of their title via grep, and via explicit tags via grepTags Cypress environment variables.

Most likely you will pass these environment variables from the command line. For example, to only run tests with "login" in their title and tagged "smoke", you would run:

Here are a few examples:
```
# run only the tests with "auth user" in the title
$ npx cypress run --env grep="auth user"
# run tests with "hello" or "auth user" in their titles
# by separating them with ";" character
$ npx cypress run --env grep="hello; auth user"
# run tests tagged @fast
$ npx cypress run --env grepTags=@fast
# run only the tests tagged "smoke"
# that have "login" in their titles
$ npx cypress run --env grep=login,grepTags=smoke
# only run the specs that have any tests with "user" in their titles
$ npx cypress run --env grep=user,grepFilterSpecs=true
# only run the specs that have any tests tagged "@smoke"
$ npx cypress run --env grepTags=@smoke,grepFilterSpecs=true
# run only tests that do not have any tags
# and are not inside suites that have any tags
$ npx cypress run --env grepUntagged=true
```
**Cross-env:**
* This module is distributed via npm which is bundled with node and should be installed as one of your project's devDependencies:
```
   $ npm install --save-dev cross-env.
```
## Uses
I use this in my npm scripts:
```
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --configbuild/ webpack.config.js"
  }
}
```
* You can set multiple environment variables at a time:
```
{
  "scripts": {
    "cy:parallel": "cross-env ./node_modules/.bin/cypress-parallel -s  cy:run -t 4 -d 'cypress/e2e/*.js'",
  }
}
```

## @shelex/cypress-allure-plugin
Plugin for integrating allure reporter in Cypress with support of Allure API.

## Installation
* Allure binary: directly from allure2 or allure-commandline npm package.
* Java 8 (required to run allure binary).
* There is no need to set this plugin as reporter in Cypress or use any other allure reporters. Just download(using npm):
```
npm i -D @shelex/cypress-allure-plugin
```

## Setup
* (After Cypress 10) Use defineConfig and setupNodeEvents inside config.js\config.ts files:
```
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', webpackPreprocessor);
            allureWriter(on, config);
            return config;
        },
        env: {
            allureReuseAfterSpec: true
        }
    }
});
```
* Register commands in cypress/support/index.js (or cypress/support/e2e.js for cypress 10+) file:
```
import '@shelex/cypress-allure-plugin';
      (or)
require('@shelex/cypress-allure-plugin');
```
* To enable Allure results writing just pass environment variable allure=true, example:
```
  $ npx cypress run --env allure=true
```

* setup config in package.json
```
 "scripts": {
    "cy:run": "cypress run --browser chrome --spec ./cypress/e2e/*.*.js --headed --env allure=true",
    "cy:parallel": "cross-env ./node_modules/.bin/cypress-parallel -s  cy:run -t 4 -d 'cypress/e2e/*.js'",
    "allure:report": "allure generate allure-results --clean -o allure-report",
    "allure:clear": "if exist allure-results rmdir /q /s allure-results && if exist allure-report rmdir /q /s allure-report && if exist cypress\\screenshots rmdir /q /s cypress\\screenshots && if exist cypress\\videos rmdir /q /s cypress\\videos",
    "pretest": "npm run allure:clear",
    "test": "npm run cy:run || npm run posttest",
    "posttest": "npm run allure:report"
  },
```






