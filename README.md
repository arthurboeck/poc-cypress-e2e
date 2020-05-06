# POC - Cypress Interface and Service Tests

Repository build for automated tests using cypress for  interfaces and services.

You can check the executions and artifacts on [Cypress Dashboard Executions](https://dashboard.cypress.io/projects/fnss6o/runs).

![CI](https://github.com/arthurboeck/poc-cypress-e2e/workflows/CI/badge.svg?branch=master) 
[![Cypress Dashboard][dashboard badge]][dashboard url]

## Test Sources :globe_with_meridians:
* [Bootstrap WebElements](https://www.grocerycrud.com/demo/bootstrap_theme_v4/)
* [Open API's](https://any-api.com/)

## Dependencies :wrench:
* [Node v12.16.3](https://nodejs.org/en/docs/)
* [Npm v6.14.4](https://docs.npmjs.com/)
* [Cypress v4.5.0](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
* [Faker JS v4.1.0](https://github.com/marak/Faker.js/)

# Step by Step :pencil:

## Clonning the project :art:

```
git clone https://github.com/arthurboeck/poc-cypress-e2e.git
```

## Installing Dependencies :pushpin:

```
npm install
```

## Opening Cypress Interface :dizzy:

```
npm start
```

## Running Cypress Tests :rocket:

```
npm test
```

## Running Cypress Tests on Command Line :rocket:

```
npx cypress run --record --key 57e297dc-ea87-4943-9f5b-8be1d05972c6 --parallel --browser chrome
```

# Thank you! :beers:
## Feel free to colaborate, or even contact me! :tada:

[dashboard badge]: https://img.shields.io/badge/cypress-dashboard-brightgreen.svg
[dashboard url]: https://dashboard.cypress.io/projects/fnss6o/runs
