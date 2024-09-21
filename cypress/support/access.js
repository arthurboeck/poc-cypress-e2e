import { url } from '../support/routes';

// ***********************************************
// This example commands.js shows you how to
// Create various custom commands and overwrite
// Existing commands.
//
// For more comprehensive examples of custom
// Commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('accessPage', () => {
  cy.clearLocalStorage();

  cy.visit(url, {
    onBeforeLoad: win => {
      win.localStorage.clear();
    },
  });
});
