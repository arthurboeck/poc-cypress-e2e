import { routePostCustomer, } from "../../support/routes";
import { faker } from '@faker-js/faker/locale/en';

describe('Open Application', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Open Application - Costumer List', () => {
        cy.accessPage()
    })

    it('Open Application - Costumer Edit', () => {

        cy.accessPage()
        cy.clickFirstLine()
        cy.get('input[id="field-customerName"]').clear().type(faker.person.firstName())
        cy.get('input[id="field-contactLastName"]').clear().type(faker.person.lastName())
        cy.get('input[id="field-contactFirstName"]').clear().type(faker.person.firstName())
        cy.get('input[id="field-phone"]').clear().type(faker.phone.number())
        
        cy.get('[id="form-button-save"]').click()

        cy.intercept('POST', routePostCustomer).as('postCustomer')
        cy.wait('@postCustomer')

        cy.get('[id="report-success"]').should('be.visible')
        cy.screenshot()
    })

    it('Open Application - Costumer Create', () => {
        cy.accessPage()
        cy.get('.floatL.t5 > .btn').click()
    })
});
