import { routeFakeUsersApi } from "../../support/routes";

describe("Post Services", () => {
  const faker = require("faker");
  faker.locale = "pt_BR";

  beforeEach(() => {
    cy.consoleErrosOff();
  });

  it("Post User", () => {
    var id = faker.random.number();
    var username = faker.internet.userName();
    var password = faker.internet.password();

    cy.request({
      method: "POST",
      url: routeFakeUsersApi,
      body: {
        ID: id,
        UserName: username,
        Password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).property("ID").to.eq(id);
      expect(response.body).property("UserName").to.eq(username);
      expect(response.body).property("Password").to.eq(password);
    });
  });
});
