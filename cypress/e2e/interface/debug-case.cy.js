import { routePostCustomer, } from "../../support/routes";

describe('Debug Application', () => {

    const faker = require('faker')
    faker.locale = "pt_BR";

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Debug Application - Costumer Edit', () => {

        cy.accessPage()
        cy.clickFirstLine()
        cy.get('input[id="field-customerName"]').clear().type(faker.name.findName())
        cy.get('input[id="field-contactLastName"]').clear().type(faker.name.lastName())
        cy.get('input[id="field-contactFirstName"]').clear().type(faker.name.findName())
        cy.get('input[id="field-phone"]').clear().type(faker.phone.phoneNumber())
        
        cy.get('[id="form-button-save"]').click()

        cy.intercept()
        cy.route('POST', routePostCustomer).as('postCustomer')
        cy.wait('@postCustomer')
        cy.get('@postCustomer').then((xhr) => {
            // The bellow command allows to debug on browser dev tools.
            // To check the vars from xhr, you just need to type it on browser console.
            // debugger 
            expect(xhr.method).to.eq('POST')
            expect(xhr.status).to.eq(200)
        })

        cy.get('[id="report-success"]').should('be.visible')
        cy.screenshot()
    })
});
