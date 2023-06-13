import { routeFakeUsersApi, } from "../../support/routes";

describe('Delete Services', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Delete User', () => {

        var id = 1

        cy.request({
            method: 'DELETE',
            url: routeFakeUsersApi + "/" + id
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })
});