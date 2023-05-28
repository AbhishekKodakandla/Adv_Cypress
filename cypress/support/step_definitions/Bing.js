import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('user is on the Bing homepage', () => {
  cy.visit('https://www.bing.com/');
});

When('user enter "Cypress" in the search bar and click on enter', () => {
  cy.get('#sb_form_q').type('cypress{enter}', {delay:900});
  cy.wait(3000)
});

Then('user should view search results related to "Cypress"', ()=>{
cy.wait(5000)
});
