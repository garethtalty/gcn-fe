# task
[./docs/task.pdf](task.pdf)
# running

1. visit: https://garethtalty.github.io/gcn-fe or;
2. clone https://garethtalty.github.io/gcn-fe, `$ npm install && npm run start`. visit `http://localhost:3000`,
  - note, this app has been built using the current LTS version of Node (node 14 & npm 6). While this app may build on lower versions, this has not been tested for the purposes of this task.
  - The app must be viewed in Chrome at iPhone 6 resolution (375x667).

# existing navigation critique
A full critique of the existing navigation is provided [here](./docs/CURRENT_NAV_CRITIQUE.md) and this solution aims to implement the suggestions outlined in the Recommendations section.

# testing
Unit tests can be run with `npm run test` or `npm run test:unit`. Integration tests are written with [Cypress](https://www.cypress.io/) and require the app to be started on `http://localhost:3000` to run successfully.

# Prepare app for Production
This section outlines the steps that are required to prepare this solution for production (in no real order, and probably not exhaustive).
1. Configure production build accordingly. Under the hood, create-react-app uses webpack to produce the build. There are some sensible defaults provided when doing a production build through CRA, however they should be optimized as appropriate, paying attention to code-splitting and asset caching.
2. Measure application performance and implement any enhancements.
3. Evaluate the application with an accessibility checker and implement a11y improvements.
4. Upload and serve assets from a CDN, such as Amazon Cloudfront.
5. Include analytics and any other necessary 3rd party/vendor scripts.
6. Containerize the application.
7. Extend test suites to provide automated coverage across all in-scope browsers.
8. Ensure solution meets relevant acceptance criteria
9. Build the application through a CI pipeline with:
   - test runners
   - code quality gates (tooling like sonarqube, lighthouse)

# future ideas for discussion
- Fetch video data through proxy

- Throttle vs intersection observer
- 
- Eject from CRA (or not)

- Todo's

- Storybook component lib

- CRA template / index html title
