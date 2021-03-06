# js-test

This repo provides a prototype for running integration tests in 2 modes:

1. CI integration tests
2. Environment integration tests

The objective of this pattern is to allow developers to write integration tests
for CI but get environment integration tests with limited additional effort.

## Run the tests

In both cases, we execute the same `example.test.js` file. Depending on which Jest
configuration file is used, it will either test our React app in CI mode or environment mode
(using Playwright).

- Install dependencies

  `yarn install`

- Run CI integration tests

  `yarn run jest`

- Run environment integration tests (2 steps)

  `yarn run webpack serve` (this starts HTTP server at localhost:9000)

  `yarn run jest -c jest.playwright.js`

### CI integration tests

These integration tests are entirely defined in the test-suite. API calls are mocked,
reducing flakiness and decreasing test execution speed. Most teams implement CI integration
tests.

### Environment integration tests

These test run in a web browser and target a running end-to-end environment (ie: staging or production).
When developers cannot foresee a possible bug, they often don't implement CI integration tests to
exercise a code path which will fail. In many cases, mismatched expectations between what the client receives
and what the server submits leads to failures in production. By testing in a staging or production environment,
we can capture these failures more quickly and reliably before they affect many users.
