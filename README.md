### Get Started

Nightwatch is Node.js based automation framework.Full details can be found here [website](http://nightwatchjs.org/).Also in this project we use nightwatch cucumber plugin for BDD testing.

### To Start

When you download the solution from BitBucket it will already have the `node_modules` downloaded with it.
But if you want to start from scratch, delete the downloaded `node_modules` and run the following command in the terminal of your favourite IDE or command line

Installing fresh node_modules:
```bash
npm install
```

To run test suite:

```bash
npm run test
```

To run the test suite against chrome:
```bash
npm run test:chrome
```

Lint the code, this script will find any code syntax error. Good to run this before running any tests:
```bash
npm run lint
```

Fix code syntax errors:
```bash
npm run lint:fix
```