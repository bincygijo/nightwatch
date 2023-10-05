const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const ieDriver = require('iedriver');
const geckoDriver = require('geckodriver');

module.exports = {
  src_folders: 'src/frontend/features',
  output_folder: 'reports/frontend',
  custom_commands_path: 'src/helper/custom_commands',
  custom_assertions_path: '',
  stepDefinitions: 'src/frontend/stepDefinitions',
  page_objects_path: 'src/frontend/pageObjects',
  test_settings: {
    default: {
      selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
          'webdriver.gecko.driver': geckoDriver.path,
          'webdriver.ie.driver': ieDriver.path,
        },
      },
    },
    chromeHeadless: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: [
            'headless',
            'no-sandbox',
            'disable-gpu',
            'window-size=1920,1080',
          ],
          w3c: false,
        },
        loggingPrefs: {
          driver: 'INFO',
          server: 'OFF',
          browser: 'INFO',
        },
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['start-maximized'],
          w3c: false,
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true,
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
      },
    },
    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true,
      },
    },
  },
};
