import { routeFakeUsersApi } from '../../support/routes';
import { faker } from '@faker-js/faker/locale/en';

describe('Post Services', { tags: ['@api'] }, function () {
  before(function () {
    cy.consoleErrosOff();
  });

  it('Post User', function () {
    const id = faker.number.int(100),
      username = faker.internet.userName(),
      password = faker.internet.password();

    cy.request({
      method: 'POST',
      url: routeFakeUsersApi,
      body: {
        ID: id,
        UserName: username,
        Password: password,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(id);
      expect(response.body.userName).to.eq(username);
      expect(response.body.password).to.eq(password);
    });
  });
});
