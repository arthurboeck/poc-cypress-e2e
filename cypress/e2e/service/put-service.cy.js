import { routeFakeUsersApi, } from "../../support/routes";
import { faker } from '@faker-js/faker/locale/en';

describe('PUT Services', { tags: ['@api'] }, () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Post User', () => {

        var id = 1
        var newId = faker.number.int(100)
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