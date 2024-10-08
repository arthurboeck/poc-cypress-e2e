# POC - Cypress Interface and Service Tests

Repository build for automated tests using cypress for interfaces and services.

You can check the executions and artifacts on [Cypress Dashboard Executions](https://dashboard.cypress.io/projects/fnss6o/runs)

![CI](https://github.com/arthurboeck/poc-cypress-e2e/workflows/CI/badge.svg?branch=master)
[![Cypress Dashboard][dashboard badge]][dashboard url]

## Test Sources :globe_with_meridians:

- [Bootstrap WebElements](https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4)
- [Fake Rest API](https://fakerestapi.azurewebsites.net/)
- [Open API's](https://any-api.com/)

## Dependencies :wrench:

- [Node](https://nodejs.org/en/docs/)
- [Npm](https://docs.npmjs.com/)
- [Brazilian Utils v1.0.0-rc.12](https://brazilian-utils.com.br/#/getting-started)
- [Cypress v13.11.0](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
- [Cypress Grep v4.0.2](https://github.com/cypress-io/cypress/tree/develop/npm/grep)
- [Cypress ESLint v3.3.0](https://github.com/cypress-io/eslint-plugin-cypress)
- [ESLint v9.5.0](https://eslint.org/docs/latest/use/getting-started)
- [Faker JS v8.4.1](https://github.com/faker-js/faker)

# Step by Step :pencil:

## Clonning the Project :art:

```shell
git clone https://github.com/arthurboeck/poc-cypress-e2e.git
```

## Installing Dependencies :pushpin:

```shell
npm install
```

## Opening Cypress Interface :dizzy:

```shell
npm start
```

## Running Cypress Tests :rocket:

```shell
npm test
```

## Running Cypress Tests By Tags :rocket:

The following command will run all tests with the tag @api, you can read more [here](https://github.com/cypress-io/cypress/tree/develop/npm/grep#filter-with-tags).

```shell
npm run test -- --env grepTags=@api
```

## Debugging :bug:

Cypress runs in debug mode by default. Once you add debug information, it enables debugging of your test in your browser's console and dev tools, [read more](https://docs.cypress.io/guides/guides/debugging.html)

Usage sample [../debug-case.js](https://github.com/arthurboeck/poc-cypress-e2e/blob/master/cypress/e2e/interface/debug-case.cy.js)

```JavaScript
cy.get('@postCustomer').then((xhr) => {
            // The bellow command allows to debug on browser dev tools.
            // To check the vars from xhr, you just need to type it on browser console.
            debugger
            expect(xhr.method).to.eq('POST')
            expect(xhr.status).to.eq(200)
        })
```

# Project Structure :package:

## Folder Structure :building_construction:

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.

- `Fixtures` holds optional JSON data for mocking, [read more](https://docs.cypress.io/api/commands/fixture.html)
- `e2e` holds the actual test files, [read more](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)
- `Plugins` allows you to customize how tests are loaded, [read more](https://docs.cypress.io/plugins/index.html)
- `Support` file runs before all tests and is a great place to write or load additional custom commands, [read more](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Support-file)

## Structural Files :card_file_box:

These files hold settings for the Cypress Test Runner.

- [../cypress.json](https://github.com/arthurboeck/poc-cypress-e2e/blob/master/cypress,config.js) you can configure project options, [read more](https://docs.cypress.io/guides/references/configuration.html#Options)
- [../package.json](https://github.com/arthurboeck/poc-cypress-e2e/blob/master/package.json) hold settings for managing the project's dependencies, scripts, version and more, [read more](https://dev.to/easybuoy/understanding-the-package-json-file-3fdg)

## More Information :sparkles:

- https://github.com/cypress-io
- https://docs.cypress.io/
- [Writing your first Cypress Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)

# Thank you! :beers:

## Feel free to colaborate, contact me, or anything else! :tada:

[dashboard badge]: https://img.shields.io/badge/cypress-dashboard-brightgreen.svg
[dashboard url]: https://dashboard.cypress.io/projects/fnss6o/runs
