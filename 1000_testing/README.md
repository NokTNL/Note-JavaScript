# Setting up Jest

- Note: these tutorial files need to be bundled with webpck by running `npm start` first

To install Jest: `npm i --save-dev jest`

- To enable intellisense for Jest too: `npm i --save-dev @types/jest`

- Note: Jest is more suited with CommonJS modules syntax

# Writing tests

- test files end with `.test.js`, e.g. `util.test.js`

# Running tests

- just run `jest` at the root. This will run all children files that ends with `.test.js`
  - in this tutorial file, you can add `jest` to the `scripts` inside `package.json`
    - or `jest --watch` so every time you save files, the test will run automatically

# Writing E2E tests with puppeteer

- Puppeteer is a "headless" version of Chrome
- Alternative: Cypress
