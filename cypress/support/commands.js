// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframeDocument', (locator) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get(loactor)
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
  })

  Cypress.Commands.add('getIframe', (locatordocument,) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy.get(locatordocument,{ timeout: 10_000 }).then($frame => {
      const content = $frame.contents().find("body");
      cy.wrap(content);
  })
  });
  
  
///<reference types="cypress"/>