import { routeFakeUsersApi } from '../../support/routes';

describe('Get Services', { tags: ['@api'] }, function () {
  beforeEach(function () {
    cy.consoleErrosOff();
  });

  it('Get User List', function () {
    cy.request('GET', routeFakeUsersApi).as('getUsers');
    cy.get('@getUsers').then(response => {
      expect(response.status).to.eq(200);
    });
  });

  it('Get Single User', function () {
    const id = 1,
      password = 'Password1',
      username = 'User 1';

    cy.request({
      method: 'GET',
      url: `${routeFakeUsersApi}/${id}`,
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(id);
      expect(response.body.userName).to.eq(username);
      expect(response.body.password).to.eq(password);
    });
  });
});
