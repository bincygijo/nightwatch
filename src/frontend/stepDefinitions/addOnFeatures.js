const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const addOnFeaturesPage = client.page.addOnFeatures_po();
const adminSideMenuPage = client.page.adminSideMenu_po();
const addToCartPage = client.page.addToCart_po();

Then(/^I should see the addOnFeatures page$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

When(/^I click on the Customer Ship-to Custom Fields button$/, async () => {
  await addOnFeaturesPage.clickCustomShipToButton();
});

When(/^I click on the apply button to save settings$/, async () => {
  await addOnFeaturesPage.clickButtonApply();
});

When(/^I click on Customer Menu$/, async () => {
  await adminSideMenuPage.clickCustomersMenu();
});

When(/^I click on Customer settings Menu$/, async () => {
  await adminSideMenuPage.clickCustomerSettingsMenu();
});

When(/^I click on Custom Fields Ship-to Menu$/, async () => {
  await adminSideMenuPage.clickCustomFieldsShipto();
});

Then(/^I should see Customer Ship-to Custom Fields page$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

When(
  /^I click on add new custom fields if not added already$/,
  async (datatable) => {
    const data = datatable.raw();
    await addOnFeaturesPage.clickVerifyNewCustomFields(data);
  }
);

Then(/^I should see "([^"]*)" message$/, async (message) => {
  await addOnFeaturesPage.verifyCustomFieldsCreated(message);
});

When(/^I search for "([^"]*)" Customer$/, async (customerDetail) => {
  await addOnFeaturesPage.clickSearchCustomer(customerDetail);
});

Then(/^I find entry for Customer "([^"]*)"$/, async (customerDetail) => {
  await addOnFeaturesPage.verifyCustomerFound(customerDetail);
});

When(/^I click on Locations button$/, async () => {
  await addOnFeaturesPage.clickLocations();
});

Then(/^Ship-to Location Management page is shown successfully$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

When(
  /^I search for "([^"]*)" location and hit Go button$/,
  async (locationDetail) => {
    await addOnFeaturesPage.searchLocation(locationDetail);
  }
);

Then(/^I find entry for "([^*]*)" location$/, async (locationDetail) => {
  await addOnFeaturesPage.verifyLocationFound(locationDetail);
});

When(
  /^I click on Edit button for "([^"]*)" location$/,
  async (locationDetail) => {
    await addOnFeaturesPage.editLocation(locationDetail);
  }
);

When(
  /^I click on Custom Fields Dropdown and set below values$/,
  async (datatable) => {
    const warehouseValues = datatable.raw();
    await addOnFeaturesPage.setWarehouse(warehouseValues);
  }
);

When(/^I click on Update Custom Fields button$/, async () => {
  await addOnFeaturesPage.updateCustomFields();
});

Then(
  /^Custom ship-to fields are assigned to Location and message "([^"]*)" is shown$/,
  async (successMsg) => {
    await addOnFeaturesPage.verifyCustomSettingSavedPage(successMsg);
  }
);

Then(/^Customer Listing page is loaded successfully$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

Then(/^I should see msg "([^"]*)"$/, async (msg) => {
  await addToCartPage.VerifyPopUpMessage(msg, 'other');
});

Then(/^I should see registration confirmation as "([^"]*)"$/, async (msg) => {
  await addToCartPage.VerifyPopUpMessage(msg, 'registration');
});

Then(/^Shopping Cart page is displayed successfully$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

When(
  /^I click on shipping-to link and ensure shipping address is set to "([^"]*)"$/,
  async (shipToAddress) => {
    await addOnFeaturesPage.checkShiptoAddress(shipToAddress);
  }
);

Then(
  /^Warehouse order on cart matches with admin setting for that shipping-to location$/,
  async (data) => {
    const ItemWarehouse = data.raw();
    await addOnFeaturesPage.verifyWarehouseOrderOnCartPage(ItemWarehouse);
  }
);
