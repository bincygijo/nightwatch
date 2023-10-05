const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const customerPage = client.page.customer_po();
const adminSideMenu = client.page.adminSideMenu_po();
const addToCartPage = client.page.addToCart_po();

Given(/^I am on the admin dashboard$/, async () => {
  // await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  // await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
});

Given(/^I am on the Homepage as B2B user$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await addToCartPage.clearAllCartBeforeSearch();
});

Given(/^I am on the Manage Customers Menu$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickCustomerButton();
  await adminSideMenu.clickManageCustomerButton();
});

Then(/^I click New Public User$/, async () => {
  await customerPage.clickPublicUserButton();
});

When(
  /^I click Add New Public user and enter personal information$/,
  async (datatable) => {
    const data = datatable.raw();
    await customerPage.verifyEmailIDExists(data[1][2]);
    await customerPage.clickPublicUserButton();
    await customerPage.enterPersonalInformation(data);
  }
);

Then(/^I click on the Apply button$/, async () => {
  await customerPage.clickApplyButton();
});

Then(/^I should see the user is created successfully$/, async (datatable) => {
  const data = datatable.raw();
  await customerPage.verifyUserCreation(data);
});

Then(/^I delete the user which is created$/, async () => {
  await customerPage.deleteUser();
});

Then(/^I should see the user is deleted successfully$/, async () => {
  await customerPage.verifyActionNoWait();
});

When(/^I click Customers and Manage Customers link$/, async () => {
  await adminSideMenu.clickCustomerButton();
  await adminSideMenu.clickManageCustomerButton();
});

Then(/^I should see Active Customers page$/, async () => {
  await customerPage.verifyActiveCustomerPage();
});

When(/^I click on the Past Users link$/, async () => {
  await customerPage.clickPastUsers();
});

Then(/^I search one of the past users from the past users list$/, async () => {
  await customerPage.enterSearchDetails();
});

When(/^I click on the Edit button$/, async () => {
  await customerPage.clickEditPastUsers();
});

Then(/^I should navigate to Edit User page$/, async () => {
  await customerPage.verifyEditUserPage();
});

When(/^I click Activate button on the edit user page$/, async () => {
  await customerPage.clickActivePastUsers();
});

Then(/^I should see user has been reactivated success message$/, async () => {
  await customerPage.verifyAction();
});

When(
  /^I search for the same user from the active customers list$/,
  async () => {
    await customerPage.clickCustomersLink();
  }
);

Then(
  /^I should see the same reactivated user from the customers list$/,
  async () => {
    await customerPage.searchByUsername();
  }
);

When(/^I click on the Delete button$/, async () => {
  await customerPage.deleteActiveCustomer();
});

Then(/^I should see the user has been deleted success message$/, async () => {
  await customerPage.deleteSuccessMessage();
});

When(/^I search one of the B2C users from the customers list$/, async () => {
  await customerPage.searchByEmail('bincy7@gmail.com');
});

When(/^I click Assume button on the selected customer$/, async () => {
  await customerPage.clickAssume('bincy7@gmail.com');
});

Then(/^I should navigated to homepage$/, async () => {
  await loginPage.verifyHomePage();
});

Then(/^I should navigated to Active Customers page$/, async () => {
  await customerPage.verifyActiveCustomerPage();
});

When(/^I click New User button$/, async () => {
  await customerPage.clickNewUserButton();
});

Then(/^New User page is shown successfully$/, async () => {
  await customerPage.verifyActiveCustomerPage();
});

When(
  /^I choose Group type as "([^"]*)" and click continue$/,
  async (custGrp) => {
    await customerPage.selectGroup(custGrp);
  }
);

Then(/^Select Default customer screen is shown successfully$/, async () => {
  await customerPage.verifyActiveCustomerPage();
});

When(/^I select "([^"]*)" customer$/, async (customer) => {
  await customerPage.selectCustomer(customer);
});

Then(/^User setup screen is shown successfully$/, async () => {
  await customerPage.verifyActiveCustomerPage();
});

When(
  /^I enter personal information as below and click continue button$/,
  async (datatable) => {
    const data = datatable.raw();
    await customerPage.B2BUserSetup(data);
  }
);

Then(/^The B2B user is created successfully$/, async () => {
  await customerPage.verifyAction();
});

When(
  /^I click delete button against the user I created$/,
  async (datatable) => {
    const data = datatable.raw();
    await customerPage.deleteB2BUser(data[1][4]);
  }
);

Then(/^The user gets deleted successfully$/, async () => {
  await customerPage.verifyActionNoWait();
});

When(
  /^I click Register button and choose "([^"]*)" account and enter details as below and click submit button$/,
  async (userType, datatable) => {
    const data = datatable.raw();
    await customerPage.clickRegister(userType);
    await customerPage.RegisterUser(userType, data);
  }
);

When(/^I switch customer$/, async (dataTable) => {
  const custTable = dataTable.raw();
  await customerPage.checkNSwitchCustomer(custTable[1][0], custTable[1][1]);
  await addToCartPage.clearAllCartBeforeSearch();
});

When(
  /^I select Group type as Single User Remote Customer and click continue$/,
  async () => {
    await customerPage.selectGroupX3();
  }
);

When(/^I click on Log out button and I log in as B2B user$/, async () => {
  await customerPage.clickLogOutButton();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
});
