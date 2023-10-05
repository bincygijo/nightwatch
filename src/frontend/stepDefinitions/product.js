const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const productsPage = client.page.product_po();
const customerPage = client.page.customer_po();

Given(/^I am on the sage admin page$/, async () => {
  // await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  // await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
});

Then(/^I should see the Product Management page$/, async () => {
  await productsPage.verifyPage();
});

When(/^I search for a product code "([^"]*)" and click edit$/, async (code) => {
  await productsPage.searchEditProductCode(code);
});

Then(/^I should see the product general settings page$/, async () => {
  await productsPage.verifyProductSettingsPage();
});

When(
  /^I add a warehouse restriction "([^"]*)" for that product and click Save button$/,
  async (wCode) => {
    await productsPage.addWarehouse(wCode);
    await productsPage.clickApply();
  }
);

Then(
  /^I should see the warehouse restriction is applied for the product successfully$/,
  async () => {
    await productsPage.verifyAction();
  }
);

When(
  /^I remove the warehouse restriction for the same product and click Save button$/,
  async () => {
    await productsPage.RemoveAddedWarehouse();
    await productsPage.clickApply();
  }
);

Then(/^I should see the product updated successfully$/, async () => {
  await productsPage.verifyAction();
});

Then(/^I should navigated to the Configurator Products page$/, async () => {
  await productsPage.verifyPage();
});

Then(/^I should navigated to the Custom Fields page$/, async () => {
  await productsPage.verifyPage();
});

Then(
  /^I should verify the product code "([^"]*)" and price "([^"]*)" in product detail page$/,
  async (code, price) => {
    await productsPage.verifyProductCode(code);
    await productsPage.verifyProductPrice(price);
  }
);

When(
  /^I apply for inclusion for the customer "([^"]*)" in the product level$/,
  async (customer) => {
    await productsPage.applyInclusionCustomer(customer);
  }
);

Then(/^I should see "([^"]*)"$/, async (message) => {
  await productsPage.verifyInclusionMessage(message);
});

Then(
  /^I should verify the product "([^"]*)" in product listing page$/,
  async (pName) => {
    await productsPage.verifyProductNameAfterInclusion(pName);
  }
);

Then(/^I switch back to default customer$/, async (dataTable) => {
  const custTable = dataTable.raw();
  await customerPage.checkNSwitchCustomer(custTable[1][0], custTable[1][1]);
});

When(
  /^I apply for exclusion for the customer "([^"]*)" in the product level$/,
  async (customer) => {
    await productsPage.applyExclusionCustomer(customer);
  }
);
