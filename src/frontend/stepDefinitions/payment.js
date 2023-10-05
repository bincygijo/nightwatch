const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const paymentPage = client.page.payment_po();
const adminSideMenu = client.page.adminSideMenu_po();

Then(/^I should see Payment Method Settings page$/, async () => {
  await paymentPage.verifyPaymentPage();
});

Given(/^I am on the payment portal management page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickSystemButton();
  await adminSideMenu.clickPaymentSettingsButton();
  await adminSideMenu.clickPaymentMethods();
  await paymentPage.verifyPaymentPage();
  await paymentPage.clickRadioButton();
  await paymentPage.clickEditBeanstream();
  await paymentPage.verifyAddTerminalPage();
});

Then(
  /^I should see beanstream account settings page with account name Beanstream default$/,
  async () => {
    await paymentPage.verifyAddTerminalPage();
    await paymentPage.verifyBeanstreamAccountName();
  }
);

Given(/^I am on the Beanstream terminal listing page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickSystemButton();
  await adminSideMenu.clickPaymentSettingsButton();
  await adminSideMenu.clickPaymentMethods();
  await paymentPage.verifyPaymentPage();
  await paymentPage.clickRadioButton();
  await paymentPage.clickEditBeanstream();
  await paymentPage.verifyAddTerminalPage();
  await paymentPage.verifyBeanstreamAccountName();
});

When(/^I click on Add Terminal button$/, async () => {
  await paymentPage.clickAddTerminalButton();
});

Then(/^I should see terminal added with a success message$/, async () => {
  await paymentPage.verifyTerminalSuccessMessage();
});

When(/^I click Edit button on the terminal page$/, async () => {
  await paymentPage.clickButtonEdit();
});

When(/^I should navigate to edit terminal page$/, async () => {
  await paymentPage.verifyEditBeanstreamPage();
});

When(/^I update Currency Restriction$/, async () => {
  await paymentPage.clickCurrency();
});

When(/^I click Apply button$/, async () => {
  await paymentPage.clickApplyButton();
});

When(
  /^I click Back button I should navigated to terminal listing page$/,
  async () => {
    await paymentPage.clickBackButton();
  }
);

When(/^I click delete button$/, async () => {
  await paymentPage.clickDelete();
});

When(/^I should see delete pop up window$/, async () => {
  await paymentPage.verifyModelTitle();
});

Then(
  /^I click delete pop up window I should see terminal delete success message$/,
  async () => {
    await paymentPage.deleteTerminal();
  }
);
