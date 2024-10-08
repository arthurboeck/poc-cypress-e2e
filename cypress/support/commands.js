// ***********************************************
// This example commands.js shows you how to
// Create various custom commands and overwrite
// Existing commands.
//
// For more comprehensive examples of custom
// Commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('consoleErrorsOff', () => {
  Cypress.on(
    'uncaught:exception',
    () =>
      // Returning false here prevents Cypress from
      // Failing the test
      false,
  );
});

Cypress.Commands.add('clickFirstLine', () => {
  cy.get(':nth-child(1) > :nth-child(2) > .only-desktops > a.btn').click();
});
