const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();

Given(/^I am on the symphony home page$/, async () => {
  await loginPage.verifyHomePage();
});

When(/^I enter user and password$/, async () => {
  await loginPage.enterLoginCredentials();
});

When(/^I click sign in button$/, async () => {
  await loginPage.clickLoginButton();
});

Then(/^I should see the login page$/, async () => {
  await loginPage.verifyLogin();
});

When(/^I click Logout button on the homepage$/, async () => {
  await loginPage.clickLogout();
});

When(/^I enter B2C username and password$/, async (data) => {
  const uNamePwd = data.raw();
  await loginPage.enterB2CLoginCredentials(uNamePwd);
});

Then(/^I should see the B2C login page$/, async (data) => {
  const uNamePwd = data.raw();
  await loginPage.verifyB2CLogin(uNamePwd);
});
