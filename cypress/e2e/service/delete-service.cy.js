import { routeFakeUsersApi } from '../../support/routes';

describe('Delete Services', { tags: ['@api', '@smoke'] }, function () {
  before(function () {
    cy.consoleErrorsOff();
  });

  it('Delete User', function () {
    const id = 1;

    cy.request({
      method: 'DELETE',
      url: `${routeFakeUsersApi}/${id}`,
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
