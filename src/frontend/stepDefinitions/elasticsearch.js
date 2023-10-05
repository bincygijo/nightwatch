const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const ElasticsearchPage = client.page.elasticsearch_po();

Then(/^I should see the elasticsearch manage modules page$/, async () => {
  await ElasticsearchPage.verifyElasticsearchManageModulePage();
});

When(/^I click on the reindex button$/, async () => {
  await ElasticsearchPage.clickReIndexButton();
});

Then(/^I should see the job in progress info pop up$/, async () => {
  await ElasticsearchPage.verifyProgressPopup();
});

When(/^I refresh the page the status should say "([^"]*)"$/, async (result) => {
  await ElasticsearchPage.verifyFinishStatus(result);
});
