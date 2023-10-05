const { client } = require('nightwatch-api');
const { Then } = require('cucumber');

const cartPage = client.page.cart_po();

Then(
  /^I should verify cart widget product price as well as cart page$/,
  async () => {
    await cartPage.verifyCartWidget();
  }
);
