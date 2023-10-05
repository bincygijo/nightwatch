const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const featurePage = client.page.featuresSettings_po();
const addToCartPage = client.page.addToCart_po();

When(
  /^I update B2B "([^"]*)" as "([^"]*)" and click update button$/,
  async (settings, display) => {
    await featurePage.updateFeatureSetting(settings, display);
    await featurePage.clickUpdateButton();
  }
);

Then(
  /^I should verify Add to cart button is shown on product listing page$/,
  async () => {
    await addToCartPage.verifyAddToCartButton('Add to Cart');
  }
);

Then(
  /^I should verify Add to cart button is shown on product details page$/,
  async () => {
    await addToCartPage.verifyAddToCartButton('Add to Cart');
  }
);
When(
  /^I update B2B add-to-cart related features and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'on');
    await featurePage.updateFeatureSetting(
      'Display products on Back order as "In Stock"',
      'off'
    );
    await featurePage.updateFeatureSetting('Hide Out of Stock Items', 'off');
    await featurePage.updateFeatureSetting(
      'Hide Add to Cart for Out of Stock Items',
      'off'
    );
    await featurePage.clickUpdateButton();
  }
);

When(
  /^I switch off Hide Add to Cart for Out of Stock Items and switch on Enable Backorder and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'on');
    await featurePage.updateFeatureSetting(
      'Display products on Back order as "In Stock"',
      'off'
    );
    await featurePage.updateFeatureSetting('Hide Out of Stock Items', 'on');
    await featurePage.updateFeatureSetting(
      'Hide Add to Cart for Out of Stock Items',
      'off'
    );
    await featurePage.clickUpdateButton();
  }
);

When(
  /^I switch off Hide Add to Cart for Out of Stock Items and switch OFF Enable Backorder and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'off');
    await featurePage.updateFeatureSetting(
      'Display products on Back order as "In Stock"',
      'off'
    );
    await featurePage.updateFeatureSetting('Hide Out of Stock Items', 'on');
    await featurePage.updateFeatureSetting(
      'Hide Add to Cart for Out of Stock Items',
      'on'
    );
    await featurePage.clickUpdateButton();
  }
);

// Below is for B2C user only
When(
  /^I switch off allow Negative qty and switch on Enable Backorder and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Guest Ordering', 'on');
    await featurePage.clickUpdateButton();
  }
);

When(
  /^I switch off allow Negative qty and switch OFF Enable Backorder and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'off');
    await featurePage.updateFeatureSetting('Enable Guest Ordering', 'on');
    await featurePage.clickUpdateButton();
  }
);

When(
  /^I update B2C add-to-cart related features and click update button$/,
  async () => {
    await featurePage.updateFeatureSetting('Allow Fractional Quantities', 'on');
    await featurePage.updateFeatureSetting(
      'Allow Negative Quantity Levels',
      'off'
    );
    await featurePage.updateFeatureSetting('Enable Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Back Ordering', 'on');
    await featurePage.updateFeatureSetting('Enable Guest Ordering', 'on');
    await featurePage.clickUpdateButton();
  }
);

// Feature verification steps below
Then(
  /^I can verify "([^"]*)" link "([^"]*)" available$/,
  async (option, display) => {
    await featurePage.verifyPayOpenInvoice(option, display);
  }
);

Then(/^I see "([^"]*)" Menu page successfully loaded$/, async (pageTitle) => {
  await featurePage.verifyPageLoaded(pageTitle);
});

When(
  /^I update feature "([^"]*)" value to "([^"]*)"$/,
  async (elementName, value) => {
    await featurePage.setElementValue(elementName, value);
  }
);

Then(
  /^I can verify unit price showing "([^"]*)" decimals on "([^"]*)" page$/,
  async (noOfDecimals, pgName) => {
    await featurePage.verifyUnitPriceDecimals(pgName, noOfDecimals);
  }
);

When(/^I click update button$/, async () => {
  await featurePage.clickUpdateButton();
});
