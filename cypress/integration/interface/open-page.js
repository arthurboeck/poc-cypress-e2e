
describe('Open Application', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Open Application - Costumer List', () => {
        cy.accessPage()
    })

    it('Open Application - Costumer Edit', () => {
        cy.accessPage()
        cy.get(':nth-child(1) > :nth-child(2) > .only-desktops > a.btn').click()
    })

    it('Open Application - Costumer Create', () => {
        cy.accessPage()
        cy.get('.floatL.t5 > .btn').click()
    })
});