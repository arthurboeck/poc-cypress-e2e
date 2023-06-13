import { routePostCustomer, } from "../../support/routes";
import { faker } from '@faker-js/faker/locale/en';

describe('Debug Application', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Debug Application - Costumer Edit', () => {

        cy.accessPage()
        cy.clickFirstLine()
        cy.get('input[id="field-customerName"]').clear().type(faker.person.firstName())
        cy.get('input[id="field-contactLastName"]').clear().type(faker.person.lastName())
        cy.get('input[id="field-contactFirstName"]').clear().type(faker.person.firstName())
        cy.get('input[id="field-phone"]').clear().type(faker.phone.phoneNumber())
        
        cy.get('[id="form-button-save"]').click()

        // The bellow command allows to debug on browser dev tools.
        // To check the vars from xhr, you just need to type it on browser console.
        // debugger 
        cy.intercept('POST', routePostCustomer).as('postCustomer')
        cy.wait('@postCustomer')

        cy.get('[id="report-success"]').should('be.visible')
        cy.screenshot()
    })
});
