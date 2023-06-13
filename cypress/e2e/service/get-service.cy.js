import { routeGetJobs, routeFakeUsersApi } from "../../support/routes";

describe('Get Services', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Get Jobs List Then Get Job by ID', () => {

        cy.intercept()
        cy.request('GET', routeGetJobs).as('getJobs')
        cy.get('@getJobs').then((response) => {
            expect(response.status).to.eq(200)

            let idJob = response.body[2].uuid

            cy.intercept()
            cy.request({
                method: 'GET',
                url: routeGetJobs + "/" + idJob,
                // auth:{ -- Parameter used to set bearer token
                //     bearer:getTokenId()
                // }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('uuid').to.eq(idJob)
            }))
        })
    })

    it('Get User List', () => {

        cy.intercept()
        cy.request('GET', routeFakeUsersApi).as('getUsers')
        cy.get('@getUsers').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Get Single User', () => {

        var id = 1
        var username = "User 1"
        var password = "Password1"

        cy.intercept()
        cy.request({
            method: 'GET',
            url: routeFakeUsersApi + "/" + id,
        }).then((response => {
            expect(response.status).to.eq(200)
            expect(response.body).property('ID').to.eq(id)
            expect(response.body).property('UserName').to.eq(username)
            expect(response.body).property('Password').to.eq(password)
        }))
    })
});