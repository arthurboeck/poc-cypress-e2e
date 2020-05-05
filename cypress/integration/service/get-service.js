import { routeGetJobs, } from "../../base-tests/routes";
describe('Services Get', () => {

    const faker = require('faker');
    faker.locale = "pt_BR";

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Get jobs', () => {

        cy.server()
        cy.request(routeGetJobs).as('getJobs')
        cy.get('@getJobs').then((xhr) => {
            expect(xhr.method).to.eq('GET')
            expect(xhr.status).to.eq(200)

            let idJob = (xhr.response.body.uuid)

            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetJobs+idJob,
            // auth:{ -- Parameter used to set bearer token
            //     bearer:getTokenId()
            // }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('uuid').to.eq(idJob)
        }))
    })
    })
});