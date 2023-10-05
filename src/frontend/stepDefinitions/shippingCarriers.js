const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const CarrierPage = client.page.shippingCarriers_po();
const ItemSettings = client.page.item_settings_po();

Then(/^I should see available carriers page$/, async () => {
  await CarrierPage.verifyCarrierPage();
});

When(/^I click Edit Carriers name$/, async (dataTable) => {
  const carrier = dataTable.raw();
  await CarrierPage.clickEditCarrierName(carrier[1][0]);
});

When(/^I select Restriction Type$/, async (dataTable) => {
  const restrictionType = dataTable.raw();
  await CarrierPage.selectRestrictionType(restrictionType[1][0]);
});

When(/^I select Restriction Value$/, async (dataTable) => {
  const restrictionValue = dataTable.raw();
  await CarrierPage.selectRestrictionValue(restrictionValue[1][0]);
});

Then(/^I should see "([^"]*)" successfully$/, async (message) => {
  await CarrierPage.verifyCarriersPage(message);
});
Then(
  /^I should verify the carrier code in the shipping method page$/,
  async (dataTable) => {
    const carrierValues = dataTable.raw();
    await CarrierPage.verifyCarrierCodeShippingPage(
      carrierValues[1][0],
      carrierValues[1][1]
    );
    await CarrierPage.VerifyError();
  }
);

When(/^I update below calculation settings$/, async (dataTable) => {
  await CarrierPage.updateCarrierCalculationSettings(dataTable);
});

When(/^I update below item settings$/, async (dataTable) => {
  await ItemSettings.updateItemSettings(dataTable);
});

Then(
  /^I should verify below XM Carrier results on one-page checkout$/,
  async (dataTable) => {
    await CarrierPage.verifyShippingCarrier(dataTable);
  }
);
