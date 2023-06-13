import { routeFakeUsersApi, } from "../../support/routes";

describe('PUT Services', () => {

    const faker = require('faker')
    faker.locale = "pt_BR";

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Post User', () => {

        var id = 1
        var newId = faker.random.number()
        var username = faker.internet.userName()
        var password = faker.internet.password()

        cy.request({
            method: 'PUT',
            url: routeFakeUsersApi + "/" + id,
            body: {
                ID: newId,
                UserName: username,
                Password: password
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(newId)
            expect(response.body.userName).to.eq(username)
            expect(response.body.password).to.eq(password)
        })

    })
});