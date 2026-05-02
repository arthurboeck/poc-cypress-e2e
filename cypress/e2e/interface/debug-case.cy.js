import { faker } from '@faker-js/faker/locale/en';
import { routePostCustomer } from '../../support/routes';

describe('Debug Application', { tags: ['@web', '@debug'] }, function () {
  before(function () {
    cy.consoleErrorsOff();
  });

  it('Debug Application - Customer Edit', function () {
    cy.accessPage();
    cy.clickFirstLine();
    cy.get('input[id="field-customerName"]').clear().type(faker.person.firstName());
    cy.get('input[id="field-contactLastName"]').clear().type(faker.person.lastName());
    cy.get('input[id="field-contactFirstName"]').clear().type(faker.person.firstName());
    cy.get('input[id="field-phone"]').clear().type(faker.phone.number());

    cy.intercept('POST', routePostCustomer).as('postCustomer');
    cy.get('[id="form-button-save"]').click();

    // Bellow command enables debugging in browser dev tools.
    // To inspect the vars from xhr, type it in the browser console.
    // Debugger
    cy.wait('@postCustomer');

    cy.get('[id="report-success"]').should('be.visible');
    cy.screenshot();
  });
});
