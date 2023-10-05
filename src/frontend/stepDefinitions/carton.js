const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const cartonPage = client.page.carton_po();

Then(/^I should see the "([^"]*)" loaded successfully$/, async (pageTitle) => {
  await cartonPage.verifyCartonManagementPage(pageTitle);
});

When(/^I click on Add Carton button$/, async () => {
  await cartonPage.clickAddCarton();
});

Then(/^A new carton row is added successfully$/, async () => {
  await cartonPage.verifyCartonRowCreated();
});

When(/^I enter all the carton details and click Save$/, async () => {
  await cartonPage.enterCartonDetails();
  await cartonPage.clickSaveButton();
});

Then(/^the new carton is created successfully$/, async () => {
  await cartonPage.verifyNewCartonCreated();
});

When(/^I click the delete button on the newly created carton$/, async () => {
  await cartonPage.deleteCartonCreated();
});

Then(/^the carton should be deleted successfully$/, async () => {
  await cartonPage.verifyCartonDelete('Carton has been deleted');
});
