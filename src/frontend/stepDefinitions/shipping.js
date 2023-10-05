const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const ShippingPage = client.page.shipping_po();

When(/^I click on the Edit button for "([^"]*)"$/, async (Carrier) => {
  await ShippingPage.EditButton(Carrier);
});

Then(/^Shipping module page is shown successfully$/, async () => {
  await ShippingPage.showShippingModule();
});

When(/^I enter all details for UPS main settings$/, async (datatable) => {
  const data = datatable.raw();
  await ShippingPage.fillUpUPSServiceDetails(data);
});

When(/^I enter all details for FedEx main settings$/, async (datatable) => {
  const data = datatable.raw();
  await ShippingPage.fillUpFedExServiceDetails(data);
});

When(/^I enable available services with below services$/, async (datatable) => {
  const ServiceNamesTable = datatable.raw();
  await ShippingPage.chooseShippingService(ServiceNamesTable);
});

Then(
  /^I Click Apply button and see setting is saved successfully$/,
  async () => {
    await ShippingPage.save();
  }
);

When(/^I enter below sender details$/, async (data) => {
  const senderDetails = data.raw();
  await ShippingPage.fillSenderDetails(senderDetails);
});
