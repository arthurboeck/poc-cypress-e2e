import { faker } from '@faker-js/faker/locale/en';
import { routeFakeUsersApi } from '../../support/routes';

describe('PUT Services', { tags: ['@api'] }, function () {
  before(function () {
    cy.consoleErrosOff();
  });

  it('Post User', function () {
    const id = 1,
      newId = faker.number.int(100),
      password = faker.internet.password(),
      username = faker.internet.userName();

    cy.request({
      method: 'PUT',
      url: `${routeFakeUsersApi}/${id}`,
      body: {
        ID: newId,
        UserName: username,
        Password: password,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(newId);
      expect(response.body.userName).to.eq(username);
      expect(response.body.password).to.eq(password);
    });
  });
});
