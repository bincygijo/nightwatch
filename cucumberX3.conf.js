/* eslint-disable import/extensions */
/* this is a setup file.Basically allows us to setup/end
certain things before and after the test scenarios */
import { generate } from 'cucumber-html-reporter';

import {
  setDefaultTimeout,
  BeforeAll,
  Before,
  After,
  AfterAll,
} from 'cucumber';

import {
  client,
  createSession,
  startWebDriver,
  stopWebDriver,
  closeSession,
} from 'nightwatch-api';

setDefaultTimeout(120000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chrome' });
  await createSession();
});

Before(async () => {
  await client.url(
    'https://x3automationnew.int-mysagestore.com/en_US/user/logout'
  );
  await client.pause(3000);
});

After(async () => {
  await client.url(
    'https://x3automationnew.int-mysagestore.com/en_US/user/logout'
  );
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    generate({
      theme: 'bootstrap',
      jsonFile: 'src/reports/cucumber.json',
      output: 'src/reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        'App Version': 'v4',
        'Test Environment': 'INT',
        'Test Site': 'https://x3automationnew.int-mysagestore.com/',
        Browser: 'Chrome  75',
        Platform: 'Windows 10',
        Executed: 'Remote',
      },
    });
  }, 0);
});
