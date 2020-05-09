import { routeFakeUsersApi, } from "../../base-tests/routes";

describe('Delete Services', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Post User', () => {

        var id = 1

        cy.server()
        cy.request({
            method: 'DELETE',
            url: routeFakeUsersApi + "/" + id
        }).then((response => {
            expect(response.status).to.eq(200)
        }))

    })
});