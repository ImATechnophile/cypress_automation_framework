{/* <reference types="cypress" /> */}
// import dashboardLogin from "../pageobject/loginpage";
//import "cypress-iframe";


describe('dashboard Page', () => {
  
  
    it('demo application', () => {
      cy.visit('https://jqueryui.com/draggable/');
      cy.title().should('eq','Draggable | jQuery UI');
    })   
     });
 