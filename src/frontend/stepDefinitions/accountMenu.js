const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const accountMenuPage = client.page.accountMenu_po();

When(/^I click on Account Menu$/, async () => {
  await accountMenuPage.clickAccountMenu();
});

Then(
  /^I should see "([^"]*)" details for recent order matching with one page$/,
  async (pgName) => {
    await accountMenuPage.verifyAccountMenuSummary(pgName);
    await accountMenuPage.verifyAccountMenuDetails(pgName);
  }
);

When(/^I click "([^"]*)" under Account Menu$/, async (option) => {
  await accountMenuPage.clickAccountMenuOption(option);
});

When(/^I click open first invoice under Pay Open Invoice$/, async () => {
  await accountMenuPage.openFirstInvoice();
});
