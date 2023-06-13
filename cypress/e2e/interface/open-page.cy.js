import { routePostCustomer, } from "../../support/routes";

describe('Open Application', () => {

    const faker = require ('faker')
    faker.locale = "pt_BR";

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Open Application - Costumer List', () => {
        cy.accessPage()
    })

    it('Open Application - Costumer Edit', () => {

        cy.accessPage()
        cy.clickFirstLine()
        cy.get('input[id="field-customerName"]').clear().type(faker.name.findName())
        cy.get('input[id="field-contactLastName"]').clear().type(faker.name.lastName())
        cy.get('input[id="field-contactFirstName"]').clear().type(faker.name.findName())
        cy.get('input[id="field-phone"]').clear().type(faker.phone.phoneNumber())
        
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
