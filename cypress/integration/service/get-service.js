import { routeGetJobs, } from "../../base-tests/routes";

describe('Services Get', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    it('Get Jobs List', () => {

        cy.server()
        cy.request('GET', routeGetJobs).as('getJobs')
        cy.get('@getJobs').then((response) => { 
            expect(response.status).to.eq(200)

            let idJob = response.body[2].uuid

            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetJobs+"/"+idJob,
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